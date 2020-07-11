import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

import Home from "../pages/home.vue"
import Follow from "../pages/follow.vue"
import User from "../pages/user.vue"
import Login from "../pages/login.vue"
import Reg from "../pages/reg.vue"
import Error from "../pages/Error.vue"
import Column from "../pages/column.vue"
import Detail from "../pages/detail.vue"

let routes = [
    { path: "/home", component: Home },
    { path: "/follow", component: Follow },
    { path: "/user", component: User },
    { path: "/login", component: Login },
    { path: "/reg", component: Reg },
    { path: "/column", component: Column },
    { path: '/detail/:_id', component: Detail, name: "detail" },
    { path:'/' , redirect:'/home'},
    { path:'*' , component:Error}
]
let router = new VueRouter({
    routes,
    mode: 'hash'
})
export default router;