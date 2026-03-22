/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'oklch(66% 0.075 246)',
				'primary-foreground': 'oklch(98% 0.003 250)',
				secondary: 'oklch(64% 0.065 174)',
				'secondary-foreground': 'oklch(98% 0.003 170)',
				accent: 'oklch(68% 0.07 292)',
				'accent-foreground': 'oklch(98% 0.003 292)',
				muted: 'oklch(20% 0.015 254)',
				'muted-foreground': 'oklch(74% 0.02 252)',
				background: 'oklch(11.5% 0.012 255)',
				foreground: 'oklch(94% 0.01 252)',
				card: 'oklch(16.5% 0.015 255)',
				'card-foreground': 'oklch(93% 0.01 252)',
				border: 'oklch(28% 0.018 252)',
				'brand-blue': 'oklch(66% 0.075 246)',
			},
			borderColor: {
				DEFAULT: 'oklch(28% 0.018 252)',
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
