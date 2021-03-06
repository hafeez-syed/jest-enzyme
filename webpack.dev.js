const webpack = require('webpack');
const merge = require('webpack-merge');
const common  = require('./webpack.common');

module.exports = merge(common, {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimize: false
    },
    devtool: 'inline-source-map',
    mode: 'development'
});