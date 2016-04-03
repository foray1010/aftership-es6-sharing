'use strict';

const webpack = require('webpack');

const webpackConfig = {
	entry: {
		test: './src/test.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				loader: 'babel-loader',
				query: {
					babelrc: false,
					presets: [
						process.env.VERSION === '1' ?
							'babel-preset-es2015' :
							'babel-preset-es2015-native-modules'
					]
				}
			}
		]
	},
	output: {
		path: './dist',
		filename: `[name].webpack${process.env.VERSION || '2'}.js`
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
		webpackConfig.output.filename = `[name].webpack${process.env.VERSION || '2'}.min.js`;
		webpackConfig.plugins.push(
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		);
}

module.exports = webpackConfig;
