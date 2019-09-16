const path = require('path');

module.exports = {
  entry: {
    App: "./src/assets/js/scripts.js"
  },
  output: {
    path: path.resolve(__dirname,"./src/assets/js"),
    filename: "scripts-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
