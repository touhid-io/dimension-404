import { build } from 'esbuild';
import { cp, mkdir, rm } from 'node:fs/promises';

await build({
  entryPoints: ['src/simulation.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: 'es2020',
  outfile: 'assets/simulation.js'
});
await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('assets/simulation.js', 'dist/assets/simulation.js');
await cp('assets/fonts', 'dist/assets/fonts', { recursive: true });
console.log('Static site built in dist/');
