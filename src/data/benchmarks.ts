// ============================================
// VLA Simulation Benchmarks Registry (Strictly based on provided info)
// ============================================

import type { Benchmark } from '../types';

// ============================================
// LIBERO
// ============================================
export const LIBERO: Benchmark = {
  id: 'libero',
  name: 'LIBERO',
  shortName: 'LIBERO',
  description: 'Benchmarking knowledge transfer for lifelong robot learning.',
  iconEmoji: '📚',
  category: 'multi-task',
  paper: {
    title: 'LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning',
    authors: ['Bo Liu', 'et al.'],
    venue: 'NeurIPS',
    year: 2023,
    arxivId: '2306.03310',
  },
  websiteUrl: 'https://lifelong-robot-learning.github.io/LIBERO/',
  githubUrl: 'https://github.com/Lifelong-Robot-Learning/LIBERO',
  datasetUrls: {
    rlds: 'https://huggingface.co/datasets/openvla/modified_libero_rlds',
    lerobot: 'https://huggingface.co/datasets/HuggingFaceVLA/libero',
  },
  metrics: [
    { id: 'avg', name: 'Avg. Success', higherIsBetter: true, format: 'percentage' },
    { id: 'goal', name: 'LIBERO-Goal', higherIsBetter: true, format: 'percentage' },
    { id: 'long', name: 'LIBERO-Long', higherIsBetter: true, format: 'percentage' },
    { id: 'object', name: 'LIBERO-Object', higherIsBetter: true, format: 'percentage' },
    { id: 'spatial', name: 'LIBERO-Spatial', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    {
      modelId: 'vla-adapter-pro',
      score: 98.5,
      details: { goal: 98.2, long: 96.4, object: 99.6, spatial: 99.6 }
    },
    {
      modelId: 'x-vla',
      score: 98.1,
      details: { goal: 97.8, long: 97.6, object: 98.6, spatial: 98.2 }
    },
    {
      modelId: 'flower',
      score: 96.9,
      details: { goal: 96.1, long: 94.9, object: 99.1, spatial: 97.5 }
    },
    {
      modelId: 'pi0.5',
      score: 96.85,
      details: { goal: 98.0, long: 92.4, object: 98.2, spatial: 98.8 }
    },
    {
      modelId: 'pi0',
      score: 94.15,
      details: { goal: 95.8, long: 85.2, object: 98.8, spatial: 96.8 }
    },
    {
      modelId: 'smolvla-0.45b',
      score: 87.3,
      details: { goal: 92.0, long: 71.0, object: 96.0, spatial: 90.0 }
    },
    {
      modelId: 'pi0fast',
      score: 85.5,
      details: { goal: 88.6, long: 60.2, object: 96.8, spatial: 96.4 }
    },
    {
      modelId: 'octo',
      score: 75.1,
      details: { goal: 84.6, long: 51.1, object: 85.7, spatial: 78.9 }
    },
    {
      modelId: 'vla-0',
      score: 94.7,
      details: { goal: 96.2, long: 87.6, object: 97.8, spatial: 97.0 }
    },
    {
      modelId: 'gr00tn1.6',
      score: 96.99,
      details: { goal: 97.5, long: 94.35, object: 98.45, spatial: 97.65 }
    },
    {
     modelId: 'thinkact',
     score: 84.4,
     details: { goal: 87.1, long: 70.9, object: 91.4, spatial: 88.3}
    },
    {
        modelId: 'openvla-oft',
        score: 97.1,
        details: {goal : 97.9, long : 94.5, object: 98.4, spatial: 97.6}
    },
    {
        modelId: 'cot-vla',
        score : 81.13,
        details : {goal : 87.6, long : 69.0, object:91.6, spatial : 87.5}
    }
  ],
};

// ============================================
// CALVIN
// ============================================
export const CALVIN: Benchmark = {
  id: 'calvin',
  name: 'CALVIN',
  shortName: 'CALVIN',
  description: 'Language-conditioned policy learning for long-horizon robot manipulation.',
  iconEmoji: '📦',
  category: 'manipulation',
  paper: {
    title: 'CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks',
    authors: ['Oier Mees', 'et al.'],
    venue: 'RA-L',
    year: 2022,
    arxivId: '2112.03227',
  },
  websiteUrl: 'http://calvin.cs.uni-freiburg.de/',
  githubUrl: 'https://github.com/mees/calvin',
  datasetUrls: {
    other: 'https://github.com/mees/calvin/tree/main/dataset',
  },
  metrics: [
    { id: 'avg_len', name: 'Avg. Length', higherIsBetter: true, format: 'decimal' },
    { id: 'sr_1', name: 'SR (1 task)', higherIsBetter: true, format: 'percentage' },
    { id: 'sr_2', name: 'SR (2 tasks)', higherIsBetter: true, format: 'percentage' },
    { id: 'sr_3', name: 'SR (3 tasks)', higherIsBetter: true, format: 'percentage' },
    { id: 'sr_4', name: 'SR (4 tasks)', higherIsBetter: true, format: 'percentage' },
    { id: 'sr_5', name: 'SR (5 tasks)', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    { modelId: 'flower', score: 4.53, details: { sr_1: 99.4, sr_2: 95.8, sr_3: 90.7, sr_4: 84.9, sr_5: 77.8, avg_len: 4.53 } },
    { modelId: 'vla-adapter-pro', score: 4.5, details: { sr_1: 98.5, sr_2: 95.0, sr_3: 90.5, sr_4: 85.3, sr_5: 80.0, avg_len: 4.5 } },
    { modelId: 'x-vla', score: 4.43, details: { sr_1: 97.1, sr_2: 92.6, sr_3: 88.5, sr_4: 84.4, sr_5: 78.8, avg_len: 4.43 } },
    { modelId: 'univla', score: 4.41, details: { sr_1: 98.9, sr_2: 94.8, sr_3: 89.0, sr_4: 82.8, sr_5: 75.1, avg_len: 4.41 } },
  ],
};

// ============================================
// VLABench
// ============================================
export const VLABENCH: Benchmark = {
  id: 'vlabench',
  name: 'VLABench',
  shortName: 'VLABench',
  description: 'A benchmark for Vision-Language-Action models with diverse robotic primitives.',
  iconEmoji: '⚖️',
  category: 'simulation',
  paper: {
    title: 'VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks',
    authors: ['VLABench Team'],
    venue: 'arXiv',
    year: 2024,
    arxivId: '2412.18194',
  },
  datasetUrls: {
    lerobot: 'https://huggingface.co/datasets/VLABench/vlabench_primitive_ft_lerobot',
    rlds: 'https://huggingface.co/datasets/VLABench/vlabench_primitive_rlds_resize224',
  },
  metrics: [
    { id: 'avg', name: 'Avg. Success', higherIsBetter: true, format: 'percentage' },
    { id: 'track_1_in_distribution', name: 'Track 1 - In Distribution', higherIsBetter: true, format: 'percentage' },
    { id: 'track_2_cross_category', name: 'Track 2 - Cross Category', higherIsBetter: true, format: 'percentage' },
    { id: 'track_3_common_sense', name: 'Track 3 - Common Sense', higherIsBetter: true, format: 'percentage' },
    { id: 'track_4_semantic_instruction', name: 'Track 4 - Semantic Instruction', higherIsBetter: true, format: 'percentage' },
    { id: 'track_6_unseen_texture', name: 'Track 6 - Unseen Texture', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    {
      modelId: 'x-vla',
      score: 51.05,
      details: { track_3_common_sense: 48.2, track_2_cross_category: 25.1, track_1_in_distribution: 67.8, track_4_semantic_instruction: 63.1 }
    },
    {
      modelId: 'pi0',
      score: 29.36,
      details: { track_3_common_sense: 29.1, track_2_cross_category: 21.2, track_1_in_distribution: 47.0, track_4_semantic_instruction: 17.3, track_6_unseen_texture: 32.2 }
    },
    {
      modelId: 'pi0.5',
      score: 24.58,
      details: { track_3_common_sense: 18.0, track_2_cross_category: 22.6, track_1_in_distribution: 40.6, track_4_semantic_instruction: 16.1, track_6_unseen_texture: 25.6 }
    },
    {
      modelId: 'pi0fast',
      score: 22.36,
      details: { track_3_common_sense: 21.1, track_2_cross_category: 18.1, track_1_in_distribution: 29.1, track_4_semantic_instruction: 19.9, track_6_unseen_texture: 23.6 }
    },
  ],
};

// ============================================
// Meta-World
// ============================================
export const META_WORLD: Benchmark = {
  id: 'meta-world',
  name: 'Meta-World',
  shortName: 'Meta-World',
  description: 'A benchmark for multi-task and meta reinforcement learning.',
  iconEmoji: '🌍',
  category: 'multi-task',
  paper: {
    title: 'Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning',
    authors: ['Tianhe Yu', 'et al.'],
    venue: 'CoRL',
    year: 2020,
    arxivId: '1910.10897',
  },
  websiteUrl: 'https://meta-world.github.io/',
  githubUrl: 'https://github.com/Farama-Foundation/Metaworld',
  datasetUrls: {
    lerobot: 'https://huggingface.co/datasets/lerobot/metaworld_mt50',
  },
  metrics: [
    { id: 'avg', name: 'Avg. Success', higherIsBetter: true, format: 'percentage' },
    { id: 'easy', name: 'Easy', higherIsBetter: true, format: 'percentage' },
    { id: 'medium', name: 'Medium', higherIsBetter: true, format: 'percentage' },
    { id: 'hard', name: 'Hard', higherIsBetter: true, format: 'percentage' },
    { id: 'very_hard', name: 'Very Hard', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    { modelId: 'smolvla-0.45b', score: 57.3, details: { easy: 82.5, medium: 41.8, hard: 45.0, very_hard: 60.0 } },
    { modelId: 'pi0', score : 50.5, details: {easy : 80.4, medium:40.9, hard : 36.7, very_hard: 44.0},
    notes: 'This score is based on the smolVLA paper. Maybe uses the lerobot pi0 model.'},
  ],
};

// ============================================
// RoboTwin 2.0
// ============================================
export const ROBOTWIN: Benchmark = {
  id: 'robotwin',
  name: 'RoboTwin 2.0',
  shortName: 'RoboTwin',
  description: 'A dual-arm robot manipulation benchmark with digital twin capabilities.',
  iconEmoji: '👯',
  category: 'simulation',
  paper: {
    title: 'RoboTwin: Dual-Arm Robot Manipulation Benchmark',
    authors: ['Tianxing Chen', 'et al.'],
    venue: 'arXiv',
    year: 2025,
    arxivId: '2506.18088',
  },
  websiteUrl: 'https://robotwin-platform.github.io/',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/TianxingChen/RoboTwin2.0/tree/main/dataset',
  },
  metrics: [
    { id: 'easy', name: 'Easy', higherIsBetter: true, format: 'percentage' },
    { id: 'hard', name: 'Hard', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    { modelId: 'x-vla', score: 70.0, details: { easy: 70.0, hard: 39.0 } },
    { modelId: 'pi0', score: 46.4, details: { easy: 46.4, hard: 16.3 } },
  ],
};

// ============================================
// SIMPLER-Env
// ============================================
export const SIMPLER_ENV: Benchmark = {
  id: 'simpler-env',
  name: 'SIMPLER-Env',
  shortName: 'SIMPLER',
  description: 'Evaluating real-world robot manipulation policies in simulation.',
  iconEmoji: '🤖',
  category: 'simulation',
  paper: {
    title: 'Evaluating Real-World Robot Manipulation Policies in Simulation',
    authors: ['Xuanlin Li', 'et al.'],
    venue: 'CoRL',
    year: 2024,
    arxivId: '2405.05941',
  },
  websiteUrl: 'https://simpler-env.github.io/',
  metrics: [
    { id: 'avg_success', name: 'Avg. Success', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [],
};

// ============================================
// LIBERO-PRO
// ============================================
export const LIBERO_PRO: Benchmark = {
  id: 'libero-pro',
  name: 'LIBERO-PRO',
  shortName: 'LIBERO-PRO',
  description: 'Probing the Robustness and Generalization of VLA models on LIBERO.',
  iconEmoji: '🧪',
  category: 'simulation',
  paper: {
    title: 'LIBERO-PRO: Towards Robust and Fair Evaluation of Vision-Language-Action Models Beyond Memorization',
    authors: ['Research Team'],
    venue: 'arXiv',
    year: 2025,
    arxivId: '2510.03827',
  },
  githubUrl: 'https://github.com/Zxy-MLlab/LIBERO-PRO',
  metrics: [
    { id: 'total', name: 'Total', higherIsBetter: true, format: 'decimal' },
    // LIBERO-Goal
    { id: 'goal_obj', name: 'Goal (Obj)', higherIsBetter: true, format: 'decimal' },
    { id: 'goal_pos', name: 'Goal (Pos)', higherIsBetter: true, format: 'decimal' },
    { id: 'goal_sem', name: 'Goal (Sem)', higherIsBetter: true, format: 'decimal' },
    { id: 'goal_task', name: 'Goal (Task)', higherIsBetter: true, format: 'decimal' },
    { id: 'goal_env', name: 'Goal (Env)', higherIsBetter: true, format: 'decimal' },
    // LIBERO-Spatial
    { id: 'spatial_obj', name: 'Spatial (Obj)', higherIsBetter: true, format: 'decimal' },
    { id: 'spatial_pos', name: 'Spatial (Pos)', higherIsBetter: true, format: 'decimal' },
    { id: 'spatial_sem', name: 'Spatial (Sem)', higherIsBetter: true, format: 'decimal' },
    { id: 'spatial_task', name: 'Spatial (Task)', higherIsBetter: true, format: 'decimal' },
    { id: 'spatial_env', name: 'Spatial (Env)', higherIsBetter: true, format: 'decimal' },
    // LIBERO-10
    { id: 'l10_obj', name: 'L10 (Obj)', higherIsBetter: true, format: 'decimal' },
    { id: 'l10_pos', name: 'L10 (Pos)', higherIsBetter: true, format: 'decimal' },
    { id: 'l10_sem', name: 'L10 (Sem)', higherIsBetter: true, format: 'decimal' },
    { id: 'l10_task', name: 'L10 (Task)', higherIsBetter: true, format: 'decimal' },
    { id: 'l10_env', name: 'L10 (Env)', higherIsBetter: true, format: 'decimal' },
    // LIBERO-Object
    { id: 'obj_obj', name: 'Object (Obj)', higherIsBetter: true, format: 'decimal' },
    { id: 'obj_pos', name: 'Object (Pos)', higherIsBetter: true, format: 'decimal' },
    { id: 'obj_sem', name: 'Object (Sem)', higherIsBetter: true, format: 'decimal' },
    { id: 'obj_task', name: 'Object (Task)', higherIsBetter: true, format: 'decimal' },
    { id: 'obj_env', name: 'Object (Env)', higherIsBetter: true, format: 'decimal' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    {
      modelId: 'pi0.5',
      score: 0.53,
      details: {
        goal_obj: 0.97, goal_pos: 0.38, goal_sem: 0.97, goal_task: 0.00, goal_env: 0.46,
        spatial_obj: 0.97, spatial_pos: 0.20, spatial_sem: 0.97, spatial_task: 0.01, spatial_env: 0.46,
        l10_obj: 0.92, l10_pos: 0.08, l10_sem: 0.93, l10_task: 0.01, l10_env: 0.46,
        obj_obj: 0.98, obj_pos: 0.17, obj_sem: 0.96, obj_task: 0.01, obj_env: 0.73
      }
    },
    {
      modelId: 'openvla',
      score: 0.52,
      details: {
        goal_obj: 0.96, goal_pos: 0.00, goal_sem: 0.98, goal_task: 0.00, goal_env: 0.98,
        spatial_obj: 0.97, spatial_pos: 0.00, spatial_sem: 0.97, spatial_task: 0.00, spatial_env: 0.89,
        l10_obj: 0.81, l10_pos: 0.00, l10_sem: 0.96, l10_task: 0.00, l10_env: 0.85,
        obj_obj: 0.98, obj_pos: 0.00, obj_sem: 0.98, obj_task: 0.00, obj_env: 0.00
      }
    },
    {
      modelId: 'x-vla',
      score: 0.46,
      details: {
        goal_obj: 0.68, goal_pos: 0.01, goal_sem: 0.98, goal_task: 0.09,
        spatial_obj: 0.97, spatial_pos: 0.00, spatial_sem: 0.96, spatial_task: 0.00,
        l10_obj: 0.62, l10_pos: 0.00, l10_sem: 0.95, l10_task: 0.10,
        obj_obj: 0.89, obj_pos: 0.02, obj_sem: 0.98, obj_task: 0.08
      }
    },
    {
      modelId: 'pi0',
      score: 0.44,
      details: {
        goal_obj: 0.94, goal_pos: 0.00, goal_sem: 0.93, goal_task: 0.00, goal_env: 0.39,
        spatial_obj: 0.95, spatial_pos: 0.00, spatial_sem: 0.97, spatial_task: 0.00, spatial_env: 0.60,
        l10_obj: 0.79, l10_pos: 0.00, l10_sem: 0.82, l10_task: 0.00, l10_env: 0.27,
        obj_obj: 0.94, obj_pos: 0.00, obj_sem: 0.90, obj_task: 0.00, obj_env: 0.29
      }
    },
    {
      modelId: 'molmoact',
      score: 0.41,
      details: {
        goal_obj: 0.68, goal_pos: 0.00, goal_sem: 0.85, goal_task: 0.00,
        spatial_obj: 0.90, spatial_pos: 0.00, spatial_sem: 0.88, spatial_task: 0.00,
        l10_obj: 0.54, l10_pos: 0.00, l10_sem: 0.74, l10_task: 0.06,
        obj_obj: 0.92, obj_pos: 0.06, obj_sem: 0.96, obj_task: 0.00
      }
    },
  ],
};

// ============================================
// BEHAVIOR-1K
// ============================================
export const BEHAVIOR: Benchmark = {
  id: 'behavior',
  name: 'BEHAVIOR-1K',
  shortName: 'BEHAVIOR',
  description: 'A benchmark for general robot control with 1,000 everyday activities.',
  iconEmoji: '🏠',
  category: 'simulation',
  paper: {
    title: 'BEHAVIOR-1K: A Multi-Task, Multi-Scene Benchmark for Robotic Manipulation',
    authors: ['NVIDIA GR00T Team', 'et al.'],
    year: 2024,
    url: 'https://behavior.stanford.edu/',
  },
  websiteUrl: 'https://behavior.stanford.edu/',
  githubUrl: 'https://github.com/StanfordVL/BEHAVIOR-1K',
  datasetUrls: {
    lerobot: 'https://huggingface.co/datasets/behavior-1k/2025-challenge-demos',
    other: "https://huggingface.co/datasets/behavior-1k/2025-challenge-rawdata"
  },
  metrics: [
    { id: 'avg', name: 'Avg. Progress', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2025-12-19',
  scores: [
    {
      modelId: 'gr00tn1.6',
      score: 26.3,
      details: {
        avg: 26.3,
      }
    },
    {
      modelId: 'pi0.5',
      score: 11.3,
      details: {
        avg: 11.3, 
      }
    }
  ],
};

// ============================================
// Benchmark Registry
// ============================================
export const ALL_BENCHMARKS: Benchmark[] = [
  LIBERO,
  CALVIN,
  VLABENCH,
  META_WORLD,
  ROBOTWIN,
  SIMPLER_ENV,
  LIBERO_PRO,
  BEHAVIOR,
];

export const BENCHMARKS_BY_ID: Record<string, Benchmark> = ALL_BENCHMARKS.reduce(
  (acc, benchmark) => ({ ...acc, [benchmark.id]: benchmark }),
  {}
);

export const getBenchmarkById = (id: string): Benchmark | undefined => BENCHMARKS_BY_ID[id];
export const getAllBenchmarks = (): Benchmark[] => ALL_BENCHMARKS;
