import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue({
			/**
			 * Transform Vue SFCs into custom elements (requires vue@^3.2.0)
			 * - `true` -> all `*.vue` imports are converted into custom elements
			 * - `string | RegExp` -> matched files are converted into custom elements
			 *
			 */
			customElement: true,
			reactivityTransform: true,
		}),
	],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	build: {
		emptyOutDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/library.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
