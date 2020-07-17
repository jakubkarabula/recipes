const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin')

const config = {
  target: "node",
  entry: {
    app: [path.resolve(__dirname, "src", "server", "server.js")]
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

    host: 'localhost',
    port: 4000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-back.js"
  },
  externals: [nodeExternals()],
  plugins: []
};

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon dist/bundle-back.js --watch dist']}));
}

module.exports = config
