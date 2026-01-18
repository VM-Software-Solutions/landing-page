// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
  import vercel from '@astrojs/vercel'; // 👈 Importás el adapter


export default defineConfig({
  integrations: [tailwind()],
  output: "static",                     // 👈 Le decís a Astro que genere un sitio estático
  adapter: vercel(),                     // 👈 Le decís a Astro que use Vercel
});