'use strict';

var path = require('path');
var webpack = require('webpack');
var clean = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require( "extract-text-webpack-plugin" );

// dist config
module.exports = {
  output: {
    path: path.resolve( __dirname, "dist" ),
    publicPath: "./",
    filename: "app.js",
  },
  plugins: [
    new ExtractTextPlugin( "styles.css" ),
    new CopyWebpackPlugin([
      '.htaccess',
    ]),
    new clean( [
      path.resolve( __dirname, "dist" ),
    ] ),
  ],
};