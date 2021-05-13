<template>
  <nav-bar></nav-bar>
  <dash-board></dash-board>
  <h3 class="text">Test</h3>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import DashBoard from './components/DashBoard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar,
    DashBoard
  }
}
</script>
