#!/usr/bin/env node
// Regenerates src/data/robolab.ts from the official NVIDIA RoboLab leaderboard JSON.
//
// Usage: node scripts/update-robolab.mjs
//
// The script downloads the official leaderboard data, validates its shape,
// maps upstream entry ids onto existing model ids in src/data/models.ts,
// and rewrites src/data/robolab.ts deterministically. Existing model entries
// in src/data/models.ts are never modified; only models missing from the
// registry are emitted into the generated ROBOLAB_MODELS map.
//
// Exits non-zero when the upstream data is missing, malformed, or empty, so
// CI never commits a broken registry.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SOURCE_URL =
  'https://research.nvidia.com/labs/srl/projects/robolab/static/data/leaderboard.json';
const LEADERBOARD_PAGE_URL =
  'https://research.nvidia.com/labs/srl/projects/robolab/leaderboard.html';
const GITHUB_URL = 'https://github.com/NVLabs/RoboLab';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MODELS_PATH = join(REPO_ROOT, 'src', 'data', 'models.ts');
const OUTPUT_PATH = join(REPO_ROOT, 'src', 'data', 'robolab.ts');

// Upstream entry id -> existing model id in src/data/models.ts.
const MODEL_ID_ALIASES = {
  pi05: 'pi0.5',
  'pi0-fast': 'pi0fast',
  gr00t: 'gr00tn1.6',
  pi0: 'pi0',
};

const DIFFICULTY_TIERS = ['simple', 'moderate', 'complex'];
const COMPETENCY_AXES = ['procedural', 'relational', 'visual'];

function fail(message) {
  console.error(`update-robolab: ${message}`);
  process.exit(1);
}

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function quote(value) {
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

async function fetchUpstream() {
  let response;
  try {
    response = await fetch(SOURCE_URL);
  } catch (error) {
    fail(`failed to fetch ${SOURCE_URL}: ${error.message}`);
  }
  if (!response.ok) {
    fail(`unexpected HTTP ${response.status} from ${SOURCE_URL}`);
  }
  const body = await response.text();
  try {
    return JSON.parse(body);
  } catch {
    fail(`response from ${SOURCE_URL} is not valid JSON`);
  }
}

function validateUpstream(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    fail('upstream payload is not a JSON object');
  }
  if (!isNonEmptyString(data.generated_at) || !/^\d{4}-\d{2}-\d{2}T/.test(data.generated_at)) {
    fail('upstream payload is missing a valid generated_at timestamp');
  }
  const benchmark = data.benchmark;
  if (!benchmark || typeof benchmark !== 'object') {
    fail('upstream payload is missing the benchmark block');
  }
  if (!isNonEmptyString(benchmark.name)) {
    fail('upstream benchmark has no name');
  }
  if (!Number.isInteger(benchmark.task_count) || benchmark.task_count <= 0) {
    fail('upstream benchmark has an invalid task_count');
  }
  if (!Number.isInteger(benchmark.episodes_per_task) || benchmark.episodes_per_task <= 0) {
    fail('upstream benchmark has an invalid episodes_per_task');
  }
  if (!isNonEmptyString(benchmark.robot)) {
    fail('upstream benchmark has no robot description');
  }
  if (!Array.isArray(data.entries) || data.entries.length === 0) {
    fail('upstream payload contains no leaderboard entries');
  }
  for (const entry of data.entries) {
    if (!entry || typeof entry !== 'object' || !isNonEmptyString(entry.id)) {
      fail('upstream entry is missing an id');
    }
    if (!isNonEmptyString(entry.display_name)) {
      fail(`upstream entry '${entry.id}' has no display_name`);
    }
    const defaultResult = entry.results && entry.results.default;
    if (!defaultResult || typeof defaultResult !== 'object') {
      fail(`upstream entry '${entry.id}' has no default instruction-variant results`);
    }
    if (!isFiniteNumber(defaultResult.sr) || defaultResult.sr < 0 || defaultResult.sr > 100) {
      fail(`upstream entry '${entry.id}' has an invalid default success rate`);
    }
  }
}

