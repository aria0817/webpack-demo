const path = require('path');
// const HtmlWebpackPlugin =require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        // 入口文件 单个是spa 多个是多页面应用
        // index 
        index:'./src/main.js', // 这是一个chunks(也是一个chunk组，组里面都是单个的chunk)[mian.js,a.js]
        login:'./src/login.js'
    },
    output: {
        //  如果配置中创建出多于一个 "chunk"，应该使用 占位符(substitutions) 
        // filename: '[name].[contenthash].bundle.js', // 这是加上hash，如果没有发生变化，则是可以缓存
        filename: '[name].bundle.js', //[name] 占位符  // 打包出来的文件一个就是一个 bundle
        path: path.resolve(__dirname, 'dist') // 必须是绝对路径，生成资源存放的位置
    },
    // 提供了一个简单的服务器，能够实时重新加载
    devServer: {
        //将 dist 目录下的文件，作为可访问文件。
         contentBase: './dist',
         hot: true
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
    //    new HtmlWebpackPlugin({
    //        template:'./'
    //    })
    ],
    // loader 用于对模块的源代码进行转换 ，loader一定要在 module下的rules数组中配置，因为webpack不能解析除了js/json以外的
    // 类型文件，所以需要使用loader进行转换。
    // 执行顺序：loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)
    // 通过为内联 import 语句添加前缀，可以覆盖 配置 中的所有 loader, preLoader 和 postLoader：
    /**
     * 使用 ! 前缀，将禁用所有已配置的 normal loader(普通 loader) : 
     *      import Styles from '!style-loader!css-loader?modules!./styles.css';
     * 使用 !! 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）
     *       import Styles from '!!style-loader!css-loader?modules!./styles.css';
     * 使用 -! 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders
     * 
     *  loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。应该一个处理
     * 
     *   /**
            * @param {string|Buffer} content 源文件的内容
            * @param {object} [map] 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
            * @param {any} [meta] meta 数据，可以是任何内容
            */ 
    // 
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