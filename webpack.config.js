const path = require('path');
const HtmlWebpackPlugin   = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: path.join(__dirname, "public"),
    hot:true,
    port:5000,
    open:true
  },
  output: {
    filename: "avatar-component.min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  }, 
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader', 'postcss-loader']
      }
    ],
  },
  resolve: {
    extensions: [".js",".jsx"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
}