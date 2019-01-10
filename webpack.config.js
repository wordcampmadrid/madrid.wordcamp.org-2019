const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry : './app.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  mode   : 'production',
  module : {
    rules:[
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename:'style.css'}),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
