import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stringHash from 'string-hash'
import path from 'path'

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production'

	return {
		plugins: [react()],
		build: {
			minify: isProduction,
			sourcemap: !isProduction,
			rollupOptions: {
				output: {
					entryFileNames: isProduction
						? 'assets/[name].[hash].js'
						: '[name].js',
				},
			},
		},
		define: {
			__API_URL__: JSON.stringify(
				isProduction
					? 'https://mi-api-produccion.com'
					: 'http://localhost:3000'
			),
			'process.env.NODE_ENV': JSON.stringify(mode),
		},
		css: {
			modules: {
				generateScopedName: (name, filename, css) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
					const hash = stringHash(css).toString(36).substr(0, 5)
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
					const file = path.basename(filename, '.module.css')

					return file + '_' + name + '__' + hash
				},
			},
		},
	}
})
