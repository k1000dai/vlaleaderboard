# VLA Leaderboard

VLA Leaderboard is a community-maintained registry for tracking Vision-Language-Action model performance across simulation and real-world robotics benchmarks.

🌐 Live site: [https://vlaleaderboard.com/](https://vlaleaderboard.com/)

## ✨ What This Repo Includes

- An overview dashboard for the current benchmark landscape.
- Per-benchmark leaderboard pages with links to papers, repos, and datasets.
- A model registry page that shows model metadata and benchmark coverage.
- A benchmark menu in the header for fast navigation as the registry grows.
- Dark and light themes.

## 📊 Current Benchmarks

The repository currently includes these benchmark registries:

- LIBERO
- CALVIN
- VLABench
- Meta-World
- RoboTwin 2.0
- SIMPLER-Env
- LIBERO-PRO
- BEHAVIOR-1K
- RoboChallenge Table 30

Each benchmark definition lives in [`src/data/benchmarks.ts`](src/data/benchmarks.ts). Model metadata lives in [`src/data/models.ts`](src/data/models.ts).

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- React Router
- TanStack Table
- Firebase Hosting

## 🚀 Local Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

Manual Firebase deploy:

```bash
npm run deploy
```

Production updates are deployed through GitHub Actions. The intended workflow is:

1. Open a pull request against `main`
2. Merge the pull request
3. GitHub Actions deploys the latest site automatically

In other words, `main` is treated as the production branch, and manual `npm run deploy` is only a fallback path when you explicitly need a local deploy.

## 🗂 Project Structure

- [`src/data/models.ts`](src/data/models.ts): model registry and lookup helpers
- [`src/data/benchmarks.ts`](src/data/benchmarks.ts): benchmark definitions and submitted results
- [`src/pages/Overview.tsx`](src/pages/Overview.tsx): landing page
- [`src/pages/BenchmarkPage.tsx`](src/pages/BenchmarkPage.tsx): per-benchmark leaderboard page
- [`src/pages/Models.tsx`](src/pages/Models.tsx): model registry page
- [`src/components/Layout.tsx`](src/components/Layout.tsx): app shell, navigation, theme toggle

## 📝 Adding or Updating Results

Normal data updates do not require UI changes. The app reads directly from the registry files, so new models and scores appear automatically once the data is added.

### 1. 🤖 Add the model if needed

Register the model in [`src/data/models.ts`](src/data/models.ts).

```ts
'model-id': {
  id: 'model-id',
  name: 'Model Name',
  organization: 'Organization Name',
  paper: {
    title: 'Paper Title',
    authors: ['Author 1', 'Author 2'],
    year: 2026,
    arxivId: '2601.12345',
  },
  githubUrl: 'https://github.com/org/repo',
  websiteUrl: 'https://example.com',
  isOpenSource: true,
  dateAdded: '2026-03-18',
  modelSize: '3b',
}
```

Guidelines:

- `id` must match the `modelId` used in benchmark scores exactly.
- Prefer `arxivId` when available. Use `url` if the source is not arXiv.
- Use ISO dates: `YYYY-MM-DD`.
- Minimal entries are acceptable when only partial metadata is public.

### 2. 📈 Add the score to a benchmark

Append a score entry to the target benchmark in [`src/data/benchmarks.ts`](src/data/benchmarks.ts) and update that benchmark's `lastUpdated`.

```ts
{
  modelId: 'model-id',
  score: 85.5,
  details: {
    easy: 90.0,
    hard: 70.0,
  },
  notes: 'Optional short clarification.',
}
```

Guidelines:

- `score` is the primary metric shown in the leaderboard.
- `details` keys must match the metric `id` values already defined for that benchmark.
- Keep the numeric precision from the source instead of re-rounding the raw result.
- Only add `notes` when the source needs a short caveat.

### 3. 🧪 Add a new benchmark if necessary

If the benchmark does not exist yet:

1. Add a new `Benchmark` object in [`src/data/benchmarks.ts`](src/data/benchmarks.ts).
2. Define `metrics` first, then add `scores`.
3. Register it in `ALL_BENCHMARKS`.
4. Set a concise `shortName` because it is used in navigation.

## 🤝 Contribution Expectations

Pull requests should include:

- The benchmark name and model name.
- A citation or source URL for the result.
- Any caveat needed to interpret the score.

Before opening a PR:

```bash
npm run lint
npm run build
```

After a pull request is merged into `main`, the production site is expected to update automatically via GitHub Actions.

## 🤖 Agent-Friendly Workflow

If you are updating this repository with an automated coding agent, read [`AGENTS.md`](AGENTS.md). It gives the machine-oriented rules for adding results safely and with minimal code changes.

## 🙏 Acknowledgments

- Maintained by [k1000dai](https://k1000dai.github.io/)
- Inspired by leaderboard-style research registries such as LMArena
- All benchmark and model credit belongs to the original authors and maintainers

## ⚖️ License

This project is released under the MIT License. See [`LICENSE`](LICENSE).
