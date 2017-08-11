const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    src: "./src/index.js",
    css: "./scss/main.scss"
  },

  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/public"
  },

  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
        loader: 'url-loader',
        options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: "./public"
  }

}