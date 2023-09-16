import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["open-external-browser/src/index.ts"],
  format: ["cjs", 'esm'],
  minify: true,
  treeshake: true,
  dts: true,
});
