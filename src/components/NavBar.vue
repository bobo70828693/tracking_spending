<template>
    <nav id="wrapper">
        <div class="logo">
            <h3>Huang</h3>
        </div>
        <div class="menu" :style="{ marginRight: maringRight }" @click="triggerNav()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <div class="side-bar" :style="{ width: sideBarWidth }">
        <!-- <a href="javascript:void(0)" class="close-btn" @click="triggerNav()">&times;</a> -->
        <a href="">Login</a>
        <a href="">Account</a>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            active: false,
            sideBarWidth: '0',
            maringRight: '50px',
        }
    },
    methods: {
        triggerNav() {
            if (this.active == false) {
                this.sideBarWidth = '150px'
                this.maringRight = '150px'
                this.active = true
            } else {
                this.sideBarWidth = '0px'
                this.maringRight = '50px'
                this.active = false
            }
        },
    },
}
</script>
