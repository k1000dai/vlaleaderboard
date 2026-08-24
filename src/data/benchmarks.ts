// ============================================
// VLA Simulation Benchmarks Registry (Strictly based on provided info)
// ============================================

import type { Benchmark } from '../types';

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
  lastUpdated: '2026-06-20',
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
    }
  ],
};

// ... (CALVIN, VLABENCH, META_WORLD, ROBOTWIN, SIMPLER_ENV, LIBERO_PRO, BEHAVIOR, ROBOCHALLENGE sections remain unchanged)

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
];

export const BENCHMARKS_BY_ID: Record<string, Benchmark> = ALL_BENCHMARKS.reduce(
  (acc, benchmark) => ({ ...acc, [benchmark.id]: benchmark }),
  {}
);

export const getBenchmarkById = (id: string): Benchmark | undefined => BENCHMARKS_BY_ID[id];
export const getAllBenchmarks = (): Benchmark[] => ALL_BENCHMARKS;
