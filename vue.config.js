module.exports = {
    devServer: {
        // 设置代理
        // proxy:'http://localhost:90'
        proxy: {
            '/api': {
                target: 'http://localhost:9001',
                changeOrigin: true,
                ws: true,
            },
            '/douban': {
                target: 'https://douban.uiee.com',
                changeOrigin: true,
                pathRewrite: {// 路径替换
                    '^/douban': '',
                }
            },
        }
    }
}