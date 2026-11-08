// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://skybound0.github.io',
	output: 'static',
	compressHTML: true,
	integrations: [
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	alias: {
		'@': './src',
		'@/components': './src/components',
		'@/layouts': './src/layouts',
		'@/lib': './src/lib',
		'@/styles': './src/styles',
	},
});
