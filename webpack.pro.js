const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');


module.exports = merge(
    common,
    {
        mode: 'production',
        devtool: 'source-map',
        plugins: [
            new UglifyJSPlugin({
                sourceMap: true
            })
        ],
    }
);