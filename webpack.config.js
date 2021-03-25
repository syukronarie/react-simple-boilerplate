const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const htmlModule = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
});
const cleanWebpackPlugin = new CleanWebpackPlugin();
const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	linkType: "text/css",
	filename: "[name].css",
	chunkFilename: "[id].css",
});
const esLintPlugin = new ESLintPlugin();

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.tsx"),
	devtool: "eval-source-map",
	devServer: {
		publicPath: "/",
		contentBase: "public",
		hot: true,
		port: 8000,
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				use: [{ loader: "ts-loader" }],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, //don't test node_modules folder
				use: {
					loader: "babel-loader",
				},
				resolve: {
					extensions: [".js", ".jsx"],
				},
			},
			{
				test: /\.(s)+css$/i,
				// use: [MiniCssExtractPlugin.loader, "css-loader"],
				use: [
					MiniCssExtractPlugin.loader,
					// { loader: "file-loader" },
					"css-loader",
					// "style-loader",
				],
			},
			{
				test: /\.(png|jpg|svg)$/i,
				loader: "file-loader",
			},
		],
	},
	plugins: [
		cleanWebpackPlugin,
		hotModuleReplacementPlugin,
		htmlModule,
		miniCssExtractPlugin,
		esLintPlugin,
	],
	stats: {
		assets: true,
		children: false,
		chunks: true,
		errors: true,
		errorDetails: true,
		modules: true,
		timings: true,
		colors: true,
	},
};
