const path = require('path');
// const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
    entry: {
      'less':path.resolve(__dirname, './less/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
          )
        }
      ]
    },
    plugins: [
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin('style.css')
    ]
}