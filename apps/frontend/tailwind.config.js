const ui = require('@snilli/ui/tailwind')

module.exports = {
	presets: [require('@vercel/examples-ui/tailwind'), ui],
	// `ui.content` includes a path to the components that are using tailwind in @snilli/ui
	content: ui.content.concat([
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@vercel/examples-ui/**/*.js',
	]),
}
