module.exports = {
    devServer: {
      proxy: {
        '/users': {
          target: 'http://81.70.51.253:3000',
          ws: true,
          changeOrigin: true
        }
      },
      overlay: {
        warnings: false, //不显示警告
        errors: false	//不显示错误
      }
    },
    lintOnSave:false //关闭eslint检查
  }