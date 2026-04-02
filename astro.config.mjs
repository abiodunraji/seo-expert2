// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iwanstepanova.nl',
  // For GitHub Pages, uncomment the line below and set your repo name:
  // base: process.env.GITHUB_ACTIONS ? '/seo-expert2' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
