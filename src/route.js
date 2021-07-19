// vue
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/dashboard', component: Dashboard },
    ],
})
