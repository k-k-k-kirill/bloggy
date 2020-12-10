import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'

//Vuex
import {store} from './store/store'

// Router
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
