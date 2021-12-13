const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        app:'./src/index.js'
    },
    // 提供了一个简单的服务器，能够实时重新加载
    devServer: {
        //将 dist 目录下的文件，作为可访问文件。
         contentBase: './dist',
         hot: true
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};