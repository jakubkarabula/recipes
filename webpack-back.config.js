const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: {
    app: [path.resolve(__dirname, "src", "backend.js")]
  },
   module: {
    rules: [
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: 'localhost', // Defaults to `localhost`
    port: 4000, // Defaults to 8080
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-back.js"
  },
  externals: [nodeExternals()],
};
