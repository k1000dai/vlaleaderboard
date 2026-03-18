# AGENTS.md

This repository is easy to update through data files. For normal leaderboard maintenance, agents should change data, not UI.

## Goal

Use this guide when adding:

- a new model
- a new benchmark result for an existing model
- a new benchmark registry

## Default Rule

For ordinary result updates, only edit:

- `src/data/models.ts`
- `src/data/benchmarks.ts`

Do not edit routes, pages, or components unless the user explicitly asks for UI or schema changes.

## Source of Truth

- Model registry: `src/data/models.ts`
- Benchmark registry: `src/data/benchmarks.ts`
- Shared types: `src/types/index.ts`

The UI reads from these registries automatically:

- overview page
- benchmark pages
- models page
- benchmark navigation menu

## Workflow For Adding Results

### 1. Check whether the model already exists

Search `src/data/models.ts` for the model ID or model name.

If the model exists:

- reuse the existing `id`
- do not create duplicates with slightly different casing or punctuation

If the model does not exist:

- add a new entry to `MODELS`
- include as much metadata as the source supports

Preferred fields:

- `id`
- `name`
- `organization`
- `paper`
- `githubUrl`
- `websiteUrl`
- `huggingfaceUrl`
- `isOpenSource`
- `dateAdded`
- `modelSize`

## Model Entry Rules

- `id` must exactly match the `modelId` used in benchmark scores.
- Use `YYYY-MM-DD` for `dateAdded`.
- Prefer `paper.arxivId` when available.
- Use `paper.url` when the source is a project page, PDF, or non-arXiv paper.
- Minimal entries are acceptable if public metadata is incomplete.

Example:

```ts
'model-id': {
  id: 'model-id',
  name: 'Model Name',
  organization: 'Organization Name',
  paper: {
    title: 'Paper Title',
    authors: ['Author 1', 'Author 2'],
    year: 2026,
    arxivId: '2601.12345',
  },
  githubUrl: 'https://github.com/org/repo',
  isOpenSource: true,
  dateAdded: '2026-03-18',
  modelSize: '3b',
}
```

## Benchmark Result Rules

When adding a score to `src/data/benchmarks.ts`:

- place it in the correct benchmark's `scores` array
- set `modelId` to an existing model `id`
- put the primary leaderboard metric in `score`
- put sub-metrics in `details`
- use only metric IDs already defined in that benchmark's `metrics`
- update the benchmark's `lastUpdated`

Example:

```ts
{
  modelId: 'model-id',
  score: 85.5,
  details: {
    easy: 90.0,
    hard: 70.0,
  },
  notes: 'Optional clarification if the source needs one.',
}
```

## New Benchmark Rules

Only add a new benchmark if the user explicitly asks for it or the task clearly requires it.

If adding a benchmark:

1. Create a new `Benchmark` constant in `src/data/benchmarks.ts`.
2. Define `id`, `name`, `shortName`, `description`, `category`, `metrics`, `lastUpdated`, and `scores`.
3. Add links such as `paper`, `githubUrl`, `websiteUrl`, and `datasetUrls` when available.
4. Register the benchmark in `ALL_BENCHMARKS`.

Important:

- Keep `shortName` concise because it is used in navigation and chips.
- The `metrics` array defines the allowed keys in every score `details` object.

## Things Agents Should Avoid

- Do not rename existing model IDs unless the user explicitly asks.
- Do not remove existing scores without a clear correction request.
- Do not change formatting or unrelated code while adding data.
- Do not invent missing metadata. Omit uncertain fields instead.
- Do not add comments that repeat obvious field meanings.

## Verification

After updating data, run:

```bash
npm run build
```

Preferred if time permits:

```bash
npm run lint
```

## Expected Final Report

When finishing a result-update task, summarize:

- which model entries were added or changed
- which benchmark entries were added or changed
- whether `lastUpdated` was changed
- whether `npm run build` passed
