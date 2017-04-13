module.exports = {
	entry: {
		index: "./lib/app.js",
		test: "./lib/test.js"
	},
	output: {
		path: __dirname + ".",
		filename: "[name].js"
	}
}