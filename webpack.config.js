var webpack = require('webpack');

module.exports = {
  entry: './src',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  output: {
    filename: 'dist/signalerjs-react.min.js',
    libraryTarget: 'umd',
    library: 'signalerjs-react'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    fallback: __dirname
  },
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
    new webpack.optimize.UglifyJsPlugin()
  ]
};
