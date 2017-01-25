var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'signalerjs-react': 'index.js',
    'signalerjs-react.min': 'index.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  output: {
   filename: 'dist/[name].js',
    libraryTarget: 'umd',
    library: 'signalerjs-react'
  },
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve('src'),
    modulesDirectory: 'node_modules'
  },
  context: path.join(__dirname, 'src'),
  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
