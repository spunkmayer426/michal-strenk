// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), vue(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});