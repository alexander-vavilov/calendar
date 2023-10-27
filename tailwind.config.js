/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				'dynamic-screen': '100dvh',
			},
			flexBasis: {
				'1/7': '14.2857143%',
			},
		},
	},
	plugins: [],
}
