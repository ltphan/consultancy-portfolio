// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
// Import the Tailwind Vite plugin directly
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://linhphan.io',
  integrations: [
    react()
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});