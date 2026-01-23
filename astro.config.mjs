// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercel(),
});
