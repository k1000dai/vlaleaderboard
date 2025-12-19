import { getAllBenchmarks, getLeaderboardData } from '../data';
import { BenchmarkCard } from '../components/BenchmarkCard';

export function Overview() {
  const benchmarks = getAllBenchmarks();

  return (
    <div className="overview-page">
      <div className="page-header">
        <h1>VLA Leaderboard</h1>
        <p className="page-description">
          Comprehensive benchmarks for Vision-Language-Action models across simulation environments.
          Track the latest advances in robotic manipulation, navigation, and multi-task learning.
        </p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">{benchmarks.length}</span>
          <span className="stat-label">Benchmarks</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {new Set(benchmarks.flatMap(b => b.scores.map(s => s.modelId))).size}
          </span>
          <span className="stat-label">Models</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {benchmarks.reduce((acc, b) => acc + b.scores.length, 0)}
          </span>
          <span className="stat-label">Submissions</span>
        </div>
      </div>

      <section className="benchmarks-section">
        <h2>Simulation Benchmarks</h2>
        <div className="benchmark-grid">
          {benchmarks.map((benchmark) => (
            <BenchmarkCard
              key={benchmark.id}
              benchmark={benchmark}
              leaderboardData={getLeaderboardData(benchmark)}
              compact
            />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>About VLA Models</h2>
        <div className="about-content">
          <p>
            <strong>Vision-Language-Action (VLA)</strong> models represent a new paradigm in robotics,
            combining the visual understanding of vision models, the reasoning capabilities of
            language models, and the ability to generate robot actions.
          </p>
          <p>
            This leaderboard tracks performance across standardized simulation benchmarks,
            enabling fair comparison of different approaches to robot learning.
          </p>
          <div className="about-links">
            <a
              href="https://arxiv.org/abs/2406.09246"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              📄 OpenVLA Paper
            </a>
            <a
              href="https://arxiv.org/abs/2310.08864"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              📊 Open X-Embodiment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

