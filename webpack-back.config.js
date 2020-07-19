const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin')

const isProduction = process.env.NODE_ENV === 'production'

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
  resolve: {
    modules: ['node_modules', 'src']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? 'bundle-back-prod.js' : 'bundle-back.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  plugins: []
};

if (!isProduction) {
  config.plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon dist/bundle-back.js --watch dist']}));
}

module.exports = config
