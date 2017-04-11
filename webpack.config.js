const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const helpers = require('./helpers');

module.exports = (envOptions) => {
    envOptions = envOptions || {};
    const config = {
        entry: {
            main: './src/main.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.js', '.html'],
        },
        module: {
            rules: [
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /\.css$/, loader: 'raw-loader' },
            ]
        },
        devtool: '#source-map',
    };
    if (envOptions.MODE === 'prod') {
        config.module.rules.push(
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
        );
        config.plugins = [
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: helpers.root('src/app/app.module#AppModule')
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            }),
        ];
    } else {
        config.module.rules.push(
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ]
            }
        );
    }
    return config;
};