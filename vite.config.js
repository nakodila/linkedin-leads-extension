import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    outDir: 'dist', // Specify output folder as 'build'
    rollupOptions: {
      input: {
        app: 'src/index.js', // Your main JS entry point
      },
      output: {
        entryFileNames: 'index.js', // Ensure the output file is named index.js
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] && assetInfo.names[0].endsWith('.css')) {
            return 'style/app.css'; // Ensure the output CSS file is named index.css
          }
          return '[name].[ext]'; // Fallback for other assets
        },
      },
      external: ['dotenv', '@notionhq/client', 'apify-client'], // Specify external dependencies
    },
  },
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/manifest.json', // Source of the file you want to copy
          dest: '.', // Destination in the root of the build folder
        },
        {
          src: 'src/background.js', // Source of the file you want to copy
          dest: '.', // Destination in the root of the build folder
        },
        {
          src: 'src/assets/*', // Source of the file you want to copy
          dest: './icons', // Destination in the root of the build folder
        },
        {
          src: 'index.html',
          dest: '.',
        },
        {
          src: 'src/_locales',
          dest: '.',
        },
        {
          src: 'src/reset.css',
          dest: './style/reset.css',
        },
        {
          src: 'src/index.css',
          dest: './style/index.css',
        },
      ],
    }),
  ],
});
