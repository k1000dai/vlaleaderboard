// ============================================
// VLA Simulation Benchmarks Registry
// ============================================
// This file contains all benchmark definitions and scores.
// To add a new benchmark or update scores, modify this file.
// ============================================

import type { Benchmark } from '../types';

// ============================================
// SIMPLER-Env Benchmark
// ============================================
export const SIMPLER_ENV: Benchmark = {
  id: 'simpler-env',
  name: 'SIMPLER-Env',
  shortName: 'SIMPLER',
  description: 'SIMPLER: Simulated Manipulation Policy Evaluation for Real Robot Transfer. A collection of simulation environments for evaluating VLA models.',
  iconEmoji: '🤖',
  category: 'simulation',
  paper: {
    title: 'Evaluating Real-World Robot Manipulation Policies in Simulation',
    authors: ['Xuanlin Li', 'Kyle Hsu', 'Jiayuan Gu', 'Karl Pertsch', 'Oier Mees', 'Homer Rich Walke', 'Chuyuan Fu', 'Ishikaa Lunawat', 'Isabel Sieh', 'Sean Kirmani', 'Sergey Levine', 'Jiajun Wu', 'Chelsea Finn', 'Hao Su', 'Quan Vuong', 'Ted Xiao'],
    venue: 'CoRL',
    year: 2024,
    arxivId: '2405.05941',
  },
  websiteUrl: 'https://simpler-env.github.io/',
  githubUrl: 'https://github.com/simpler-env/SimplerEnv',
  metrics: [
    { id: 'avg_success', name: 'Avg. Success Rate', higherIsBetter: true, format: 'percentage' },
    { id: 'google_robot', name: 'Google Robot Tasks', higherIsBetter: true, format: 'percentage' },
    { id: 'widowx', name: 'WidowX Tasks', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'pick-and-place', 'drawer'],
  lastUpdated: '2024-12-01',
  scores: [
    { modelId: 'openvla-7b', score: 43.5, details: { google_robot: 52.3, widowx: 34.7 } },
    { modelId: 'rt-2-pali-x-55b', score: 61.2, details: { google_robot: 68.5, widowx: 53.9 } },
    { modelId: 'rt-2-pali-x-5b', score: 48.7, details: { google_robot: 55.2, widowx: 42.2 } },
    { modelId: 'octo-base', score: 26.8, details: { google_robot: 31.5, widowx: 22.1 } },
    { modelId: 'octo-small', score: 19.3, details: { google_robot: 23.1, widowx: 15.5 } },
    { modelId: 'rt-1', score: 35.2, details: { google_robot: 42.8, widowx: 27.6 } },
  ],
};

// ============================================
// Calvin Benchmark
// ============================================
export const CALVIN: Benchmark = {
  id: 'calvin',
  name: 'CALVIN',
  shortName: 'CALVIN',
  description: 'CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks.',
  iconEmoji: '📦',
  category: 'manipulation',
  paper: {
    title: 'CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks',
    authors: ['Oier Mees', 'Lukas Hermann', 'Erick Rosete-Beas', 'Wolfram Burgard'],
    venue: 'RA-L',
    year: 2022,
    arxivId: '2112.03227',
  },
  websiteUrl: 'http://calvin.cs.uni-freiburg.de/',
  githubUrl: 'https://github.com/mees/calvin',
  metrics: [
    { id: 'avg_len', name: 'Avg. Length', description: 'Average chain length completed', higherIsBetter: true, format: 'decimal' },
    { id: 'sr_1', name: 'SR (1 task)', higherIsBetter: true, format: 'percentage' },
    { id: 'sr_5', name: 'SR (5 tasks)', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'long-horizon', 'language-conditioned'],
  lastUpdated: '2024-11-15',
  scores: [
    { modelId: 'openvla-7b', score: 3.21, details: { sr_1: 88.5, sr_5: 52.3 } },
    { modelId: 'rdt-1b', score: 3.85, details: { sr_1: 94.2, sr_5: 68.7 } },
    { modelId: 'gr-1', score: 3.56, details: { sr_1: 91.5, sr_5: 59.8 } },
    { modelId: 'hpt', score: 3.12, details: { sr_1: 85.3, sr_5: 48.2 } },
    { modelId: 'octo-base', score: 2.45, details: { sr_1: 72.1, sr_5: 31.5 } },
    { modelId: '3d-diffuser-actor', score: 3.68, details: { sr_1: 92.8, sr_5: 62.4 } },
    { modelId: 'diffusion-policy', score: 2.89, details: { sr_1: 79.5, sr_5: 42.1 } },
  ],
};

// ============================================
// Meta-World Benchmark
// ============================================
export const META_WORLD: Benchmark = {
  id: 'meta-world',
  name: 'Meta-World',
  shortName: 'MW',
  description: 'Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning.',
  iconEmoji: '🌍',
  category: 'multi-task',
  paper: {
    title: 'Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning',
    authors: ['Tianhe Yu', 'Deirdre Quillen', 'Zhanpeng He', 'Ryan Julian', 'Karol Hausman', 'Chelsea Finn', 'Sergey Levine'],
    venue: 'CoRL',
    year: 2020,
    arxivId: '1910.10897',
  },
  websiteUrl: 'https://meta-world.github.io/',
  githubUrl: 'https://github.com/Farama-Foundation/Metaworld',
  metrics: [
    { id: 'mt50_success', name: 'MT50 Success', higherIsBetter: true, format: 'percentage' },
    { id: 'ml45_success', name: 'ML45 Success', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'multi-task', 'meta-learning'],
  lastUpdated: '2024-10-01',
  scores: [
    { modelId: 'openvla-7b', score: 78.5, details: { mt50_success: 78.5, ml45_success: 65.2 } },
    { modelId: 'octo-base', score: 68.3, details: { mt50_success: 68.3, ml45_success: 52.1 } },
    { modelId: 'hpt', score: 82.1, details: { mt50_success: 82.1, ml45_success: 71.5 } },
    { modelId: 'diffusion-policy', score: 85.4, details: { mt50_success: 85.4, ml45_success: 73.8 } },
    { modelId: 'rt-1', score: 62.7, details: { mt50_success: 62.7, ml45_success: 48.3 } },
  ],
};

// ============================================
// RLBench Benchmark
// ============================================
export const RLBENCH: Benchmark = {
  id: 'rlbench',
  name: 'RLBench',
  shortName: 'RLB',
  description: 'RLBench: The Robot Learning Benchmark. A large-scale benchmark for robot learning with 100 unique tasks.',
  iconEmoji: '🔧',
  category: 'manipulation',
  paper: {
    title: 'RLBench: The Robot Learning Benchmark',
    authors: ['Stephen James', 'Zicong Ma', 'David Rovick Arrojo', 'Andrew J. Davison'],
    venue: 'RA-L',
    year: 2020,
    arxivId: '1909.12271',
  },
  websiteUrl: 'https://sites.google.com/view/rlbench',
  githubUrl: 'https://github.com/stepjam/RLBench',
  metrics: [
    { id: 'avg_success', name: 'Avg. Success Rate', higherIsBetter: true, format: 'percentage' },
    { id: 'multi_var', name: 'Multi-Variation', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'multi-task'],
  lastUpdated: '2024-11-01',
  scores: [
    { modelId: 'openvla-7b', score: 45.8, details: { multi_var: 42.3 } },
    { modelId: '3d-diffuser-actor', score: 68.2, details: { multi_var: 65.5 } },
    { modelId: 'rdt-1b', score: 72.5, details: { multi_var: 69.1 } },
    { modelId: 'hpt', score: 58.3, details: { multi_var: 54.7 } },
    { modelId: 'diffusion-policy', score: 52.1, details: { multi_var: 48.6 } },
    { modelId: 'act', score: 48.7, details: { multi_var: 45.2 } },
  ],
};

// ============================================
// LIBERO Benchmark
// ============================================
export const LIBERO: Benchmark = {
  id: 'libero',
  name: 'LIBERO',
  shortName: 'LIBERO',
  description: 'LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning. A comprehensive benchmark suite for lifelong learning.',
  iconEmoji: '📚',
  category: 'multi-task',
  paper: {
    title: 'LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning',
    authors: ['Bo Liu', 'Yifeng Zhu', 'Chongkai Gao', 'Yihao Feng', 'Qiang Liu', 'Yuke Zhu', 'Peter Stone'],
    venue: 'NeurIPS',
    year: 2023,
    arxivId: '2306.03310',
  },
  websiteUrl: 'https://lifelong-robot-learning.github.io/LIBERO/',
  githubUrl: 'https://github.com/Lifelong-Robot-Learning/LIBERO',
  metrics: [
    { id: 'libero_spatial', name: 'LIBERO-Spatial', higherIsBetter: true, format: 'percentage' },
    { id: 'libero_object', name: 'LIBERO-Object', higherIsBetter: true, format: 'percentage' },
    { id: 'libero_goal', name: 'LIBERO-Goal', higherIsBetter: true, format: 'percentage' },
    { id: 'libero_long', name: 'LIBERO-Long', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'lifelong-learning', 'multi-task'],
  lastUpdated: '2024-12-10',
  scores: [
    { modelId: 'openvla-7b', score: 82.4, details: { libero_spatial: 84.5, libero_object: 86.2, libero_goal: 79.8, libero_long: 79.1 } },
    { modelId: 'octo-base', score: 58.3, details: { libero_spatial: 62.1, libero_object: 65.4, libero_goal: 52.8, libero_long: 52.9 } },
    { modelId: 'rdt-1b', score: 88.7, details: { libero_spatial: 91.2, libero_object: 92.5, libero_goal: 85.3, libero_long: 85.8 } },
    { modelId: 'diffusion-policy', score: 72.5, details: { libero_spatial: 75.3, libero_object: 78.1, libero_goal: 68.9, libero_long: 67.7 } },
    { modelId: 'act', score: 65.2, details: { libero_spatial: 68.5, libero_object: 72.1, libero_goal: 61.2, libero_long: 59.0 } },
  ],
};

// ============================================
// ManiSkill Benchmark
// ============================================
export const MANISKILL: Benchmark = {
  id: 'maniskill',
  name: 'ManiSkill',
  shortName: 'MS',
  description: 'ManiSkill: A Unified Benchmark for Generalizable Manipulation Skills with large-scale demonstrations.',
  iconEmoji: '🦾',
  category: 'manipulation',
  paper: {
    title: 'ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills',
    authors: ['Jiayuan Gu', 'Fanbo Xiang', 'Xuanlin Li', 'Zhan Ling', 'Xiqiang Liu', 'Tongzhou Mu', 'Yihe Tang', 'Stone Tao', 'Xinyue Wei', 'Yunchao Yao', 'Xiaodi Yuan', 'Pengwei Xie', 'Zhiao Huang', 'Rui Chen', 'Hao Su'],
    venue: 'ICLR',
    year: 2023,
    arxivId: '2302.04659',
  },
  websiteUrl: 'https://maniskill.ai/',
  githubUrl: 'https://github.com/haosulab/ManiSkill',
  metrics: [
    { id: 'rigid_body', name: 'Rigid Body Tasks', higherIsBetter: true, format: 'percentage' },
    { id: 'soft_body', name: 'Soft Body Tasks', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'soft-body', 'rigid-body'],
  lastUpdated: '2024-11-20',
  scores: [
    { modelId: 'openvla-7b', score: 56.8, details: { rigid_body: 62.3, soft_body: 45.2 } },
    { modelId: 'rdt-1b', score: 71.5, details: { rigid_body: 78.2, soft_body: 58.1 } },
    { modelId: 'hpt', score: 63.2, details: { rigid_body: 68.5, soft_body: 52.8 } },
    { modelId: 'octo-base', score: 42.5, details: { rigid_body: 48.7, soft_body: 32.1 } },
    { modelId: 'diffusion-policy', score: 67.8, details: { rigid_body: 73.5, soft_body: 56.4 } },
  ],
};

// ============================================
// ALOHA Benchmark
// ============================================
export const ALOHA: Benchmark = {
  id: 'aloha',
  name: 'ALOHA',
  shortName: 'ALOHA',
  description: 'ALOHA: A Low-cost Open-source Hardware System for Bimanual Teleoperation with simulation benchmark.',
  iconEmoji: '🤲',
  category: 'manipulation',
  paper: {
    title: 'Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware',
    authors: ['Tony Z. Zhao', 'Vikash Kumar', 'Sergey Levine', 'Chelsea Finn'],
    venue: 'RSS',
    year: 2023,
    arxivId: '2304.13705',
  },
  websiteUrl: 'https://tonyzhaozh.github.io/aloha/',
  githubUrl: 'https://github.com/tonyzhaozh/aloha',
  metrics: [
    { id: 'insertion', name: 'Peg Insertion', higherIsBetter: true, format: 'percentage' },
    { id: 'transfer', name: 'Object Transfer', higherIsBetter: true, format: 'percentage' },
  ],
  taskTypes: ['manipulation', 'bimanual'],
  lastUpdated: '2024-08-15',
  scores: [
    { modelId: 'act', score: 92.5, details: { insertion: 95.0, transfer: 90.0 } },
    { modelId: 'diffusion-policy', score: 88.3, details: { insertion: 91.2, transfer: 85.4 } },
    { modelId: 'rdt-1b', score: 94.1, details: { insertion: 96.5, transfer: 91.7 } },
    { modelId: 'openvla-7b', score: 78.5, details: { insertion: 82.3, transfer: 74.7 } },
    { modelId: 'octo-base', score: 65.2, details: { insertion: 68.5, transfer: 61.9 } },
  ],
};

// ============================================
// Benchmark Registry
// ============================================
export const ALL_BENCHMARKS: Benchmark[] = [
  SIMPLER_ENV,
  CALVIN,
  LIBERO,
  META_WORLD,
  RLBENCH,
  MANISKILL,
  ALOHA,
];

export const BENCHMARKS_BY_ID: Record<string, Benchmark> = ALL_BENCHMARKS.reduce(
  (acc, benchmark) => ({ ...acc, [benchmark.id]: benchmark }),
  {}
);

/**
 * Get a benchmark by ID
 */
export const getBenchmarkById = (id: string): Benchmark | undefined => 
  BENCHMARKS_BY_ID[id];

/**
 * Get all benchmarks
 */
export const getAllBenchmarks = (): Benchmark[] => ALL_BENCHMARKS;

/**
 * Get benchmarks by category
 */
export const getBenchmarksByCategory = (category: string): Benchmark[] =>
  ALL_BENCHMARKS.filter((b) => b.category === category);

