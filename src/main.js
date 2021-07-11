import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import { firestorePlugin } from 'vuefire'

// css
import 'element-plus/lib/theme-chalk/index.css'
import './index.css'
import './assets/sass/index.scss'
import './assets/sass/navbar.scss'
import './assets/sass/overview.scss'

createApp(App).use(ElementUI).use(firestorePlugin).mount('#app')
