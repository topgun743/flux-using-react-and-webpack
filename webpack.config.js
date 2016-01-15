var path = require('path');
//var HtmlwebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var webpack = require('webpack');

const PATHS = {
	app: path.join(__dirname, 'js'),
	css: path.join(__dirname, 'css'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.app + '/app.js',
	resolve: {
		extensions: ['','.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/,  include: PATHS.css, loaders: ['style-loader','css-loader'] },
			{ test: /\.js?$/, include: PATHS.app, loader: "babel-loader", query: { presets: ['es2015', 'react']} }
		]
	}
	/*
	,devServer: {
		hot: true,
		inline: true,
		progress: true,
		historyApiFallback: true,
		stats: 'errors-only',
		port: process.env.PORT,
		host: process.env.HOST
	}
	*/
	//,plugins: [
		//new HtmlwebpackPlugin({
			//title: 'React-Webpack-Babel Starter 2'
		//})
		//,new webpack.HotModuleReplacementPlugin()
	//]
};