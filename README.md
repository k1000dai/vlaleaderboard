# VLA Leaderboard

A collaborative, open-source leaderboard tracking the state-of-the-art in **Vision-Language-Action (VLA)** models for robotic manipulation and simulation benchmarks.

🌐 **Live Leaderboard**: [https://vlaleaderboard.web.app](https://vlaleaderboard.web.app)

---

## 🚀 Mission

As the field of robotics moves toward general-purpose foundational models, standardized evaluation becomes critical. This project aims to provide a centralized, easy-to-update repository of performance metrics across diverse simulation environments, enabling researchers to:

- **Track Progress**: Follow the latest advances in robotic foundational models.
- **Fair Comparison**: Compare models using standardized metrics across different benchmarks.
- **Easy Reference**: Access original papers, code repositories, and datasets directly from the leaderboard.

---

## 📊 Supported Benchmarks

The leaderboard currently tracks performance across these key simulation environments:

| Benchmark | Description | Key Metrics |
| :--- | :--- | :--- |
| **LIBERO-PRO** | Robustness and generalization on LIBERO tasks | Success Rate (Obj, Pos, Sem, etc.) |
| **CALVIN** | Language-conditioned long-horizon manipulation | Average task length, Success Rate |
| **LIBERO** | Lifelong robot learning and knowledge transfer | Success Rate (Spatial, Object, etc.) |
| **Meta-World** | Multi-task and meta reinforcement learning | Success Rate (Easy to Very Hard) |
| **SIMPLER-Env** | Real-world policy evaluation in simulation | Average Success Rate |
| **VLABench** | Diverse robotic primitives and common sense | Semantic Instruction, Cross Category |
| **RoboTwin 2.0** | Dual-arm manipulation with digital twins | Success Rate |

---

## 🤝 Contributing (Pull Requests Welcome!)

This is a community-driven project. We strongly encourage researchers and developers to submit their results!

### How to Add Your Model or Update Scores

1.  **Fork** the repository.
2.  **Add/Update Data**:
    - **Models**: Edit `src/data/models.ts` to add your model details (name, paper, organization).
    - **Scores**: Edit `src/data/benchmarks.ts` to add the evaluation results for specific benchmarks.
3.  **Submit a Pull Request**: Provide a reference (arXiv link, blog post, or code repo) to verify the results.

Detailed instructions for data structure can be found in the [Updating Data](#updating-data) section below.

---

## 🛠 Technical Setup

This project is built with **React**, **TypeScript**, and **Vite**, hosted on **Firebase**.

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Deployment

```bash
# Build and deploy to Firebase Hosting
npm run deploy
```

---

## 📝 Updating Data (For Contributors)

### 1. Registering a Model (`src/data/models.ts`)
```typescript
'model-id': {
  id: 'model-id',
  name: 'Model Name',
  organization: 'Organization Name',
  paper: {
    title: 'Paper Title',
    authors: ['Author 1', 'et al.'],
    year: 2025,
    arxivId: 'XXXX.XXXXX', // Optional: Auto-generates arXiv link
    url: 'https://...',    // Optional: Direct link
  },
  isOpenSource: true,
  dateAdded: '2025-12-19',
}
```

### 2. Adding Scores (`src/data/benchmarks.ts`)
```typescript
{
  modelId: 'model-id', // Must match the ID in models.ts
  score: 85.5,         // Primary metric score
  details: {           // Sub-metrics (if applicable)
    easy: 90.0,
    hard: 70.0,
  }
}
```

---

## 📜 Acknowledgments

- **Development**: Maintained by [k1000dai](https://k1000dai.github.io/).
- **Inspiration**: Inspired by the [LMArena Leaderboard](https://huggingface.co/spaces/lmarena-ai/lmarena-leaderboard).
- **Data**: All credits go to the respective authors of the VLA models and benchmarks mentioned.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.
