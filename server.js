const express = require('express');
const webpack = require('webpack');
//webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const router = express.Router();
const config = require('./webpack.config.js');
const compiler = webpack(config);

router.get('/', (req, res) => {
  res.send('维基主页');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(router)
// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});