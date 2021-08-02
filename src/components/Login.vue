<template>
    <div class="wrapper login">
        <div class="login-box">
            <h2>Login</h2>
            <form action="">
                <div class="user-box">
                    <input type="text" name="user" required="" v-model="user" id="user" />
                    <label for="user">User</label>
                </div>
                <div class="user-box">
                    <input type="password" name="password" required="" v-model="password" id="password" />
                    <label for="password">Password</label>
                </div>
                <a href="#" @click="onSubmit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5'
import { rtdb } from '../firebase.js'
export default {
    data() {
        return {
            user: '',
            password: '',
            auth: false,
        }
    },
    computed: {
        checkLogin() {
            if (this.auth) {
                this.$router.push('/dashboard')
            }
        },
    },
    methods: {
        onSubmit() {
            rtdb.ref('users/' + this.user).once('value', (currentValue) => {
                if (currentValue.val().password == md5(this.password)) {
                    this.auth = true
                    this.checkLogin()
                } else {
                    this.auth = false
                    alert('使用者帳號密碼錯誤')
                }
            })
        },
        checkLogin() {
            if (this.auth) {
                this.$router.push('/dashboard')
            }
        },
    },
}
</script>
