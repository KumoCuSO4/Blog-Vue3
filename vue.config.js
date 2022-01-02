var path = require("path")

module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('mdLoader')
            .loader(path.join(__dirname,'./src/loader/mdLoader.js'))
            .end()
    },
    publicPath: process.env.NODE_ENV==='production'?'/':'/'
}