// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abiodunraji.github.io',
  base: '/seo-expert2',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
