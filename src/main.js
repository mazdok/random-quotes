import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/tailwind.css'
import VueRouter from 'vue-router'
import { router } from './routes';
import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueRouter)
Vue.use(VueClipboard)

// axios
axios.defaults.baseURL = 'https://quote-garden.herokuapp.com/api/v2/';
Vue.use(VueAxios, axios)

// event bus
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
