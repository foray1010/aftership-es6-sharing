'use strict';

const webpack = require('webpack');

const webpackConfig = {
	entry: {
		app: './src/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				loader: 'babel-loader',
				query: {
					babelrc: false,
					presets: ['babel-preset-es2015']
				}
			}
		]
	},
	output: {
		path: './dist',
		filename: `[name].webpack.js`
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
};

switch (process.env.NODE_ENV) {
	case 'development':
	default:
		break;

	case 'production':
		webpackConfig.output.filename = `[name].webpack.min.js`;
		webpackConfig.plugins.push(
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		);
}

module.exports = webpackConfig;
