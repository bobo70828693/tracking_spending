const path = require('path')
const fs = require('fs')
import dotenv from 'dotenv'

try {
    // 根据环境变量加载环境变量文件
    const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
    // 根据获取的key给对应的环境变量赋值
    for (const key in file) {
        process.env[key] = file[key]
    }
} catch (e) {
    console.error(e)
}

module.exports = {
    alias: {
        '/@/': path.resolve(__dirname, './src'),
    },
    // hostname: '0.0.0.0', // 默认是 localhost
    port: Number(process.env.VITE_APP_PORT) || 3000, // 默认是 3000 端口
    open: false, // 浏览器自动打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
    base: './', // 生产环境下的公共路径
    outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
    proxy: {
        // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
        '/api': {
            target: 'http://127.0.0.1:7001', // 后端服务实际地址
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
        },
    },
}
