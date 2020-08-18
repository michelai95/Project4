import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'


// export default [
//     {path: '/', component: App},
//     {path: '/search', component: Result}
// ]
const routes = [
    {
    path: '/',
    name: 'Index',
    component: Home
    },
    {
    path: '/search',
    name: 'Search',
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_CLIENT_URL,
    routes
})

export default router

// new Vue({
//     el: '#app',
//     data: {
//         currentRoute: window.location.pathname
//     },
//     computed: {
//         ViewComponent() {
//             return routes[this.currentRoute] || NotFound
//         }
//     },
//     render (h) {return h(this.ViewComponent)}
// })