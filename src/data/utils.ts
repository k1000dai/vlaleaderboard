// ============================================
// Data Utility Functions
// ============================================

import type { Benchmark, LeaderboardEntry, ModelEntry } from '../types';
import { getModelById } from './models';

/**
 * Get leaderboard data for a benchmark, sorted by score
 */
export const getLeaderboardData = (benchmark: Benchmark): LeaderboardEntry[] => {
  const entries: LeaderboardEntry[] = [];
  const metric = benchmark.metrics[0]; // Use primary metric
  const isHigherBetter = metric?.higherIsBetter ?? true;

  for (const score of benchmark.scores) {
    const model = getModelById(score.modelId);
    if (model) {
      entries.push({
        rank: 0, // Will be set after sorting
        model,
        score: score.score,
        details: score.details,
      });
    }
  }

  // Sort by score
  entries.sort((a, b) => 
    isHigherBetter ? b.score - a.score : a.score - b.score
  );

  // Assign ranks
  entries.forEach((entry, index) => {
    entry.rank = index + 1;
  });

  return entries;
};

/**
 * Format score based on metric format
 */
export const formatScore = (score: number, format?: string): string => {
  switch (format) {
    case 'percentage':
      return `${score.toFixed(1)}%`;
    case 'integer':
      return Math.round(score).toString();
    case 'decimal':
    default:
      return score.toFixed(2);
  }
};

/**
 * Generate arXiv URL from ID
 */
export const getArxivUrl = (arxivId: string): string => 
  `https://arxiv.org/abs/${arxivId}`;

/**
 * Get paper URL (prefers arXiv, falls back to DOI or direct URL)
 */
export const getPaperUrl = (model: ModelEntry): string | undefined => {
  if (model.paper?.arxivId) {
    return getArxivUrl(model.paper.arxivId);
  }
  if (model.paper?.doi) {
    return `https://doi.org/${model.paper.doi}`;
  }
  return model.paper?.url;
};

/**
 * Get all unique categories from benchmarks
 */
export const getCategories = (benchmarks: Benchmark[]): string[] => {
  const categories = new Set(benchmarks.map(b => b.category));
  return Array.from(categories);
};

