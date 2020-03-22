const webpack = require("webpack")
module.exports = {
    devServer: {
        host: "localhost",
        port: "8080",
        open: true,
        proxy: {
            "/api": {
                target: "https://x.dscmall.cn/api/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jQuery',
                $: 'jQuery'
            })
        ]
    }
}