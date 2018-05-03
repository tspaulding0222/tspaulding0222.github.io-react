var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var extractSass = new ExtractTextPlugin("styles.css");

module.exports = {
	entry: "./src/main.js",
	mode: "development",
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								minimize: process.env.NODE_ENV == "production" ? true : false,
								sourceMap: true,
								importLoaders: 1
							}
						},
						{
							loader: "postcss-loader",
							options: {
								sourceMap: "inline",
								config: {
									ctx: {
										autoprefixer: { browsers: ["last 2 versions", "iOS >=8"] }
									}
								}
							}
						},
						{
							loader: "sass-loader"
						}
					],
					fallback: "style-loader"
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								minimize: process.env.NODE_ENV == "production" ? true : false,
								sourceMap: true,
								importLoaders: 1
							}
						},
						{
							loader: "postcss-loader",
							options: {
								sourceMap: "inline",
								config: {
									ctx: {
										autoprefixer: { browsers: ["last 2 versions", "iOS >=8"] }
									}
								}
							}
						}
					]
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "./static/"
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./static/img/"
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	plugins: [extractSass],
	devtool: "eval-source-map",
	devServer: {
		historyApiFallback: true
	}
};

if (process.env.NODE_ENV == "production") {
	module.exports.mode = "production";
	module.exports.devtool = "source-map";
	module.exports.plugins = (module.exports.plugins || []).concat([
		new UglifyJsPlugin({
			sourceMap: true
		})
	]);
}
