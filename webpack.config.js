'use strict';

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.base.js');

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        devtool: 'eval-source-map',
        devServer: {
            port: 3333,
            historyApiFallback: true,
            hot:true,
        	inline:true,
            noInfo: false
        },
    })
}