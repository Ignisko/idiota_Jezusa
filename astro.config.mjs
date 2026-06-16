// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/road2wyd': 'https://www.road2wyd.com/',
    '/road2wyd/[...slug]': 'https://www.road2wyd.com/[...slug]',
    '/papaya': 'https://papaya-coral.vercel.app/',
    '/papaya/[...slug]': 'https://papaya-coral.vercel.app/[...slug]',
  }
});
