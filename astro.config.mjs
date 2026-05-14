import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://caihongtu.netlify.app',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  image: {
    domains: [],
  },
});
