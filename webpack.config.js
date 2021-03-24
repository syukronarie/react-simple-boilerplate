const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlModule = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "styles.[contenthash].css",
});

module.exports = {
	//our index file
	entry: path.resolve(__dirname, "src/index.js"),
	devServer: {
		contentBase: "./public",
		hot: true,
	},
	//Where we put the production code
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	// This says to webpack that we are in development mode and write the code in webpack file in different way
	mode: "development",
	module: {
		rules: [
			//Allows use javascript
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
			//Allows use of CSS
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
				],
			},
			//Allows use of images
			{
				test: /\.(png|jpg|svg)$/i,
				loader: "file-loader",
			},
		],
	},
	plugins: [
		//Allows remove/clean the build folder
		cleanWebpackPlugin,
		//Allows update react components in real time
		hotModuleReplacementPlugin,
		//Allows to create an index.html in our build folder
		htmlModule,
		//This get all our css and put in a unique file
		miniCssExtractPlugin,
	],
	//Config for webpack-dev-server module
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, "dist"),
		hot: true,
		port: 8000,
	},
};
