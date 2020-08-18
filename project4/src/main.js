import Vue from 'vue'
import App from './App.vue'
require('dotenv').config()
// import cors from 'cors'

Vue.config.productionTip = false


// Vue.use(cors({
//   origin: process.env.VUE_APP_URL,
//   optionSuccessStatus: 200
// }))
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('search', {
  template:`<input id="searchBox" type="text" :ingredient="ingredient" v-model="search" placeholder="search for ingredients here" />`,
  data() {
    return {
      search: ""
    }
  }
})
