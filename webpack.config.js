const path = require('path');

module.exports = {
  entry: './development/entry.js',
  output: {
    path: path.resolve(__dirname, "./assets"),
    filename: "bundled.js",
  },
  module: {
      rules: [
       {
         test: /\.(png|svg|jpg|gif|webp)$/,
         use: [
           {
             loader: 'file-loader'
           }
         ]
       }
      ]
    }
}
