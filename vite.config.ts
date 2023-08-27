/// <reference types="vitest" />
import { defineConfig } from "vite";
import minifyLiterals from "rollup-plugin-minify-html-literals-v3";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
        pure: "./src/pure.ts",
        "side-effects": "./src/side-effects.ts",
      },
      formats: ["es"],
    },
    minify: false,
    rollupOptions: {
      external: Object.keys(dependencies).map(
        (packageName) => new RegExp(`^${packageName}`)
      ),
    },
  },
  plugins: [minifyLiterals()],
  test: {
    passWithNoTests: true,
    browser: {
      enabled: true,
      headless: true,
      name: "chromium",
      provider: "playwright",
    },
    coverage: {
      provider: "istanbul",
    },
  },
});
