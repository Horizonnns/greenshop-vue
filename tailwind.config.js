/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,

			screens: {
				lg: '1260px',
			},
		},

		extend: {
			colors: {
				primary: '#46a358',
				'light-green': '#4aa3581a',

				dark: {
					10: '#3d3d3d',
					20: '#727272',
				},

				gray: {
					10: '#fbfbfb',
					20: '#f5f5f5',
				},

				yellow: {
					10: '#ffac0c',
				},
			},
		},
	},
	plugins: [],
};
