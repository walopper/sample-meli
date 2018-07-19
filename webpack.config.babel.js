const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    entry: [
        'react-hot-loader/patch',
        './client/index.jsx'
    ],

    output: {
        path: path.join(__dirname, '/public/'),
        publicPath: '',
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@Components': path.resolve(__dirname, 'client/components'),
            '@Controllers': path.resolve(__dirname, 'client/controllers')
        }
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: config.clientPort,
        publicPath: path.resolve(__dirname, 'client'),
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        hot: true
    }
}

module.exports = webpackConfig;