function readExistingModelIds() {
  let source;
  try {
    source = readFileSync(MODELS_PATH, 'utf8');
  } catch (error) {
    fail(`failed to read ${MODELS_PATH}: ${error.message}`);
  }
  const ids = new Set();
  for (const match of source.matchAll(/^\s*(['"])([^'"]+)\1\s*:\s*\{/gm)) {
    ids.add(match[2]);
  }
  for (const match of source.matchAll(/\bid\s*:\s*(['"])([^'"]+)\1/g)) {
    ids.add(match[2]);
  }
  if (ids.size === 0) {
    fail(`could not parse any model ids from ${MODELS_PATH}`);
  }
  return ids;
}

function buildScoreDetails(defaultResult) {
  const details = {};
  if (isFiniteNumber(defaultResult.score)) {
    details.score = defaultResult.score;
  }
  for (const tier of DIFFICULTY_TIERS) {
    const sr = defaultResult.by_difficulty?.[tier]?.sr;
    if (isFiniteNumber(sr)) {
      details[tier] = sr;
    }
  }
  for (const axis of COMPETENCY_AXES) {
    const sr = defaultResult.by_axis?.[axis]?.sr;
    if (isFiniteNumber(sr)) {
      details[axis] = sr;
    }
  }
  if (isFiniteNumber(defaultResult.ee_speed_cm_s)) {
    details.ee_speed = defaultResult.ee_speed_cm_s;
  }
  if (isFiniteNumber(defaultResult.ee_sparc)) {
    details.ee_sparc = defaultResult.ee_sparc;
  }
  return details;
}

function buildGeneratedModel(entry, modelId, fallbackDate) {
  const model = { id: modelId, name: entry.display_name.trim() };
  if (isNonEmptyString(entry.organization)) {
    model.organization = entry.organization.trim();
  }
  const openSourcingStatus = entry.open_sourcing?.status;
  if (openSourcingStatus === 'open') {
    model.isOpenSource = true;
  } else if (openSourcingStatus === 'closed') {
    model.isOpenSource = false;
  }
  const dateAdded = entry.provenance?.date_added;
  model.dateAdded = /^\d{4}-\d{2}-\d{2}$/.test(dateAdded ?? '') ? dateAdded : fallbackDate;
  return model;
}

function renderModel(model) {
  const lines = [`  ${quote(model.id)}: {`];
  lines.push(`    id: ${quote(model.id)},`);
  lines.push(`    name: ${quote(model.name)},`);
  if (model.organization !== undefined) {
    lines.push(`    organization: ${quote(model.organization)},`);
  }
  if (model.isOpenSource !== undefined) {
    lines.push(`    isOpenSource: ${model.isOpenSource},`);
  }
  lines.push(`    dateAdded: ${quote(model.dateAdded)},`);
  lines.push('  },');
  return lines.join('\n');
}

function renderScore(score, sourceNote) {
  const detailPairs = Object.entries(score.details)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  const lines = ['    {'];
  lines.push(`      modelId: ${quote(score.modelId)},`);
  lines.push(`      score: ${score.score},`);
  if (detailPairs.length > 0) {
    lines.push(`      details: { ${detailPairs} },`);
  }
  lines.push(`      notes: ${quote(sourceNote)},`);
  lines.push('    },');
  return lines.join('\n');
}

function renderModule(data, models, scores) {
  const benchmark = data.benchmark;
  const lastUpdated = data.generated_at.slice(0, 10);
  const description =
    `${benchmark.name}: ${benchmark.task_count} language-conditioned manipulation tasks ` +
    `(${benchmark.episodes_per_task} episodes per task) evaluated in high-fidelity simulation ` +
    `on ${benchmark.robot}. Scores are the official default instruction variant. ` +
    `Source: ${SOURCE_URL} (upstream data generated at ${data.generated_at}).`;

  const modelsLiteral =
    models.length > 0 ? `{\n${models.map(renderModel).join('\n')}\n}` : '{}';
  const sourceNote =
    `Official RoboLab-120 result for the default instruction variant. ` +
    `Source: ${SOURCE_URL} (upstream data generated at ${data.generated_at}).`;
  const scoreBlocks = scores.map((score) => renderScore(score, sourceNote)).join('\n');

  return `// ============================================
// RoboLab Benchmark Registry (GENERATED FILE)
// ============================================
// Generated by scripts/update-robolab.mjs. Do not edit by hand.
// Source: ${SOURCE_URL}
// Upstream generated_at: ${data.generated_at}
// ============================================

import type { Benchmark, ModelEntry } from '../types';

// Models discovered on the RoboLab leaderboard that are not part of the
// hand-maintained registry in src/data/models.ts. Existing registry entries
// always take precedence over these.
export const ROBOLAB_MODELS: Record<string, ModelEntry> = ${modelsLiteral};

export const ROBO_LAB: Benchmark = {
  id: 'robolab',
  name: ${quote(benchmark.name)},
  shortName: 'RoboLab',
  description: ${quote(description)},
  iconEmoji: '🔬',
  category: 'simulation',
  paper: {
    title: 'RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies',
    authors: ['Xuning Yang', 'Rishit Dagli', 'Alex Zook', 'Hugo Hadfield', 'Ankit Goyal', 'Stan Birchfield', 'Fabio Ramos', 'Jonathan Tremblay'],
    venue: 'RSS',
    year: 2026,
    arxivId: '2604.09860',
  },
  websiteUrl: ${quote(LEADERBOARD_PAGE_URL)},
  githubUrl: ${quote(GITHUB_URL)},
  metrics: [
    { id: 'sr', name: 'Success Rate', description: 'Overall success rate, default instruction variant', higherIsBetter: true, format: 'percentage' },
    { id: 'score', name: 'Subtask Score', description: 'Subtask-progress score x100', higherIsBetter: true, format: 'percentage' },
    { id: 'simple', name: 'Simple SR', description: 'Success rate on simple tasks', higherIsBetter: true, format: 'percentage' },
    { id: 'moderate', name: 'Moderate SR', description: 'Success rate on moderate tasks', higherIsBetter: true, format: 'percentage' },
    { id: 'complex', name: 'Complex SR', description: 'Success rate on complex tasks', higherIsBetter: true, format: 'percentage' },
    { id: 'procedural', name: 'Procedural SR', description: 'Success rate on the procedural competency axis', higherIsBetter: true, format: 'percentage' },
    { id: 'relational', name: 'Relational SR', description: 'Success rate on the relational competency axis', higherIsBetter: true, format: 'percentage' },
    { id: 'visual', name: 'Visual SR', description: 'Success rate on the visual competency axis', higherIsBetter: true, format: 'percentage' },
    { id: 'ee_speed', name: 'EE Speed', description: 'End-effector speed in cm/s, excludes inference time', higherIsBetter: true, format: 'decimal' },
    { id: 'ee_sparc', name: 'EE SPARC', description: 'End-effector spectral arc length, closer to 0 is smoother', higherIsBetter: true, format: 'decimal' },
  ],
  lastUpdated: ${quote(lastUpdated)},
  taskTypes: ['manipulation'],
  scores: [
${scoreBlocks}
  ],
};
`;
}

const data = await fetchUpstream();
validateUpstream(data);

const existingModelIds = readExistingModelIds();
const fallbackDate = data.generated_at.slice(0, 10);

const scores = [];
const generatedModels = [];
const seenModelIds = new Set();

for (const entry of data.entries) {
  const modelId = MODEL_ID_ALIASES[entry.id] ?? entry.id;
  if (seenModelIds.has(modelId)) {
    fail(`duplicate model id '${modelId}' after alias mapping`);
  }
  seenModelIds.add(modelId);
  if (!existingModelIds.has(modelId)) {
    generatedModels.push(buildGeneratedModel(entry, modelId, fallbackDate));
  }
  scores.push({
    modelId,
    score: entry.results.default.sr,
    details: buildScoreDetails(entry.results.default),
  });
}

scores.sort((a, b) => b.score - a.score || a.modelId.localeCompare(b.modelId));
generatedModels.sort((a, b) => a.id.localeCompare(b.id));

writeFileSync(OUTPUT_PATH, renderModule(data, generatedModels, scores));
console.log(
  `update-robolab: wrote ${OUTPUT_PATH} (${scores.length} scores, ${generatedModels.length} generated models, upstream ${data.generated_at})`
);
