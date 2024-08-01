export default {
  // other configurations
  build: {
    rollupOptions: {
      external: ["/js/functions.bundle.js", "/js/plugins.min.js"],
    },
  },
  vite: {
    // Vite specific configurations go here
    cacheDir: "./.vite-cache", // Specify the cache directory
    build: {
      // Tweak build settings if necessary
      sourcemap: true, // Generate source maps
      rollupOptions: {
        // Customize Rollup options used by Vite
      },
    },
  },
}
