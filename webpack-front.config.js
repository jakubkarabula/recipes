const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    app: [path.resolve(__dirname, "src", "client", "client.js")]
  },
  module: {
    rules: [
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-front.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "assets", "index.html")
    })
  ],
  devtool: 'inline-source-map',
}
