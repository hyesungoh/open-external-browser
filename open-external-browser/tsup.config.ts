import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  treeshake: true,
  dts: true,
});
