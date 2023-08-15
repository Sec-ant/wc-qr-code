import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
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
});
