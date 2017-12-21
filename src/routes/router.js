import VueRouter from "vue-router"
import index from "../components/index.vue"
import list from "../components/list.vue"


export default new VueRouter({
    routes: [
        {
            path: "/index",
            component: index
        },
        {
            path: "/list",
            component: list
        }
    ]
})

