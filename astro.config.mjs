import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P9488',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
