import { Link } from 'react-router-dom';
import { FileText, Github, Globe, Clock } from 'lucide-react';
import type { Benchmark, LeaderboardEntry } from '../types';
import { formatScore, getArxivUrl } from '../data/utils';

interface BenchmarkCardProps {
  benchmark: Benchmark;
  leaderboardData: LeaderboardEntry[];
  compact?: boolean;
}

export function BenchmarkCard({ benchmark, leaderboardData, compact = false }: BenchmarkCardProps) {
  const topEntries = leaderboardData.slice(0, compact ? 5 : 10);
  const primaryMetric = benchmark.metrics[0];

  return (
    <div className="benchmark-card">
      <div className="benchmark-card-header">
        <div className="benchmark-title-row">
          <span className="benchmark-icon">{benchmark.iconEmoji}</span>
          <h3 className="benchmark-name">{benchmark.shortName || benchmark.name}</h3>
        </div>
        <div className="benchmark-meta">
          <span className="benchmark-date">
            <Clock size={12} />
            {benchmark.lastUpdated}
          </span>
          <Link to={`/benchmark/${benchmark.id}`} className="view-all-link">
            View All →
          </Link>
        </div>
      </div>

      <div className="benchmark-card-table">
        <table>
          <thead>
            <tr>
              <th style={{ width: 50 }}>Rank</th>
              <th>Model</th>
              <th style={{ width: 90 }}>{primaryMetric?.name || 'Score'}</th>
            </tr>
          </thead>
          <tbody>
            {topEntries.map((entry) => (
              <tr key={entry.model.id}>
                <td className="rank-cell">
                  {entry.rank === 1 && '🥇'}
                  {entry.rank === 2 && '🥈'}
                  {entry.rank === 3 && '🥉'}
                  {entry.rank > 3 && entry.rank}
                </td>
                <td className="model-name-cell">
                  <span className="model-name-text">{entry.model.name}</span>
                </td>
                <td className="score-cell">
                  {formatScore(entry.score, primaryMetric?.format)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="benchmark-card-links">
        {benchmark.paper?.arxivId && (
          <a
            href={getArxivUrl(benchmark.paper.arxivId)}
            target="_blank"
            rel="noopener noreferrer"
            className="benchmark-link"
          >
            <FileText size={14} />
            Paper
          </a>
        )}
        {benchmark.githubUrl && (
          <a
            href={benchmark.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="benchmark-link"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {benchmark.websiteUrl && (
          <a
            href={benchmark.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="benchmark-link"
          >
            <Globe size={14} />
            Website
          </a>
        )}
      </div>
    </div>
  );
}

