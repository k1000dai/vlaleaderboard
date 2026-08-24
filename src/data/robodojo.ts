// ============================================
// RoboDojo-Sim official leaderboard snapshot
// Source: https://robodojo-benchmark.com/leaderboard
// Snapshot updated: 2026-08-24
// ============================================

import type { Benchmark, ModelEntry } from '../types';

const SOURCE_URL = 'https://robodojo-benchmark.com/leaderboard';
const PAPER_URL = 'https://arxiv.org/abs/2607.04434';
const REPOSITORY_URL = 'https://github.com/RoboDojo-Benchmark/RoboDojo';
const SNAPSHOT_DATE = '2026-08-24';

const sourceModel = (id: string, name: string, organization: string): ModelEntry => ({
  id,
  name,
  organization,
  dateAdded: SNAPSHOT_DATE,
});

// The official leaderboard does not publish complete metadata for every row.
// Keep those entries minimal rather than inferring papers, checkpoints, or sizes.
export const ROBODOJO_MODELS: Record<string, ModelEntry> = {
  'dm0.5': sourceModel('dm0.5', 'DM0.5', 'Dexmal'),
  'galaxeavla-g0.5': sourceModel('galaxeavla-g0.5', 'GalaxeaVLA (G0.5)', 'Galaxea AI'),
  'xiaomi-robotics-1': sourceModel('xiaomi-robotics-1', 'Xiaomi-Robotics-1', 'Xiaomi Robotics'),
  'hy-embodied-0.5-vla': sourceModel('hy-embodied-0.5-vla', 'Hy-Embodied-0.5-VLA', 'Tencent Robotics X'),
  'spatial-forcing': sourceModel('spatial-forcing', 'Spatial Forcing', 'OpenHelix Robotics'),
  'pi0.5': sourceModel('pi0.5', 'Pi0.5', 'RoboDojo Team'),
  'internvla-a1.5': sourceModel('internvla-a1.5', 'InternVLA-A1.5', 'InternVLA Team'),
  'vlact': sourceModel('vlact', 'VLAct', 'StarVLA Team'),
  'x-vla': sourceModel('x-vla', 'X-VLA', 'RoboDojo Team'),
  'x-wam': sourceModel('x-wam', 'X-WAM', 'X-WAM Team'),
  'xiaomi-robotics-0': sourceModel('xiaomi-robotics-0', 'Xiaomi-Robotics-0', 'RoboDojo Team'),
  'starvla': sourceModel('starvla', 'StarVLA', 'RoboDojo Team'),
  'gigaworld-policy-0': sourceModel('gigaworld-policy-0', 'GigaWorld-Policy-0', 'RoboDojo Team'),
  'galaxeavla-g0': sourceModel('galaxeavla-g0', 'GalaxeaVLA (G0)', 'RoboDojo Team'),
  'lingbot-vla': sourceModel('lingbot-vla', 'LingBot-VLA', 'RoboDojo Team'),
  'eventvla': sourceModel('eventvla', 'EventVLA', 'SJTU ScaleLab'),
  'aha-wam': sourceModel('aha-wam', 'AHA-WAM', 'SJTU ScaleLab'),
  'abot-m0': sourceModel('abot-m0', 'ABot-M0', 'RoboDojo Team'),
  'fast-wam': sourceModel('fast-wam', 'Fast-WAM', 'RoboDojo Team'),
  pi0: sourceModel('pi0', 'Pi0', 'RoboDojo Team'),
  'gr00tn1.7': sourceModel('gr00tn1.7', 'GROOT-N1.7', 'RoboDojo Team'),
  'internvla-a1': sourceModel('internvla-a1', 'InternVLA-A1', 'RoboDojo Team'),
  'smolvla-single-task': sourceModel('smolvla-single-task', 'SmolVLA (Single Task)', 'RoboDojo Team'),
  'lda-1b': sourceModel('lda-1b', 'LDA-1B', 'RoboDojo Team'),
  molmoact2: sourceModel('molmoact2', 'MolmoAct2', 'RoboDojo Team'),
  'go-1': sourceModel('go-1', 'GO-1', 'RoboDojo Team'),
  'act-single-task': sourceModel('act-single-task', 'ACT (Single Task)', 'RoboDojo Team'),
  'h-rdt': sourceModel('h-rdt', 'H-RDT', 'RoboDojo Team'),
  rdt: sourceModel('rdt', 'RDT', 'RoboDojo Team'),
  dm0: sourceModel('dm0', 'DM0', 'RoboDojo Team'),
  'dexora-1b': sourceModel('dexora-1b', 'Dexora-1B', 'RoboDojo Team'),
  a1: sourceModel('a1', 'A1', 'RoboDojo Team'),
  'spirit-v1.5': sourceModel('spirit-v1.5', 'Spirit v1.5', 'RoboDojo Team'),
  tinyvla: sourceModel('tinyvla', 'TinyVLA', 'RoboDojo Team'),
  'openvla-oft': sourceModel('openvla-oft', 'OpenVLA-OFT', 'RoboDojo Team'),
};

