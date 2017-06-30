var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            { test: /\.ts/, use: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.html/, use: 'html-loader' },
            { test: /\.(jpg|jpe?g|gif)/, use: 'file-loader?name=asserts/[name].[ext]' },
            { test: /\.css/, use: ['to-string-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}