// Render scene.html to entry.png with headless Chrome or Edge. Run by hand before committing:
//   node render.mjs [path-to-browser]
// The grader has no network and no browser, so the PNG is committed and main.ts only copies it.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const browsers = [
  process.argv[2],
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('no Chrome or Edge found: pass its path');

const out = join(here, 'entry.png');
const profile = mkdtempSync(join(tmpdir(), 'render-'));
try {
  execFileSync(browser, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--user-data-dir=${profile}`, '--window-size=1024,1024', '--virtual-time-budget=3000',
    `--screenshot=${out}`, pathToFileURL(join(here, 'scene.html')).href,
  ], { stdio: 'ignore', timeout: 120_000 });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

const png = readFileSync(out);
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('not a PNG');
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
console.log(`entry.png: ${w}x${h}, ${png.length} bytes`);
if (w > 1024 || h > 1024 || png.length > 1048576) throw new Error('entry.png breaks the 1024x1024 / 1 MiB limit');
