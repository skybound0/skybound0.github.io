/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'oklch(65% 0.15 240)',
				'primary-foreground': 'oklch(98% 0 0)',
				secondary: 'oklch(45% 0.08 240)',
				'secondary-foreground': 'oklch(98% 0 0)',
				accent: 'oklch(70% 0.12 250)',
				muted: 'oklch(40% 0 0)',
				'muted-foreground': 'oklch(65% 0 0)',
				background: 'oklch(12% 0 0)',
				foreground: 'oklch(95% 0 0)',
				card: 'oklch(15% 0 0)',
				'card-foreground': 'oklch(95% 0 0)',
				'brand-blue': 'oklch(65% 0.15 240)',
			},
			borderColor: {
				DEFAULT: 'oklch(25% 0 0)',
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
