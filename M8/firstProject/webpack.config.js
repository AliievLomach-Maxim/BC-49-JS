const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		watchFiles: ['./**/*'],
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
}
