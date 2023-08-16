const port = process.env.port || process.env.npm_config_port || 8081

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/',
  // 输出文件目录
  outputDir: './carbon_front_dist',
  productionSourceMap: false,
  devServer: {
    port: port,
    host: '0.0.0.0',
    open: true,
    proxy: {
      "/": {
        target: "http://127.0.0.1",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
}