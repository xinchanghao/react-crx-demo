const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    filename: '[id].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["stage-0", 'react']
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
          options: {
            javascriptEnabled: true
          }
        }]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    },
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // enable gzip compression
    https: false, // true for self-signed, object for cert authority
  },
};