import Vue from "vue"

import App from "./App.vue"

import VueRouter from "vue-router"

//使用Vue.use安装 VueRouter插件
Vue.use(VueRouter);

import router from "./routes/router.js"

var vm = new Vue({
    el: "#app",
    render(createElement){
        return createElement(App);
    },
    router
})