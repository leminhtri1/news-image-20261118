# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/leminhtri1/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/leminhtri1/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One picture of the world's news on Wednesday 18 November 2026: a dated front page of 50 stories, counted by region,
with the day by the clock in UTC. Four illustrated leads (Iran's drones at a US base in Kuwait, Xi greeting Trump as
APEC opens in Shenzhen, Russian strikes and the EU's €45bn for Ukraine, Voyager 1 reaching one light-day from Earth),
twelve illustrated stories, a world map, the day in numbers, a list of the rest with their sources named, and a date
check naming what was left out because it was first reported the day before.

`scene.html` draws the picture; `render.mjs` renders it with headless Chrome or Edge to `entry.png`; `main.ts` copies
that PNG to `/output/entry.png` (no network, the same bytes on every run).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118).</sub>
