// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/road2wyd': 'https://www.road2wyd.com/',
    '/papaya': 'https://papaya-coral.vercel.app/',
  }
});
