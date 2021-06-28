import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default ({ mode }) => {
    process.env = loadEnv(mode, process.cwd())
    return defineConfig({
        plugins: [vue()],
        server: {
            port: process.env.VITE_APP_PORT,
        },
    })
}
