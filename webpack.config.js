const frontendConfig = require('./webpack-front.config.js')
const backendConfig = require('./webpack-back.config.js')
//
// const common = {
//   module: {
//     rules: [
//        {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         },
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
// };
//
// const frontend = {
//    entry: [
//        __dirname + '/src/frontend/index.js'
//    ],
//    output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'frontend-bundle.js'   
//    },
//   target: 'web',
//    module: {
//     rules: [
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader"
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/frontend/index.html",
//       filename: "./index.html"
//     })
//   ],
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   }
// };
//
// const backend = {
//    entry: [
//        __dirname + '/src/backend/index.js'
//    ],
//    output: {
//      path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'backend-bundle.js'   
//    },
//    target: 'node',
//    // externasl: 
// };
//
//
module.exports = [
  frontendConfig,
  backendConfig
];
