// make.fun news-image-20261118: write the picture of Wednesday 18 November 2026's world news to /output/entry.png.
// The picture is drawn in scene.html and rendered ahead of time by render.mjs; the grader has no network, so this
// program copies those exact bytes, identical on every run. Outside the grader MAKEFUN_OUTPUT_DIR stands in for /output.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
