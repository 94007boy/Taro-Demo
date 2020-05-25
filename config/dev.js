
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST:'"https://api.apiopen.top"'
  },
  weapp: {},
  h5: {
    devServer: {
      // proxy: {
      //   '/touch':{
      //     target: 'https://api.apiopen.top',//后台接口地址
      //     changeOrigin: true
      //   }
      // }
    }
  }
}
