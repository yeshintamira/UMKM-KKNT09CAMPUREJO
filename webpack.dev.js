const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9004,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    // Hapus atau komentari opsi hot
    // hot: true,
  },
});
