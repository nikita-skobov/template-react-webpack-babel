// module.exports = {
//   entry: './src/entry.js',
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loaders: ["babel-loader"]
//       }
//     ]
//   }
// };


module.exports = {
  entry: './src/entry.js',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "pug-as-jsx-loader"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
