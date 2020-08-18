// const NotFound = { template: `<p>Page not found</p>` }
// const Home = { template: `<p>Home Page<p>` }
// const About = { template: `<p>About Page</p>` }

import App from './App'
import Result from './components/Result'

export default [
    {path: '/', component: App},
    {path: '/search', component: Result}
]
// const routes = {
//     '/': 'App',
//     '/Search': 'Search'
// }

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