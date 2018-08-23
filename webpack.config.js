var webpack = require('webpack');
var html = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var cssimport = require( 'postcss-import' );
var postcssPresetEnv = require('postcss-preset-env');
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var devConfig = require('./webpack.dev.config');
var distConfig = require('./webpack.dist.config');

var SRC_DIR = path.resolve(__dirname, 'src');


var devCss = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          cssimport,
          postcssPresetEnv({
            stage: 0
          })
        ]
      }
    }
  ]
};

var distCss = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract( {
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            cssimport,
            postcssPresetEnv({
              stage: 0
            })
          ]
        }
      }
    ]
  } ),
};

var cssRule;
switch ( process.env.npm_lifecycle_event ) {
  case 'dev':
    cssRule = devCss;
    break;
  case 'dist':
    cssRule = distCss;
    break;
}

var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      cssRule,
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|dist)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-1'],
          },
        }],
      },
      {
        test: /\.(png|jpg|svg|gif|ttf|woff)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(SRC_DIR),
      path.resolve('./node_modules'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new html({
      template: SRC_DIR + '/index.html',
    }),
  ],
};

// npm run dist vs npm run dev needs different config settings
switch (process.env.npm_lifecycle_event) {
  case 'dev':
    config = merge(config, devConfig);
    break;
  case 'dist':
    config = merge(config, distConfig);
    break;
}

module.exports = config;
