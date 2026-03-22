// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://skybound0.github.io',
	output: 'static',
	integrations: [
		mdx(),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	alias: {
		'@': './src',
		'@/components': './src/components',
		'@/layouts': './src/layouts',
		'@/lib': './src/lib',
		'@/styles': './src/styles',
	},
});
