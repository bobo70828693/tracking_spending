import { defineConfig, loadEnv } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'
export default ({ mode }) => {
    process.env = loadEnv(mode, process.cwd())
    return defineConfig({
        plugins: [vue()],
        server: {
            port: process.env.VITE_APP_PORT,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '/src'),
            },
        },
    })
}
