import Vue from "vue"
import App from "./App.vue"

import Demo from './demo'

Vue.use(Demo)

var vm = new Vue({
    el: "#app",
    render(createElement){
        return createElement(App);
    }
})