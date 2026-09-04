// ============================================
// VLA Simulation Benchmarks Registry (Strictly based on provided info)
// ============================================

import type { Benchmark } from '../types';
import { ROBO_LAB } from './robolab';
import { ROBO_DOJO_SIM } from './robodojo';

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
  lastUpdated: '2026-08-31',
  scores: [
    {
      modelId: 'mixture_of_horizons',
      score: 99.0,
      details: { goal: 98.8, long: 98.4, object: 100, spatial: 98.8 }
    },
    {
      modelId: 'saivla-0',
      score: 98.95,
      details: { goal: 98.2, long: 97.8, object: 100.0, spatial: 99.8 }
    },
    {
      modelId: 'qwen-vla-instruct',
      score: 97.9,
      notes: 'Source: https://arxiv.org/html/2605.30280v1, Table 4; official repository: https://github.com/QwenLM/Qwen-VLA. Overall LIBERO success rate (%) for Qwen-VLA-Instruct across the four standard splits; the paper reports no per-split breakdown for this row. Action chunk length H=16 and the standard StarVLA evaluation protocol are used. The model is jointly trained across embodiments without per-benchmark adaptation, so this result is not directly comparable to rows using separately fine-tuned split-specific policies.'
    },
    {
      modelId: 'behavior-prompting-policy',
      score: 97.48,
      details: { goal: 98.33, long: 95.27, object: 98.93, spatial: 98.93 },
      notes: 'Source: https://arxiv.org/html/2606.30457, Appendix D Table 2. Original LIBERO success rate (%) averaged across 3 seeds; the paper labels the 10-task suite as LIBERO 10, corresponding to this registry\'s LIBERO-Long column. Each seed uses one checkpoint across the listed splits and includes LIBERO-90 in training, so compare with rows sharing this protocol rather than the separately fine-tuned π0.5 column.',
    },
    {
      modelId: 'vla-adapter-pro',
      score: 98.5,
      details: { goal: 98.2, long: 96.4, object: 99.6, spatial: 99.6 }
    },
    {
      modelId: 'pi0.5(Flow-Noise)',
      score: 98.3,
      details: { goal: 99.6, long: 94.0, object: 100, spatial: 99.6 }
    },
    {
      modelId: 'OpenVLA-OFT (RLinf-GRPO)',
      score: 98.1,
      details: { goal: 98.8, long: 94.0, object: 99.8, spatial: 99.4 }
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
    },
    {
        modelId: '3dwmt-abc',
        score: 87.8,
        details: { spatial: 91.8, goal: 91.4, object: 89.0, long: 78.9 },
        notes: 'Simulation benchmark results. Real-world LIBERO evaluation in progress.'
    },
    {
      modelId: 'rotvla',
      score: 98.2,
      details: { spatial: 98.2, object: 99.6, goal: 98.4, long: 96.4 },
      notes: 'Source: https://arxiv.org/html/2605.13403, Table 1 and Section 4.2 (submitted 2026-05-13). Average success rate (%) over the four 10-task suites; one model is jointly fine-tuned for 80k steps after filtering unsuccessful training trajectories. This protocol is not directly comparable to rows trained or fine-tuned under different LIBERO data protocols.'
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
    { modelId: 'pi0(Flow-Noise)', score: 85.8, details: { easy: 91.1, medium: 81.8, hard: 78.3, very_hard: 92.0 } },
    { modelId: 'pi0.5(Flow-SDE)', score: 70.7, details: { easy: 86.4, medium: 55.5, hard: 75.0, very_hard: 66.0 } },
    { modelId: 'smolvla-0.45b', score: 57.3, details: { easy: 82.5, medium: 41.8, hard: 45.0, very_hard: 60.0 } },
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
    { id: 'clean', name: 'Clean', higherIsBetter: true, format: 'percentage' },
    { id: 'rand', name: 'Randomized', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-08-31',
  scores: [
    { modelId: 'x-vla', score: 70.0, details: { easy: 70.0, hard: 39.0 } },
    { modelId: 'pi0', score: 46.4, details: { easy: 46.4, hard: 16.3 } },
    {
      modelId: 'qwen-vla-instruct',
      score: 86.1,
      details: { easy: 86.1, hard: 87.2 },
      notes: 'Source: https://arxiv.org/html/2605.30280v1, Table 4; official repository: https://github.com/QwenLM/Qwen-VLA. RoboTwin 2.0 success rate (%) on the Easy and Hard tiers over 50 dual-arm tasks; the registry primary score follows the existing Easy-column convention. Action chunk length H=16; Qwen-VLA-Instruct is trained jointly across embodiments without per-benchmark adaptation. This Easy/Hard protocol is not directly comparable to the existing clean/randomized RoboTwin row.'
    },
    {
      modelId: 'rotvla',
      score: 89.6,
      details: { clean: 89.6, rand: 88.5 },
      notes: 'Source: https://arxiv.org/html/2605.13403, Table 1 and Section 4.2 (submitted 2026-05-13). RoboTwin2.0 clean/randomized success rate (%) over 50 dual-arm tasks; one model is trained across all tasks with 50 clean and 500 randomized demonstrations per task, then evaluated with 100 rollouts per task. The clean/randomized protocol is not directly comparable to the existing Easy/Hard rows.'
    },
    {
      modelId: 'vlact',
      score: 92.5,
      details: { clean: 92.5, rand: 90.8 },
      notes: 'Source: https://arxiv.org/html/2608.27550, Table 2 and Section 4.2; official project page: https://starvla.github.io/VLAct/. RoboTwin 2.0 Data Scaling setting with the VLAct-OFT head: 92.5% success on Clean and 90.8% on Random. The protocol uses 50 clean and 500 domain-randomized expert trajectories per task (2,500 clean and 25,000 randomized demonstrations across 50 tasks); these are successful demonstrations from the official demo_randomized setting, not random-action rollouts. This Data Scaling Clean/Random protocol is not directly comparable to the existing Easy/Hard rows.'
    },
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
    {
      modelId: 'aspire',
      score: 0.72,
      notes: 'Source: https://arxiv.org/html/2607.00272. Overall All macro-average across LIBERO-Pro object/goal/spatial suites and Pos/Task perturbations on 50 held-out seeds per suite (Pos: 0.77, Task: 0.67). This protocol is not directly comparable to rows using the legacy LIBERO-PRO detail columns.'
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
// RoboChallenge Table 30
// ============================================
export const ROBOCHALLENGE: Benchmark = {
  id: 'robochallenge',
  name: 'RoboChallenge Table 30',
  shortName: 'RoboChallenge',
  description: 'A 30-task real-world benchmark for table-mounted robot manipulation across multiple embodiments.',
  iconEmoji: '🦾',
  category: 'real-world',
  websiteUrl: 'https://robochallenge.ai/home',
  githubUrl: 'https://github.com/RoboChallenge',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/RoboChallenge/Table30',
  },
  metrics: [
    { id: 'score', name: 'Avg. Score', higherIsBetter: true, format: 'decimal' },
    { id: 'success_rate', name: 'Success Rate', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-03-13',
  taskTypes: ['real-world', 'multi-embodiment', 'tabletop manipulation'],
  scores: [
    { modelId: 'dm0', score: 72.24583333333334, details: { success_rate: 62.0 } },
    { modelId: 'gigabrain-0.1', score: 68.3375, details: { success_rate: 51.66666666666667 } },
    { modelId: 'spirit-v1.5', score: 67.1875, details: { success_rate: 51.000000000000014 } },
    { modelId: 'pi0.5', score: 61.8375, details: { success_rate: 42.66666666666667 } },
    { modelId: 'wall-oss-v0.1', score: 55.30433333333334, details: { success_rate: 35.33333333333333 } },
    { modelId: 'dm0-generalist', score: 49.079166666666666, details: { success_rate: 37.333333333333336 } },
    { modelId: 'pi0', score: 46.4125, details: { success_rate: 28.333333333333332 } },
    { modelId: 'x-vla', score: 34.75, details: { success_rate: 21.333333333333336 } },
    { modelId: 'pi05-generalist', score: 31.266666666666666, details: { success_rate: 17.666666666666668 } },
    { modelId: 'rdt-1b', score: 28.8375, details: { success_rate: 14.999999999999996 } },
    { modelId: 'zr-0-generalist', score: 26.029166666666665, details: { success_rate: 9.333333333333332 } },
    { modelId: 'vla-test-0119', score: 21.95, details: { success_rate: 5.000000000000001 } },
    { modelId: 'cogact', score: 21.833333333333332, details: { success_rate: 11.666666666666668 } },
    { modelId: 'pi0-generalist', score: 20.216666666666665, details: { success_rate: 9.0 } },
    { modelId: 'vla-test-0204', score: 17.329166666666666, details: { success_rate: 9.000000000000002 } },
    { modelId: 'openvla-oft', score: 8.6625, details: { success_rate: 5.0 } },
  ],
};

// ============================================
// Know Your Camera
// ============================================
export const KNOW_YOUR_CAMERA: Benchmark = {
  id: 'know-your-camera',
  name: 'Know Your Camera',
  shortName: 'CameraPose',
  description: 'View-invariant policy evaluation across six RoboSuite and ManiSkill manipulation tasks with fixed and randomized scene variants.',
  iconEmoji: '📷',
  category: 'simulation',
  paper: {
    title: 'Do You Know Where Your Camera Is? View-Invariant Policy Learning with Camera Conditioning',
    authors: ['Tianchong Jiang', 'Jingtian Ji', 'Xiangshan Tan', 'Jiading Fang', 'Anand Bhattad', 'Vitor Guizilini', 'Matthew R. Walter'],
    venue: 'ICRA',
    year: 2026,
    arxivId: '2510.02268',
  },
  websiteUrl: 'https://ripl.github.io/know_your_camera/',
  githubUrl: 'https://github.com/ripl/CamPoseOpensource',
  datasetUrls: {
    other: 'https://drive.google.com/drive/folders/1dmv-ueaP8F0ElqgVXsdmX-S9hvfQb7Yf?usp=drive_link',
  },
  taskTypes: ['manipulation', 'camera-pose generalization', 'RoboSuite', 'ManiSkill'],
  metrics: [
    { id: 'avg_success', name: 'Avg. Success', higherIsBetter: true, format: 'percentage' },
    { id: 'lift', name: 'Lift', higherIsBetter: true, format: 'percentage' },
    { id: 'pick_place_can', name: 'Pick Place Can', higherIsBetter: true, format: 'percentage' },
    { id: 'assembly_square', name: 'Assembly Square', higherIsBetter: true, format: 'percentage' },
    { id: 'push', name: 'Push', higherIsBetter: true, format: 'percentage' },
    { id: 'lift_upright', name: 'Lift Upright', higherIsBetter: true, format: 'percentage' },
    { id: 'roll_ball', name: 'Roll Ball', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-08-25',
  scores: [
    {
      modelId: 'smolvla-camera-conditioned',
      score: 43.07,
      details: { lift: 54.4, pick_place_can: 70.0, assembly_square: 26.4, push: 43.8, lift_upright: 33.4, roll_ball: 30.4 },
      notes: 'Source: https://arxiv.org/html/2510.02268, Table I. Success rates (%) are from six simulated tasks with Plücker camera-pose conditioning; SmolVLA uses seed 0, the last 10 checkpoints, and 50 initial-state × camera-pose pairs per checkpoint (500 rollouts per setting). Avg. Success is the arithmetic mean of the six reported task rates and is not directly comparable to other benchmark protocols.',
    },
    {
      modelId: 'act-camera-conditioned',
      score: 35.33,
      details: { lift: 60.6, pick_place_can: 30.9, assembly_square: 18.7, push: 37.5, lift_upright: 34.6, roll_ball: 29.7 },
      notes: 'Source: https://arxiv.org/html/2510.02268, Table I. Success rates (%) are from six simulated tasks with Plücker camera-pose conditioning; ACT uses 3 seeds, the last 10 checkpoints, and 50 initial-state × camera-pose pairs per checkpoint (1,500 rollouts per setting). Avg. Success is the arithmetic mean of the six reported task rates and is not directly comparable to other benchmark protocols.',
    },
    {
      modelId: 'diffusion-policy-camera-conditioned',
      score: 27.92,
      details: { lift: 51.1, pick_place_can: 39.3, assembly_square: 2.4, push: 30.3, lift_upright: 20.7, roll_ball: 23.7 },
      notes: 'Source: https://arxiv.org/html/2510.02268, Table I. Success rates (%) are from six simulated tasks with Plücker camera-pose conditioning; Diffusion Policy uses 3 seeds, the last 10 checkpoints, and 50 initial-state × camera-pose pairs per checkpoint (1,500 rollouts per setting). Avg. Success is the arithmetic mean of the six reported task rates and is not directly comparable to other benchmark protocols.',
    },
  ],
};

// ============================================
// VLA-REPLICA
// ============================================
export const VLA_REPLICA: Benchmark = {
  id: 'vla-replica',
  name: 'VLA-REPLICA',
  shortName: 'VLA-REPLICA',
  description: 'A low-cost, reproducible real-world benchmark for evaluating vision-language-action models on an SO-101 platform.',
  iconEmoji: '🧰',
  category: 'real-world',
  paper: {
    title: 'VLA-REPLICA: A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models',
    authors: ['Alex S. Huang', 'Jiahui Zhang', 'Shiqing Tang', 'Yu Xiang'],
    venue: 'Data-Centric Robotics Workshop at RSS',
    year: 2026,
    arxivId: '2605.20774',
  },
  websiteUrl: 'https://irvlutd.github.io/VLAReplica/',
  githubUrl: 'https://github.com/IRVLUTD/VLAReplica',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data',
  },
  taskTypes: ['real-world', 'SO-101', 'manipulation', 'in-distribution', 'out-of-distribution'],
  metrics: [
    { id: 'id_avg_success', name: 'ID Avg. Success', description: 'Average success rate across 10 in-distribution tasks, 5 runs per task.', higherIsBetter: true, format: 'percentage' },
    { id: 'ood_avg_success', name: 'OOD Avg. Success', description: 'Average success rate across 8 out-of-distribution tasks, 5 runs per task.', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-05-20',
  scores: [
    {
      modelId: 'pi0.5',
      score: 54.0,
      details: { id_avg_success: 54.0, ood_avg_success: 35.0 },
      notes: 'Source: https://arxiv.org/html/2605.20774, Tables 4 and 5; official benchmark page: https://irvlutd.github.io/VLAReplica/. π0.5 was fine-tuned with 500 demonstrations and evaluated for 5 runs per task. ID and OOD are separate protocols and are not directly comparable to simulation benchmark rows.',
    },
    {
      modelId: 'pi0',
      score: 34.0,
      details: { id_avg_success: 34.0, ood_avg_success: 30.0 },
      notes: 'Source: https://arxiv.org/html/2605.20774, Tables 4 and 5; official benchmark page: https://irvlutd.github.io/VLAReplica/. π0 was fine-tuned with 500 demonstrations and evaluated for 5 runs per task. ID and OOD are separate protocols and are not directly comparable to simulation benchmark rows.',
    },
    {
      modelId: 'x-vla',
      score: 14.0,
      details: { id_avg_success: 14.0, ood_avg_success: 7.5 },
      notes: 'Source: https://arxiv.org/html/2605.20774, Tables 4 and 5; official benchmark page: https://irvlutd.github.io/VLAReplica/. X-VLA was fine-tuned with 500 demonstrations and evaluated for 5 runs per task. ID and OOD are separate protocols and are not directly comparable to simulation benchmark rows.',
    },
  ],
};

// ============================================
// GLAM Manipulation Tasks
// ============================================
export const GLAM_MANIPULATION: Benchmark = {
  id: 'glam-manipulation',
  name: 'GLAM Manipulation Tasks',
  shortName: 'GLAM Tasks',
  description: 'Paper-defined manipulation task protocol for evaluating world-model-aligned imitation from heterogeneous demonstrations.',
  iconEmoji: '🧩',
  category: 'multi-task',
  paper: {
    title: 'Imitation from Heterogeneous Demonstrations using Grounded Latent-Action World Models',
    authors: ['Tianyou Wang', 'Anson Lei', 'Joe Watson', 'Ingmar Posner'],
    venue: 'arXiv',
    year: 2026,
    arxivId: '2606.21672',
  },
  websiteUrl: 'https://viccccciv.github.io/glam/',
  metrics: [
    { id: 'bimanual_stack_three_success', name: 'Bimanual Stack-Three Success', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-06-19',
  scores: [
    {
      modelId: 'glam-o',
      score: 72.7,
      details: { bimanual_stack_three_success: 72.7 },
      notes: 'Source: https://arxiv.org/html/2606.21672, Section 4.1 and Figure 3. GLAM-O is the object-mask variant of GLAM. This is the bimanual 3-cube stacking task in MuJoCo; the paper reports 3 training seeds and 50 evaluation trials per seed. The task has no instruction variant and uses task success rate (%). This paper-specific protocol is not directly comparable to standard LIBERO or other benchmark rows.',
    },
  ],
};

// ============================================
// ArmnetBench v0.1
// ============================================
export const ARMNETBENCH: Benchmark = {
  id: 'armnetbench',
  name: 'ArmnetBench v0.1',
  shortName: 'ArmnetBench',
  description: 'A parallel real-world benchmark for manipulation policies on low-cost SO-101 arm cells, with 8 single-arm and 4 bimanual tasks.',
  iconEmoji: '🦾',
  category: 'real-world',
  paper: {
    title: 'ArmnetBench v0.1: Parallel Real-World Evaluation of Manipulation Policies on a Low-Cost Arm Farm',
    authors: ['Praveen Selvaraj', 'Lorenzo Uttini', 'Ville Kuosmanen'],
    venue: 'arXiv',
    year: 2026,
    arxivId: '2607.24481',
  },
  websiteUrl: 'https://armnet.dev/',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/armnet/armnetbench_v01_robometer',
  },
  taskTypes: ['real-world', 'SO-101', 'single-arm', 'bimanual', 'manipulation'],
  metrics: [
    {
      id: 'strict_success',
      name: 'Strict Success',
      description: 'Cleanly successful rollouts only, pooled across the 12 benchmark tasks.',
      higherIsBetter: true,
      format: 'percentage',
    },
    {
      id: 'success_plus_suboptimal',
      name: 'Success + Suboptimal',
      description: 'Successful and poor-quality completions, pooled across the 12 benchmark tasks.',
      higherIsBetter: true,
      format: 'percentage',
    },
  ],
  lastUpdated: '2026-08-29',
  scores: [
    {
      modelId: 'pi0.5',
      score: 47.6,
      details: { success_plus_suboptimal: 51.5 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 359 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'pi0',
      score: 35.1,
      details: { success_plus_suboptimal: 40.4 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 359 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'gr00t-n1.7',
      score: 29.4,
      details: { success_plus_suboptimal: 33.1 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 360 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'diffusion-policy',
      score: 26.7,
      details: { success_plus_suboptimal: 29.7 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 360 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'act',
      score: 19.2,
      details: { success_plus_suboptimal: 21.1 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 360 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'molmoact2',
      score: 18.9,
      details: { success_plus_suboptimal: 21.7 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 360 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
    {
      modelId: 'smolvla-0.45b',
      score: 15.0,
      details: { success_plus_suboptimal: 19.2 },
      notes: 'Source: https://arxiv.org/html/2607.24481, Table 5 (submitted 2026-07-27). Pooled across 12 tasks with 360 scored rollouts; strict success counts successful labels only and Success + Suboptimal also counts poor-quality completions. All policies use 50 demonstrations per task; the protocol is not directly comparable to rows from other benchmarks.',
    },
  ],
};

// ============================================
// L-CALVIN
// ============================================
export const L_CALVIN: Benchmark = {
  id: 'l-calvin',
  name: 'L-CALVIN',
  shortName: 'L-CALVIN',
  description: 'CALVIN-derived data protocol extended from 5 to 10 task sequences for long-horizon manipulation.',
  iconEmoji: '🔗',
  category: 'simulation',
  paper: {
    title: 'Long-VLA: Unleashing Long-Horizon Capability of Vision Language Action Model for Robot Manipulation',
    authors: ['Yiguo Fan', 'Pengxiang Ding', 'Shuanghao Bai', 'Xinyang Tong', 'Yuyang Zhu', 'Hongchao Lu', 'Fengqi Dai', 'Wei Zhao', 'Yang Liu', 'Siteng Huang', 'Zhaoxin Fan', 'Badong Chen', 'Donglin Wang'],
    venue: 'CoRL',
    year: 2025,
    arxivId: '2508.19958',
  },
  websiteUrl: 'https://long-vla.github.io/',
  metrics: [
    { id: 'avg_len', name: 'Avg. Length', higherIsBetter: true, format: 'decimal' },
    { id: 'seq_1', name: 'Tasks Completed in Sequence (1)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_2', name: 'Tasks Completed in Sequence (2)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_3', name: 'Tasks Completed in Sequence (3)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_4', name: 'Tasks Completed in Sequence (4)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_5', name: 'Tasks Completed in Sequence (5)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_6', name: 'Tasks Completed in Sequence (6)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_7', name: 'Tasks Completed in Sequence (7)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_8', name: 'Tasks Completed in Sequence (8)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_9', name: 'Tasks Completed in Sequence (9)', higherIsBetter: true, format: 'percentage' },
    { id: 'seq_10', name: 'Tasks Completed in Sequence (10)', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-09-02',
  scores: [
    {
      modelId: 'long-vla',
      score: 4.75,
      details: { seq_1: 92, seq_2: 74, seq_3: 65, seq_4: 50, seq_5: 43, seq_6: 39, seq_7: 36, seq_8: 30, seq_9: 26, seq_10: 20, avg_len: 4.75 },
      notes: 'Source: https://arxiv.org/pdf/2508.19958 and https://long-vla.github.io/long-vla/longvla.pdf, Table 2 (arXiv v2 revised 2025-08-28). L-CALVIN extends the CALVIN evaluation protocol from 5 to 10 task sequences; the sequence values are success rates in percent converted from the paper\'s 0.xx values, and Avg. Length is the average number of consecutively completed tasks. This L-CALVIN 10-task protocol is not directly comparable to standard CALVIN rows.',
    },
  ],
};

// ============================================
// Dynamic Object Manipulation (DOM)
// ============================================
export const DYNAMIC_OBJECT_MANIPULATION: Benchmark = {
  id: 'dynamic-object-manipulation',
  name: 'Dynamic Object Manipulation (DOM)',
  shortName: 'DOM',
  description: 'A dynamic manipulation benchmark for evaluating VLA and policy robustness to moving objects across interaction, perception, and generalization.',
  iconEmoji: '💨',
  category: 'real-world',
  paper: {
    title: 'DynamicVLA: A Vision-Language-Action Model for Dynamic Object Manipulation',
    authors: ['Haozhe Xie', 'Beichen Wen', 'Jiarui Zheng', 'Zhaoxi Chen', 'Fangzhou Hong', 'Haiwen Diao', 'Ziwei Liu'],
    venue: 'CVPRW',
    year: 2026,
    arxivId: '2601.22153',
  },
  websiteUrl: 'https://haozhexie.com/project/dynamic-vla',
  githubUrl: 'https://github.com/hzxie/DynamicVLA',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/hzxie/DOM',
  },
  taskTypes: ['dynamic manipulation', 'VLA', 'simulation', 'real-world', 'Franka', 'PiPER'],
  metrics: [
    { id: 'avg_success', name: 'Overall Avg. Success', description: 'Average success rate across nine DOM evaluation dimensions.', higherIsBetter: true, format: 'percentage' },
    { id: 'closed_loop_reactivity', name: 'Closed-loop Reactivity', higherIsBetter: true, format: 'percentage' },
    { id: 'dynamic_adaptation', name: 'Dynamic Adaptation', higherIsBetter: true, format: 'percentage' },
    { id: 'long_horizon_sequencing', name: 'Long-horizon Sequencing', higherIsBetter: true, format: 'percentage' },
    { id: 'visual_understanding', name: 'Visual Understanding', higherIsBetter: true, format: 'percentage' },
    { id: 'spatial_reasoning', name: 'Spatial Reasoning', higherIsBetter: true, format: 'percentage' },
    { id: 'motion_perception', name: 'Motion Perception', higherIsBetter: true, format: 'percentage' },
    { id: 'visual_generation', name: 'Visual Generation', higherIsBetter: true, format: 'percentage' },
    { id: 'motion_generalization', name: 'Motion Generalization', higherIsBetter: true, format: 'percentage' },
    { id: 'disturbance_robustness', name: 'Disturbance Robustness', higherIsBetter: true, format: 'percentage' },
    { id: 'path_length', name: 'Path Length', higherIsBetter: false, format: 'decimal' },
    { id: 'completion_time', name: 'Task Completion Time', higherIsBetter: false, format: 'decimal' },
  ],
  lastUpdated: '2026-09-03',
  scores: [
    {
      modelId: 'dynamicvla',
      score: 47.06,
      details: {
        closed_loop_reactivity: 60.5,
        dynamic_adaptation: 38.5,
        long_horizon_sequencing: 40.5,
        visual_understanding: 51.5,
        spatial_reasoning: 48.0,
        motion_perception: 33.5,
        visual_generation: 59.5,
        motion_generalization: 65.0,
        disturbance_robustness: 26.5,
        path_length: 2.50,
        completion_time: 8.53,
      },
      notes: 'Source: https://arxiv.org/html/2601.22153, Table I and Sections IV-A/V; official project page: https://haozhexie.com/project/dynamic-vla; official repository: https://github.com/hzxie/DynamicVLA. DOM simulation benchmark, nine dimensions (CR/DA/LS/VU/SR/MP/VG/MG/DR), 10 scenes × 20 trials per dimension (1,800 trials total). The primary metric is success rate (%); Path Length is in meters and Task Completion Time is in seconds. The paper-defined language instructions and temporal input are used, with no separate instruction variant reported. This dynamic-object protocol is not directly comparable to static manipulation benchmark rows.',
    },
  ],
};

// ============================================
// RoboBenchMart
// ============================================
export const ROBOBENCHMART: Benchmark = {
  id: 'robobenchmart',
  name: 'RoboBenchMart',
  shortName: 'RoboBenchMart',
  description: 'An open-source simulated retail benchmark for evaluating mobile-manipulation policies in dark-store environments with cluttered shelves, refrigerators, and diverse grocery items.',
  iconEmoji: '🛒',
  category: 'simulation',
  paper: {
    title: 'RoboBenchMart: Benchmarking Robots in Retail Environment',
    authors: ['Konstantin Soshin', 'Alexander Krapukhin', 'Andrei Spiridonov', 'Gregorii Bukhtuev', 'Andrey Kuznetsov', 'Vlad Shakhuro', 'Denis Shepelev'],
    venue: 'arXiv',
    year: 2025,
    arxivId: '2511.10276',
  },
  websiteUrl: 'https://emb-ai.github.io/RoboBenchMart/',
  githubUrl: 'https://github.com/emb-ai/RoboBenchMart',
  datasetUrls: {
    other: 'https://huggingface.co/datasets/emb-ai/RoboBenchMart_assets',
  },
  taskTypes: ['retail', 'mobile manipulation', 'simulation', 'VLA'],
  metrics: [
    { id: 'id_atomic_avg', name: 'In-Domain Atomic Avg.', description: 'Arithmetic mean of success rates for the five reported atomic tasks in the In-Domain split.', higherIsBetter: true, format: 'percentage' },
    { id: 'unseen_scenes_atomic_avg', name: 'Unseen Scenes Atomic Avg.', description: 'Arithmetic mean of success rates for the five reported atomic tasks with unseen layouts and arrangements.', higherIsBetter: true, format: 'percentage' },
    { id: 'unseen_items_atomic_avg', name: 'Unseen Scenes & Items Atomic Avg.', description: 'Arithmetic mean of the three applicable pick-and-place atomic tasks with unseen scenes and target items.', higherIsBetter: true, format: 'percentage' },
    { id: 'id_composite_avg', name: 'In-Domain Composite Avg.', description: 'Arithmetic mean of the two reported composite tasks in the In-Domain split.', higherIsBetter: true, format: 'percentage' },
    { id: 'unseen_scenes_composite_avg', name: 'Unseen Scenes Composite Avg.', description: 'Arithmetic mean of the two reported composite tasks with unseen scenes.', higherIsBetter: true, format: 'percentage' },
    { id: 'unseen_items_composite_avg', name: 'Unseen Scenes & Items Composite Avg.', description: 'Arithmetic mean of the two reported composite tasks with unseen scenes and items.', higherIsBetter: true, format: 'percentage' },
  ],
  lastUpdated: '2026-09-04',
  scores: [
    {
      modelId: 'pi0.5',
      score: 55.8,
      details: { id_atomic_avg: 55.8, unseen_scenes_atomic_avg: 37.8, unseen_items_atomic_avg: 9.67, id_composite_avg: 0, unseen_scenes_composite_avg: 0, unseen_items_composite_avg: 0 },
      notes: 'Source: https://arxiv.org/html/2511.10276v2, Table 2; official project page: https://emb-ai.github.io/RoboBenchMart/; official repository: https://github.com/emb-ai/RoboBenchMart. Fine-tuned pi0.5 on 248 demonstrations per task-item-fixture triplet; score is the arithmetic mean of the five In-Domain atomic-task rates reported in Table 2. Unseen Scenes adds layouts, textures, and arrangements; Unseen Scenes & Items additionally uses out-of-distribution items and averages the three applicable pick-and-place tasks. Each rate uses 100 trials per task-item-fixture triplet; both reported composite tasks are 0%. These fine-tuned Fetch/ManiSkill3 retail results are not directly comparable to other benchmark protocols.',
    },
    {
      modelId: 'pi0',
      score: 42.0,
      details: { id_atomic_avg: 42.0, unseen_scenes_atomic_avg: 27.8, unseen_items_atomic_avg: 0.33, id_composite_avg: 0, unseen_scenes_composite_avg: 0, unseen_items_composite_avg: 0 },
      notes: 'Source: https://arxiv.org/html/2511.10276v2, Table 2; official project page: https://emb-ai.github.io/RoboBenchMart/; official repository: https://github.com/emb-ai/RoboBenchMart. Fine-tuned pi0 on 248 demonstrations per task-item-fixture triplet; score is the arithmetic mean of the five In-Domain atomic-task rates reported in Table 2. Unseen Scenes adds layouts, textures, and arrangements; Unseen Scenes & Items additionally uses out-of-distribution items and averages the three applicable pick-and-place tasks. Each rate uses 100 trials per task-item-fixture triplet; both reported composite tasks are 0%. These fine-tuned Fetch/ManiSkill3 retail results are not directly comparable to other benchmark protocols.',
    },
    {
      modelId: 'octo',
      score: 23.0,
      details: { id_atomic_avg: 23.0, unseen_scenes_atomic_avg: 10.6, unseen_items_atomic_avg: 0, id_composite_avg: 0, unseen_scenes_composite_avg: 0, unseen_items_composite_avg: 0 },
      notes: 'Source: https://arxiv.org/html/2511.10276v2, Table 2; official project page: https://emb-ai.github.io/RoboBenchMart/; official repository: https://github.com/emb-ai/RoboBenchMart. Fine-tuned Octo on 248 demonstrations per task-item-fixture triplet; score is the arithmetic mean of the five In-Domain atomic-task rates reported in Table 2. Unseen Scenes adds layouts, textures, and arrangements; Unseen Scenes & Items additionally uses out-of-distribution items and averages the three applicable pick-and-place tasks. Each rate uses 100 trials per task-item-fixture triplet; both reported composite tasks are 0%. These fine-tuned Fetch/ManiSkill3 retail results are not directly comparable to other benchmark protocols.',
    },
    {
      modelId: 'smolvla-0.45b',
      score: 4.6,
      details: { id_atomic_avg: 4.6, unseen_scenes_atomic_avg: 5.2, unseen_items_atomic_avg: 0, id_composite_avg: 0, unseen_scenes_composite_avg: 0, unseen_items_composite_avg: 0 },
      notes: 'Source: https://arxiv.org/html/2511.10276v2, Table 2; official project page: https://emb-ai.github.io/RoboBenchMart/; official repository: https://github.com/emb-ai/RoboBenchMart. Fine-tuned SmolVLA on 248 demonstrations per task-item-fixture triplet; score is the arithmetic mean of the five In-Domain atomic-task rates reported in Table 2. Unseen Scenes adds layouts, textures, and arrangements; Unseen Scenes & Items additionally uses out-of-distribution items and averages the three applicable pick-and-place tasks. Each rate uses 100 trials per task-item-fixture triplet; both reported composite tasks are 0%. These fine-tuned Fetch/ManiSkill3 retail results are not directly comparable to other benchmark protocols.',
    },
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
  ROBOCHALLENGE,
  KNOW_YOUR_CAMERA,
  ROBO_LAB,
  ROBO_DOJO_SIM,
  VLA_REPLICA,
  GLAM_MANIPULATION,
  ARMNETBENCH,
  L_CALVIN,
  DYNAMIC_OBJECT_MANIPULATION,
  ROBOBENCHMART,
];

export { ROBO_LAB, ROBO_DOJO_SIM };

export const BENCHMARKS_BY_ID: Record<string, Benchmark> = ALL_BENCHMARKS.reduce(
  (acc, benchmark) => ({ ...acc, [benchmark.id]: benchmark }),
  {}
);

export const getBenchmarkById = (id: string): Benchmark | undefined => BENCHMARKS_BY_ID[id];
export const getAllBenchmarks = (): Benchmark[] => ALL_BENCHMARKS;