export const ROBO_DOJO_SIM: Benchmark = {
  id: 'robodojo-sim',
  name: 'RoboDojo-Sim',
  shortName: 'RoboDojo',
  description: 'A 42-task simulation benchmark for generalist robot manipulation across generalization, memory, precision, long-horizon, and open-vocabulary capabilities.',
  iconEmoji: '🥋',
  category: 'simulation',
  paper: {
    title: 'RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies',
    authors: ['Tianxing Chen', 'Yue Chen', 'Zixuan Li', 'et al.'],
    year: 2026,
    arxivId: '2607.04434',
  },
  websiteUrl: 'https://robodojo-benchmark.com/',
  githubUrl: REPOSITORY_URL,
  datasetUrls: {
    other: 'https://robodojo-benchmark.com/doc/usage/install-and-download/',
  },
  metrics: [
    { id: 'average', name: 'Average Score', higherIsBetter: true, format: 'decimal' },
    { id: 'average_success_rate', name: 'Average SR', higherIsBetter: true, format: 'percentage' },
    { id: 'generalization_std', name: 'Gen-Std', higherIsBetter: true, format: 'decimal' },
    { id: 'generalization_std_sr', name: 'Gen-Std SR', higherIsBetter: true, format: 'percentage' },
    { id: 'generalization_rand', name: 'Gen-Rand', higherIsBetter: true, format: 'decimal' },
    { id: 'generalization_rand_sr', name: 'Gen-Rand SR', higherIsBetter: true, format: 'percentage' },
    { id: 'precision', name: 'Precision', higherIsBetter: true, format: 'decimal' },
    { id: 'precision_sr', name: 'Precision SR', higherIsBetter: true, format: 'percentage' },
    { id: 'long_horizon', name: 'Long-Horizon', higherIsBetter: true, format: 'decimal' },
    { id: 'long_horizon_sr', name: 'Long-Horizon SR', higherIsBetter: true, format: 'percentage' },
    { id: 'memory', name: 'Memory', higherIsBetter: true, format: 'decimal' },
    { id: 'memory_sr', name: 'Memory SR', higherIsBetter: true, format: 'percentage' },
    { id: 'open', name: 'Open', higherIsBetter: true, format: 'decimal' },
    { id: 'open_sr', name: 'Open SR', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: SNAPSHOT_DATE,
  taskTypes: ['generalist manipulation', 'multi-task', 'long-horizon', 'open-vocabulary'],
  scores: [
    { modelId: 'dm0.5', score: 24.90, details: { average_success_rate: 19.34, generalization_std: 23.49, generalization_std_sr: 18, generalization_rand: 8.06, generalization_rand_sr: 4, precision: 24.82, precision_sr: 16.75, long_horizon: 33.70, long_horizon_sr: 19.50, memory: 47.74, memory_sr: 47.44, open: 2.43, open_sr: 2.08 } },
    { modelId: 'galaxeavla-g0.5', score: 20.23, details: { average_success_rate: 14.88, generalization_std: 26.74, generalization_std_sr: 20, generalization_rand: 11.16, generalization_rand_sr: 6, precision: 28.25, precision_sr: 20.42, long_horizon: 44.12, long_horizon_sr: 32.25, memory: 8.61, memory_sr: 7.33, open: 1.73, open_sr: 1.58 } },
    { modelId: 'xiaomi-robotics-1', score: 20.07, details: { average_success_rate: 13.93, generalization_std: 35.65, generalization_std_sr: 28, generalization_rand: 11.44, generalization_rand_sr: 6, precision: 26.69, precision_sr: 18.83, long_horizon: 38.39, long_horizon_sr: 23.67, memory: 7.81, memory_sr: 6.56, open: 3.94, open_sr: 3.58 } },
    { modelId: 'hy-embodied-0.5-vla', score: 13.07, details: { average_success_rate: 8.80, generalization_std: 21.98, generalization_std_sr: 17, generalization_rand: 1.57, generalization_rand_sr: 0, precision: 13.81, precision_sr: 8, long_horizon: 25.74, long_horizon_sr: 14.92, memory: 13.37, memory_sr: 12.11, open: 0.65, open_sr: 0.58 } },
    { modelId: 'spatial-forcing', score: 12.38, details: { average_success_rate: 8.04, generalization_std: 21.25, generalization_std_sr: 15, generalization_rand: 6.98, generalization_rand_sr: 4, precision: 17.33, precision_sr: 10.58, long_horizon: 23.26, long_horizon_sr: 14.58, memory: 5.43, memory_sr: 4.11, open: 1.78, open_sr: 1.58 } },
    { modelId: 'pi0.5', score: 11.41, details: { average_success_rate: 6.91, generalization_std: 20.93, generalization_std_sr: 15, generalization_rand: 5.82, generalization_rand_sr: 1, precision: 12.40, precision_sr: 5.5, long_horizon: 23.54, long_horizon_sr: 14.67, memory: 5.78, memory_sr: 4.56, open: 1.98, open_sr: 1.67 } },
    { modelId: 'internvla-a1.5', score: 11.15, details: { average_success_rate: 7.14, generalization_std: 16.81, generalization_std_sr: 12, generalization_rand: 3.90, generalization_rand_sr: 2, precision: 15.23, precision_sr: 10.17, long_horizon: 23.80, long_horizon_sr: 13.75, memory: 4.93, memory_sr: 3.56, open: 1.43, open_sr: 1.42 } },
    { modelId: 'vlact', score: 10.66, details: { average_success_rate: 7.60, generalization_std: 16.33, generalization_std_sr: 12, generalization_rand: 2.74, generalization_rand_sr: 1, precision: 20.62, precision_sr: 15.25, long_horizon: 20.12, long_horizon_sr: 13.67, memory: 0.66, memory_sr: 0.56, open: 2.37, open_sr: 2.25 } },
    { modelId: 'x-vla', score: 10.13, details: { average_success_rate: 6.52, generalization_std: 17.90, generalization_std_sr: 12, generalization_rand: 3.04, generalization_rand_sr: 1, precision: 18.32, precision_sr: 12, long_horizon: 16.53, long_horizon_sr: 9.75, memory: 4.76, memory_sr: 3.56, open: 0.55, open_sr: 0.50 } },
    { modelId: 'x-wam', score: 7.69, details: { average_success_rate: 3.83, generalization_std: 11.24, generalization_std_sr: 5, generalization_rand: 3.54, generalization_rand_sr: 1, precision: 6.72, precision_sr: 1.83, long_horizon: 17.47, long_horizon_sr: 9.08, memory: 6.32, memory_sr: 4.67, open: 0.57, open_sr: 0.25 } },
    { modelId: 'xiaomi-robotics-0', score: 6.93, details: { average_success_rate: 4.18, generalization_std: 13.81, generalization_std_sr: 11, generalization_rand: 1.05, generalization_rand_sr: 0, precision: 8.42, precision_sr: 4.58, long_horizon: 13.51, long_horizon_sr: 6.92, memory: 5.07, memory_sr: 3.67, open: 0.22, open_sr: 0.17 } },
    { modelId: 'starvla', score: 6.40, details: { average_success_rate: 3.24, generalization_std: 7.54, generalization_std_sr: 5, generalization_rand: 0.33, generalization_rand_sr: 0, precision: 9.90, precision_sr: 4.33, long_horizon: 14.15, long_horizon_sr: 6.50, memory: 3.34, memory_sr: 2.44, open: 0.68, open_sr: 0.58 } },
    { modelId: 'gigaworld-policy-0', score: 6.20, details: { average_success_rate: 3.27, generalization_std: 10.28, generalization_std_sr: 6, generalization_rand: 0.41, generalization_rand_sr: 0, precision: 6.15, precision_sr: 1.83, long_horizon: 15.51, long_horizon_sr: 8.92, memory: 3.46, memory_sr: 2.22, open: 0.54, open_sr: 0.50 } },
    { modelId: 'galaxeavla-g0', score: 5.82, details: { average_success_rate: 2.96, generalization_std: 8.71, generalization_std_sr: 6, generalization_rand: 0.36, generalization_rand_sr: 0, precision: 8.10, precision_sr: 3.83, long_horizon: 12.60, long_horizon_sr: 5.58, memory: 3.17, memory_sr: 1.89, open: 0.70, open_sr: 0.67 } },
    { modelId: 'lingbot-vla', score: 5.50, details: { average_success_rate: 2.96, generalization_std: 10.88, generalization_std_sr: 8, generalization_rand: 2.55, generalization_rand_sr: 1, precision: 5.33, precision_sr: 1.83, long_horizon: 10.89, long_horizon_sr: 5.25, memory: 3.82, memory_sr: 2.78, open: 0.72, open_sr: 0.67 } },
    { modelId: 'eventvla', score: 4.97, details: { average_success_rate: 2.81, generalization_std: 6.68, generalization_std_sr: 3, generalization_rand: 1.22, generalization_rand_sr: 0, precision: 10.13, precision_sr: 5.75, long_horizon: 5.05, long_horizon_sr: 0.83, memory: 4.92, memory_sr: 4.78, open: 0.80, open_sr: 0.75 } },
    { modelId: 'aha-wam', score: 4.82, details: { average_success_rate: 2.39, generalization_std: 10.32, generalization_std_sr: 6, generalization_rand: 1.26, generalization_rand_sr: 0, precision: 5.86, precision_sr: 2.42, long_horizon: 8.61, long_horizon_sr: 2.67, memory: 2.97, memory_sr: 2.78, open: 0.88, open_sr: 0.83 } },
    { modelId: 'abot-m0', score: 3.67, details: { average_success_rate: 1.73, generalization_std: 9.20, generalization_std_sr: 5, generalization_rand: 2.26, generalization_rand_sr: 2, precision: 5.50, precision_sr: 1.75, long_horizon: 3.96, long_horizon_sr: 0.50, memory: 2.44, memory_sr: 2.22, open: 0.72, open_sr: 0.67 } },
    { modelId: 'fast-wam', score: 3.48, details: { average_success_rate: 2.03, generalization_std: 4.33, generalization_std_sr: 2, generalization_rand: 0.34, generalization_rand_sr: 0, precision: 1.96, precision_sr: 0, long_horizon: 9.14, long_horizon_sr: 5.17, memory: 3.55, memory_sr: 3.44, open: 0.42, open_sr: 0.42 } },
    { modelId: 'pi0', score: 3.48, details: { average_success_rate: 1.53, generalization_std: 7.18, generalization_std_sr: 5, generalization_rand: 0.71, generalization_rand_sr: 0, precision: 3.56, precision_sr: 0.75, long_horizon: 6.19, long_horizon_sr: 2, memory: 3.47, memory_sr: 2.11, open: 0.25, open_sr: 0.25 } },
    { modelId: 'gr00tn1.7', score: 2.85, details: { average_success_rate: 1.31, generalization_std: 3.97, generalization_std_sr: 2, generalization_rand: 0.35, generalization_rand_sr: 0, precision: 2.54, precision_sr: 0.67, long_horizon: 8.30, long_horizon_sr: 3.58, memory: 1.06, memory_sr: 0.89, open: 0.18, open_sr: 0.17 } },
    { modelId: 'internvla-a1', score: 2.48, details: { average_success_rate: 1.08, generalization_std: 5.22, generalization_std_sr: 4, generalization_rand: 0.51, generalization_rand_sr: 0, precision: 3.00, precision_sr: 0.92, long_horizon: 4.79, long_horizon_sr: 1.17, memory: 1.58, memory_sr: 1.33, open: 0.17, open_sr: 0.17 } },
    { modelId: 'smolvla-single-task', score: 1.83, details: { average_success_rate: 0.85, generalization_std: 3.28, generalization_std_sr: 2, generalization_rand: 0.09, generalization_rand_sr: 0, precision: 2.87, precision_sr: 0.33, long_horizon: 1.22, long_horizon_sr: 0.25, memory: 3.35, memory_sr: 2.44, open: 0, open_sr: 0 } },
    { modelId: 'lda-1b', score: 1.58, details: { average_success_rate: 0.51, generalization_std: 1.44, generalization_std_sr: 0, generalization_rand: 0.18, generalization_rand_sr: 0, precision: 3.21, precision_sr: 0.50, long_horizon: 1.92, long_horizon_sr: 0.08, memory: 2.08, memory_sr: 1.78, open: 0, open_sr: 0 } },
    { modelId: 'molmoact2', score: 1.02, details: { average_success_rate: 0.38, generalization_std: 0.73, generalization_std_sr: 0, generalization_rand: 0.04, generalization_rand_sr: 0, precision: 0.45, precision_sr: 0, long_horizon: 2.32, long_horizon_sr: 0, memory: 1.02, memory_sr: 1, open: 0.91, open_sr: 0.83 } },
    { modelId: 'go-1', score: 0.99, details: { average_success_rate: 0.53, generalization_std: 3.16, generalization_std_sr: 2, generalization_rand: 0.01, generalization_rand_sr: 0, precision: 1.45, precision_sr: 0.42, long_horizon: 1.13, long_horizon_sr: 0.25, memory: 0.70, memory_sr: 0.67, open: 0.08, open_sr: 0.08 } },
    { modelId: 'act-single-task', score: 0.98, details: { average_success_rate: 0.32, generalization_std: 1.37, generalization_std_sr: 1, generalization_rand: 0, generalization_rand_sr: 0, precision: 0.85, precision_sr: 0, long_horizon: 1.73, long_horizon_sr: 0.92, memory: 1.65, memory_sr: 0.13, open: 0, open_sr: 0 } },
    { modelId: 'h-rdt', score: 0.67, details: { average_success_rate: 0.12, generalization_std: 0.89, generalization_std_sr: 0, generalization_rand: 0.09, generalization_rand_sr: 0, precision: 0.41, precision_sr: 0, long_horizon: 2.23, long_horizon_sr: 0.17, memory: 0.12, memory_sr: 0.11, open: 0.08, open_sr: 0.08 } },
    { modelId: 'rdt', score: 0.51, details: { average_success_rate: 0.13, generalization_std: 0.82, generalization_std_sr: 0, generalization_rand: 0.29, generalization_rand_sr: 0, precision: 0.38, precision_sr: 0, long_horizon: 1.13, long_horizon_sr: 0, memory: 0.49, memory_sr: 0.33, open: 0, open_sr: 0 } },
    { modelId: 'dm0', score: 0.45, details: { average_success_rate: 0.05, generalization_std: 0.93, generalization_std_sr: 0, generalization_rand: 0.04, generalization_rand_sr: 0, precision: 0.61, precision_sr: 0, long_horizon: 0.97, long_horizon_sr: 0.08, memory: 0.20, memory_sr: 0.11, open: 0, open_sr: 0 } },
    { modelId: 'dexora-1b', score: 0.38, details: { average_success_rate: 0.02, generalization_std: 0.80, generalization_std_sr: 0, generalization_rand: 0.18, generalization_rand_sr: 0, precision: 0.49, precision_sr: 0, long_horizon: 0.82, long_horizon_sr: 0, memory: 0.12, memory_sr: 0, open: 0.01, open_sr: 0 } },
    { modelId: 'a1', score: 0.28, details: { average_success_rate: 0.02, generalization_std: 0.28, generalization_std_sr: 0, generalization_rand: 0.04, generalization_rand_sr: 0, precision: 0.09, precision_sr: 0, long_horizon: 1.07, long_horizon_sr: 0, memory: 0, memory_sr: 0, open: 0.08, open_sr: 0.08 } },
    { modelId: 'spirit-v1.5', score: 0.23, details: { average_success_rate: 0.14, generalization_std: 1.60, generalization_std_sr: 1, generalization_rand: 0, generalization_rand_sr: 0, precision: 0.03, precision_sr: 0, long_horizon: 0.11, long_horizon_sr: 0, memory: 0.22, memory_sr: 0.22, open: 0, open_sr: 0 } },
    { modelId: 'tinyvla', score: 0.22, details: { average_success_rate: 0.07, generalization_std: 0.06, generalization_std_sr: 0, generalization_rand: 0.01, generalization_rand_sr: 0, precision: 0.05, precision_sr: 0, long_horizon: 0.67, long_horizon_sr: 0, memory: 0.11, memory_sr: 0.11, open: 0.25, open_sr: 0.25 } },
    { modelId: 'openvla-oft', score: 0.21, details: { average_success_rate: 0.02, generalization_std: 0.03, generalization_std_sr: 0, generalization_rand: 0.06, generalization_rand_sr: 0, precision: 0.20, precision_sr: 0, long_horizon: 0.70, long_horizon_sr: 0, memory: 0, memory_sr: 0, open: 0.08, open_sr: 0.08 } },
  ],
};

export { PAPER_URL, SOURCE_URL };
