import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink, FileText, Github, Globe, Clock, Tag, Database } from 'lucide-react';
import { getBenchmarkById, getLeaderboardData } from '../data';
import { LeaderboardTable } from '../components/LeaderboardTable';
import { getPaperUrl } from '../data/utils';

export function BenchmarkPage() {
  const { benchmarkId } = useParams<{ benchmarkId: string }>();
  
  if (!benchmarkId) {
    return <Navigate to="/" replace />;
  }

  const benchmark = getBenchmarkById(benchmarkId);

  if (!benchmark) {
    return (
      <div className="error-page">
        <h1>Benchmark Not Found</h1>
        <p>The benchmark "{benchmarkId}" does not exist.</p>
      </div>
    );
  }

  const leaderboardData = getLeaderboardData(benchmark);
  const benchmarkPaperUrl = getPaperUrl(benchmark.paper);

  return (
    <div className="benchmark-page">
      <div className="benchmark-header">
        <div className="benchmark-title-section">
          <span className="benchmark-icon-large">{benchmark.iconEmoji}</span>
          <div>
            <h1>{benchmark.name}</h1>
            <p className="benchmark-description">{benchmark.description}</p>
          </div>
        </div>

        <div className="benchmark-meta-section">
          <div className="meta-item">
            <Clock size={16} />
            <span>Last updated: {benchmark.lastUpdated}</span>
          </div>
          <div className="meta-item">
            <Tag size={16} />
            <span className="category-badge">{benchmark.category}</span>
          </div>
          {benchmark.taskTypes && (
            <div className="task-tags">
              {benchmark.taskTypes.map((task) => (
                <span key={task} className="task-tag">{task}</span>
              ))}
            </div>
          )}
        </div>

        <div className="benchmark-links-section">
          {benchmarkPaperUrl && (
            <a
              href={benchmarkPaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="benchmark-action-link"
            >
              <FileText size={18} />
              Read Paper
              <ExternalLink size={14} />
            </a>
          )}
          {benchmark.githubUrl && (
            <a
              href={benchmark.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="benchmark-action-link"
            >
              <Github size={18} />
              GitHub
              <ExternalLink size={14} />
            </a>
          )}
          {benchmark.websiteUrl && (
            <a
              href={benchmark.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="benchmark-action-link"
            >
              <Globe size={18} />
              Website
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {benchmark.datasetUrls && (
          <div className="dataset-links-section">
            <h3 className="section-subtitle"><Database size={16} /> Datasets</h3>
            <div className="dataset-links">
              {benchmark.datasetUrls.lerobot && (
                <a href={benchmark.datasetUrls.lerobot} target="_blank" rel="noopener noreferrer" className="dataset-link">
                  LeRobot
                </a>
              )}
              {benchmark.datasetUrls.rlds && (
                <a href={benchmark.datasetUrls.rlds} target="_blank" rel="noopener noreferrer" className="dataset-link">
                  RLDS
                </a>
              )}
              {benchmark.datasetUrls.other && (
                <a href={benchmark.datasetUrls.other} target="_blank" rel="noopener noreferrer" className="dataset-link">
                  Dataset
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {benchmark.paper && (
        <div className="paper-citation">
          <h3>📚 Citation</h3>
          {benchmarkPaperUrl ? (
            <a
              href={benchmarkPaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="citation-box citation-box-link"
            >
              <p className="paper-title">{benchmark.paper.title}</p>
              <p className="paper-authors">
                {benchmark.paper.authors.slice(0, 5).join(', ')}
                {benchmark.paper.authors.length > 5 && ` et al.`}
              </p>
              <p className="paper-venue">
                {benchmark.paper.venue} {benchmark.paper.year}
              </p>
            </a>
          ) : (
            <div className="citation-box">
              <p className="paper-title">{benchmark.paper.title}</p>
              <p className="paper-authors">
                {benchmark.paper.authors.slice(0, 5).join(', ')}
                {benchmark.paper.authors.length > 5 && ` et al.`}
              </p>
              <p className="paper-venue">
                {benchmark.paper.venue} {benchmark.paper.year}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="leaderboard-section">
        <div className="leaderboard-header">
          <h2>🏆 Leaderboard</h2>
          <span className="model-count">{leaderboardData.length} models</span>
        </div>
        <LeaderboardTable
          data={leaderboardData}
          metrics={benchmark.metrics}
          showDetails
        />
      </div>

      <div className="metrics-section">
        <h3>📊 Metrics</h3>
        <div className="metrics-grid">
          {benchmark.metrics.map((metric) => (
            <div key={metric.id} className="metric-card">
              <span className="metric-name">{metric.name}</span>
              {metric.description && (
                <span className="metric-description">{metric.description}</span>
              )}
              <span className="metric-direction">
                {metric.higherIsBetter ? '↑ Higher is better' : '↓ Lower is better'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
