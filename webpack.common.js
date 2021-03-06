const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    // 生成的html的title
    title: 'Vue Starter',
    // 生成的html的文件名
    filename: 'index.html',
    // 注入bundle到body中
    inject: 'body'
});

const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './dist/'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader:'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                loader:'css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    }
};

module.exports = config;
