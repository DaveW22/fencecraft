import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.fence-craft.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
