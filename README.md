# VLA Leaderboard

A comprehensive leaderboard for Vision-Language-Action (VLA) models across simulation benchmarks.

🌐 **Live Site**: [https://vlaleaderboard.web.app](https://vlaleaderboard.web.app)

## Features

- 📊 **7 Simulation Benchmarks**: SIMPLER-Env, CALVIN, LIBERO, Meta-World, RLBench, ManiSkill, ALOHA
- 🤖 **12+ VLA Models**: Including OpenVLA, RT-2, Octo, RDT, and more
- 📄 **Easy Paper Access**: Direct links to arXiv papers, GitHub repos, and HuggingFace models
- 🔄 **Sortable Tables**: Sort by any metric
- 📱 **Responsive Design**: Works on desktop and mobile

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Custom CSS with CSS Variables
- **Routing**: React Router
- **Tables**: TanStack Table
- **Hosting**: Firebase Hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

```bash
# Build and deploy to Firebase
npm run build
firebase deploy
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout.tsx       # Main layout with navigation
│   ├── LeaderboardTable.tsx  # Sortable data table
│   └── BenchmarkCard.tsx     # Overview card for benchmarks
├── data/                 # Data files (EASY TO UPDATE!)
│   ├── models.ts        # VLA model definitions
│   ├── benchmarks.ts    # Benchmark definitions & scores
│   └── utils.ts         # Data utilities
├── pages/               # Page components
│   ├── Overview.tsx     # Homepage with all benchmarks
│   └── BenchmarkPage.tsx # Individual benchmark view
├── types/               # TypeScript type definitions
└── index.css            # Global styles
```

## How to Update Data

### Adding a New Model

Edit `src/data/models.ts`:

```typescript
export const MODELS: Record<string, ModelEntry> = {
  // ... existing models ...
  
  'your-new-model': {
    id: 'your-new-model',
    name: 'Your New Model',
    organization: 'Your Organization',
    paper: {
      title: 'Your Paper Title',
      authors: ['Author 1', 'Author 2'],
      venue: 'Conference/Journal',
      year: 2024,
      arxivId: '2401.12345',  // arXiv ID for automatic link
    },
    githubUrl: 'https://github.com/org/repo',
    huggingfaceUrl: 'https://huggingface.co/org/model',
    isOpenSource: true,
    modelSize: '7B',
    dateAdded: '2024-01-01',
  },
};
```

### Adding Scores to a Benchmark

Edit `src/data/benchmarks.ts`:

```typescript
export const YOUR_BENCHMARK: Benchmark = {
  // ... benchmark definition ...
  scores: [
    // Add new score entry
    { 
      modelId: 'your-new-model',  // Must match ID in models.ts
      score: 85.5,                 // Primary metric score
      details: {                   // Optional: sub-metric scores
        metric1: 90.2,
        metric2: 80.8,
      }
    },
  ],
};
```

### Adding a New Benchmark

1. Add benchmark definition in `src/data/benchmarks.ts`
2. Add it to `ALL_BENCHMARKS` array
3. Add navigation link in `src/components/Layout.tsx`

## Paper Citations

Each model and benchmark has a `paper` field that supports:

- `arxivId`: Auto-generates arXiv link
- `doi`: Auto-generates DOI link
- `url`: Direct link to paper

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add/update data in the `src/data/` directory
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- [Matsuo Lab](https://www.matsuo-lab.net/) for hosting
- VLA research community for benchmark data
- [LMArena Leaderboard](https://huggingface.co/spaces/lmarena-ai/lmarena-leaderboard) for design inspiration
