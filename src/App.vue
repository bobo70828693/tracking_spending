<template>
    <nav-bar></nav-bar>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
import Chart from 'chart.js'
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar,
    },
}
</script>
