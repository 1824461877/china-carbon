const port = process.env.port || process.env.npm_config_port || 9527

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/',
  // 输出文件目录
  outputDir: './dist',
  productionSourceMap: false,
  devServer: {
    port: port,
    host: '127.0.0.1',
    open: true,
    proxy: {
      "/": {
        target: "http://127.0.0.1:8880",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
}