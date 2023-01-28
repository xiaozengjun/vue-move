const path = require('path')
const glob = require('glob')
require('babel-polyfill')

// const titles = {
//   home: '这是home标题',
//   index: '这是index标题'
// }

// 获取views文件夹下的文件
// function getEntry (globPath) {
//   const entries = {}
//   // 读取js文件
//   glob.sync(globPath + 'js').forEach(function (entry) {
//     const tmp = entry.split('/').splice(-3)
//     entries[tmp[1]] = {
//       entry,
//       template: './public/index.html',
//       filename: tmp[1] + '.html'
//       // title: titles[tmp[1]]
//     }
//   })
//   return entries
// }


// const htmls = getEntry('./src/mobileMain.js')
// console.log(htmls);
module.exports = {
  pages: {
    index: {
      entry: './src/mobileMain.js',
      template: './index.html',
      filename: "index.html",
      title: 'index',
    },
  },
  publicPath: process.env.NODE_ENV=='development'?'./':'/dist/mobile',
  outputDir: '../../web/dist/mobile', // 打包后的文件夹名称，默认dist
  plugins: [new HtmlWebpackPlugin()],
  css:{

  },
  configureWebpack: config => {
    const { entry } = config
    for (const i in entry) {
      entry[i].unshift('babel-polyfill')
    }
  },
  devServer: {
    open: true,
    hot: true,
    index: './index.html', // 默认启动页面
    host: '0.0.0.0',
    port: 8090,
    proxy:{
      '/dev/*': {
        target:'http://beihexianhua.report',
        changeOrigin:true,
        pathRewrite: {
          '^/dev': ''
        },
      }
    }
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  transpileDependencies: [],
}
