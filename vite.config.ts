import { defineConfig } from "vite";

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
      external: [/^lit/, "@ribpay/qr-code-generator"],
    },
  },
});
