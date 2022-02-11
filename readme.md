## webpack基础配置学习


ProvidePlugin
自动加载模块，而不必到处 import 或 require

```
new webpack.ProvidePlugin({
  'window.jQuery': 'jquery'
})
```
