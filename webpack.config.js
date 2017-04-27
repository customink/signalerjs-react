var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'signalerjs-react': 'index.js',
    'signalerjs-react.min': 'index.js'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  output: {
   filename: 'dist/[name].js',
    libraryTarget: 'umd',
    library: 'signalerjs-react'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'signalerjs': {
        root: 'signalerjs',
        commonjs2: 'signalerjs',
        commonjs: 'signalerjs',
        umd: 'signalerjs'
      }
    }
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    })
  ]
};
