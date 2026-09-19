/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'oklch(42% 0.09 250)',
				'primary-foreground': 'oklch(99% 0.003 250)',
				secondary: 'oklch(48% 0.055 236)',
				'secondary-foreground': 'oklch(99% 0.003 240)',
				accent: 'oklch(48% 0.08 230)',
				'accent-foreground': 'oklch(99% 0.003 240)',
				destructive: 'oklch(55% 0.18 25)',
				'destructive-foreground': 'oklch(99% 0.003 25)',
				muted: 'oklch(86% 0.025 248)',
				'muted-foreground': 'oklch(38% 0.025 248)',
				background: 'oklch(91% 0.025 248)',
				foreground: 'oklch(23% 0.025 248)',
				card: 'oklch(96% 0.012 248)',
				'card-foreground': 'oklch(23% 0.025 248)',
				border: 'oklch(70% 0.025 248)',
				'brand-blue': 'oklch(42% 0.09 250)',
			},
			borderColor: {
				DEFAULT: 'oklch(70% 0.025 248)',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
