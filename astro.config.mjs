import {defineConfig} from "astro/config"

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
  vite: {
    build: {
      rollupOptions: {
        external: id => /node_modules/.test(id),
      },
    },
  },
})
