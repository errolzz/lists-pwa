'use strict';

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
};
