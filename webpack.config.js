const path = require('path');

 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   devtool: 'inline-source-map',
   devServer: {
       contentBase: './dist',
   }, 
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "exclude": [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
 };