var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: { "app": './app.js' },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "stage-3"]
                }
            }
        ]
    }   
};