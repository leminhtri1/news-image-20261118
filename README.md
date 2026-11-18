# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/leminhtri1/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/leminhtri1/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One picture of the world's news on Wednesday 18 November 2026: a dated front page of 38 stories, counted by region.
Three illustrated leads (Xi greeting Trump as APEC opens in Shenzhen, Iran's drones at a US base in Kuwait, the COP31
split over a fossil-fuel phase-out), ten illustrated stories, a world map pinning where they happened, a list of the
rest, and a date check naming what was left out because it was reported the day before.

`scene.html` draws the picture; `render.mjs` renders it with headless Chrome or Edge to `entry.png`; `main.ts` copies
that PNG to `/output/entry.png` (no network, the same bytes on every run).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118).</sub>
