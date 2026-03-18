import { Link } from 'react-router-dom';
import { CalendarDays, ExternalLink, FileText, Github, Globe, Lock, Unlock } from 'lucide-react';
import { getAllBenchmarks, getAllModels, getModelById } from '../data';
import { getPaperUrl } from '../data/utils';

type ModelCoverage = {
  benchmarkIds: Set<string>;
  submissionCount: number;
};

export function Models() {
  const benchmarks = getAllBenchmarks();
  const benchmarkLabels = new Map(
    benchmarks.map((benchmark) => [
      benchmark.id,
      benchmark.shortName || benchmark.name,
    ])
  );
  const modelCoverage = new Map<string, ModelCoverage>();

  for (const benchmark of benchmarks) {
    for (const score of benchmark.scores) {
      const model = getModelById(score.modelId);
      if (!model) {
        continue;
      }

      const coverage = modelCoverage.get(model.id) ?? {
        benchmarkIds: new Set<string>(),
        submissionCount: 0,
      };

      coverage.benchmarkIds.add(benchmark.id);
      coverage.submissionCount += 1;
      modelCoverage.set(model.id, coverage);
    }
  }

  const models = getAllModels()
    .map((model) => {
      const coverage = modelCoverage.get(model.id);
      const relatedBenchmarks = Array.from(coverage?.benchmarkIds ?? [])
        .map((benchmarkId) => ({
          id: benchmarkId,
          label: benchmarkLabels.get(benchmarkId) ?? benchmarkId,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      return {
        ...model,
        benchmarkCount: relatedBenchmarks.length,
        paperUrl: getPaperUrl(model.paper),
        relatedBenchmarks,
        submissionCount: coverage?.submissionCount ?? 0,
      };
    })
    .sort((a, b) =>
      b.benchmarkCount - a.benchmarkCount ||
      b.submissionCount - a.submissionCount ||
      Date.parse(b.dateAdded) - Date.parse(a.dateAdded) ||
      a.name.localeCompare(b.name)
    );

  const trackedModels = models.filter((model) => model.submissionCount > 0).length;
  const openSourceModels = models.filter((model) => model.isOpenSource === true).length;

  return (
    <div className="models-page">
      <div className="page-header">
        <h1>VLA Models</h1>
        <p className="page-description">
          Browse the tracked model registry, compare benchmark coverage, and jump directly to
          source, papers, and benchmark pages from one place.
        </p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">{models.length}</span>
          <span className="stat-label">Tracked Models</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{trackedModels}</span>
          <span className="stat-label">With Benchmark Results</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{openSourceModels}</span>
          <span className="stat-label">Open Source</span>
        </div>
      </div>

      <section className="models-section">
        <h2>Model Registry</h2>
        <div className="model-grid">
          {models.map((model) => (
            <article key={model.id} className="model-card">
              <div className="model-card-header">
                <div className="model-card-title">
                  <div className="model-card-title-row">
                    <h3>{model.name}</h3>
                    {model.modelSize && (
                      <span className="model-size-badge">{model.modelSize}</span>
                    )}
                  </div>
                  {model.organization && (
                    <p className="model-card-organization">{model.organization}</p>
                  )}
                </div>

                <span
                  className={`model-source-badge ${
                    model.isOpenSource === true
                      ? 'open'
                      : model.isOpenSource === false
                        ? 'closed'
                        : 'unknown'
                  }`}
                >
                  {model.isOpenSource === true ? (
                    <>
                      <Unlock size={14} />
                      Open
                    </>
                  ) : model.isOpenSource === false ? (
                    <>
                      <Lock size={14} />
                      Closed
                    </>
                  ) : (
                    'Unknown'
                  )}
                </span>
              </div>

              {(model.description || model.paper?.title) && (
                <p className="model-card-description">
                  {model.description || model.paper?.title}
                </p>
              )}

              <div className="model-meta-row">
                <div className="model-meta-pill">
                  <CalendarDays size={14} />
                  <span>Added {model.dateAdded}</span>
                </div>
                <div className="model-meta-pill">
                  <strong>{model.benchmarkCount}</strong>
                  <span>benchmarks</span>
                </div>
                <div className="model-meta-pill">
                  <strong>{model.submissionCount}</strong>
                  <span>entries</span>
                </div>
              </div>

              <div className="model-card-section">
                <span className="model-card-section-title">Benchmarks</span>
                {model.relatedBenchmarks.length > 0 ? (
                  <div className="model-benchmark-list">
                    {model.relatedBenchmarks.map((benchmark) => (
                      <Link
                        key={benchmark.id}
                        to={`/benchmark/${benchmark.id}`}
                        className="model-benchmark-chip"
                      >
                        {benchmark.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="model-empty-state">No benchmark entries yet.</p>
                )}
              </div>

              {(model.paperUrl || model.githubUrl || model.huggingfaceUrl || model.websiteUrl) && (
                <div className="model-card-links">
                  {model.paperUrl && (
                    <a
                      href={model.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="model-link"
                    >
                      <FileText size={16} />
                      Paper
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {model.githubUrl && (
                    <a
                      href={model.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="model-link"
                    >
                      <Github size={16} />
                      GitHub
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {model.huggingfaceUrl && (
                    <a
                      href={model.huggingfaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="model-link"
                    >
                      <span>🤗</span>
                      Hugging Face
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {model.websiteUrl && (
                    <a
                      href={model.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="model-link"
                    >
                      <Globe size={16} />
                      Website
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
