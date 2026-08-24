# Leaderboard curation and expansion

The leaderboard is expanded by adding verified models, benchmarks, and reported results—not by refreshing one benchmark indefinitely.

## What can be added

- A new VLA or policy model evaluated on an existing benchmark.
- A new benchmark with a stable public definition, task protocol, and metric.
- A new result for an existing model/benchmark pair.
- A correction to an existing result when the primary source supports it.

## Evidence requirements

Every new entry must be grounded in a primary source:

- The official paper, project page, repository, or benchmark leaderboard.
- The exact model/benchmark name and the reported metric.
- A source URL and publication/release date when available.
- A caveat when the protocol, split, instruction variant, or metric differs from other rows.

Do not infer scores from abstracts, screenshots, social posts, or secondary summaries. Do not invent missing model metadata. If the source is ambiguous, leave the candidate out and report the boundary.

## Nightly automation

The nightly `X 日次ペーパー投稿（yachi_8001）` job performs at most one curation change per night:

1. Select a technical paper from the completed papers database.
2. Check whether it contains a leaderboard-eligible model, benchmark, or result.
3. Verify the candidate against a primary source.
4. Update `src/data/models.ts` and/or `src/data/benchmarks.ts` with the smallest compatible change.
5. Run `npm run build`.
6. Create a branch and pull request, wait for PR CI, merge only when green, and verify the main deploy.
7. Include the leaderboard URL in that night's single X post only after the change is merged and deployed.

If there is no eligible candidate or the evidence/CI is insufficient, no leaderboard change is made. The paper post may still proceed without claiming an update.

## Existing RoboLab adapter

`src/data/robolab.ts` and `scripts/update-robolab.mjs` provide the initial RoboLab-120 registration and a reproducible importer for NVIDIA's official JSON. The importer is intentionally not a RoboLab-only scheduled updater; future curation should broaden the registry across models and benchmarks.
