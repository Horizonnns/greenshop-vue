/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		extend: {
			colors: {
				dark: '#3d3d3d',
				primary: '#46a358',
				'light-green': '#4aa3581a',

				gray: {
					10: '#fbfbfb',
				},

				yellow: {
					10: '#ffac0c',
				},
			},
		},
	},
	plugins: [],
};
