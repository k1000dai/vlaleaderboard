// ============================================
// VLA Leaderboard Type Definitions
// ============================================

/**
 * Represents a research paper with citation information
 */
export interface Paper {
  title: string;
  authors: string[];
  venue?: string; // Conference or Journal
  year: number;
  arxivId?: string;
  doi?: string;
  url?: string;
}

/**
 * Represents a VLA model entry on the leaderboard
 */
export interface ModelEntry {
  id: string;
  name: string;
  organization?: string;
  paper?: Paper;
  huggingfaceUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  description?: string;
  dateAdded: string;
  isOpenSource: boolean;
  modelSize?: string; // e.g., "7B", "13B", "70B"
}

/**
 * Score entry for a model on a specific benchmark
 */
export interface BenchmarkScore {
  modelId: string;
  score: number;
  details?: Record<string, number>; // Sub-scores
  notes?: string;
  submittedAt?: string;
}

/**
 * Metric definition for benchmarks
 */
export interface Metric {
  id: string;
  name: string;
  description?: string;
  higherIsBetter: boolean; // true for accuracy, false for error rates
  format?: 'percentage' | 'decimal' | 'integer';
}

/**
 * Represents a simulation benchmark
 */
export interface Benchmark {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  paper?: Paper;
  websiteUrl?: string;
  githubUrl?: string;
  datasetUrls?: {
    rlds?: string;
    lerobot?: string;
    other?: string;
  };
  category: BenchmarkCategory;
  metrics: Metric[];
  scores: BenchmarkScore[];
  lastUpdated: string;
  taskTypes?: string[]; // e.g., ["manipulation", "navigation"]
  iconEmoji?: string;
}

/**
 * Benchmark categories
 */
export type BenchmarkCategory = 
  | 'manipulation'
  | 'navigation'
  | 'multi-task'
  | 'real-world'
  | 'simulation';

/**
 * Column definition for leaderboard table
 */
export interface LeaderboardColumn {
  id: string;
  header: string;
  accessorKey?: string;
  sortable?: boolean;
  width?: string;
}

/**
 * Leaderboard entry combining model and score info
 */
export interface LeaderboardEntry {
  rank: number;
  model: ModelEntry;
  score: number;
  details?: Record<string, number>;
  notes?: string;
}
