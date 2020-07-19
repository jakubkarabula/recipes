const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production'

const config = {
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
    filename: isProduction ? 'bundle-front.[hash].js' : 'bundle-front.js' 
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
}

if (isProduction) {
  config.devtool = 'inline-source-map'
}

module.exports = config
