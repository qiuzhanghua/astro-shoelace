import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@shoelace-style/shoelace/dist/assets",
            dest: "shoelace",
          },
        ],
      }),
    ],
  },
  integrations: [tailwind()],
});
