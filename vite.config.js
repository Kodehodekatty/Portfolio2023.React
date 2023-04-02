import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio2023.React/",
  plugins: [react()],
  compilerOptions: {
    plugins: [{ name: "typescript-plugin-css-modules" }],
    options: {
      classnameTransform: "dashes",
      customMatcher: "\\.m\\.css$",
      customRenderer: "./myRenderer.js",
      dotenvOptions: {},
      postcssOptions: {},
      rendererOptions: {},
      include: ["./src/index.d.ts"],
    },
  },
});
