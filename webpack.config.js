const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.html'],
    },
    module: {
        rules: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' },
            { test: /\.ts/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
        ]
    },
    devtool: '#source-map',
};