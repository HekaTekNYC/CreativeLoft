import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    resolve: {
      alias: {
        js: "js/",
      },
    },
    buildOptions: {
      minify: true,
    },
  
    devToolbar: {
      enabled: false,
    },
  })
  