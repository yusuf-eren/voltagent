import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: true,
  clean: false,
  target: "es2015",
  outDir: "dist",
  minify: false,
  dts: true,
  esbuildOptions(options) {
    options.keepNames = true;
    return options;
  },
});
