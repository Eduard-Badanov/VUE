import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
		outDir: 'dist',
		minify: 'esbuild',
		cssMinify: true,
		cssCodeSplit: true,
		assetsInlineLimit: 0,
		modulePreload: false,
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor'
					}
					if (id.includes('src/components')) {
						return id.split('/').pop().split('.')[0]
					}
				},
			  assetFileNames: (assetInfo) => {
				var info = assetInfo.name.split(".");
				var extType = info[info.length - 1];
				if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
				  extType = "images";
				} else if (/woff|woff2/.test(extType)) {
				  extType = "css";
				}
				return `${extType}/[name][extname]`;
			  },
			  chunkFileNames: "js/[name].js",
			  entryFileNames: "js/[name].js",
			},
		}
	}
})