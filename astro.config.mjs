import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fence-craft.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
