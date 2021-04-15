import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinus, faShoppingCart, faCartPlus, faDollarSign, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import Product from './components/Product.vue'
import Checkout from './components/Checkout.vue'

library.add(faShoppingCart, faCartPlus, faDollarSign, faTrash, faPlus, faMinus)

Vue.use(VueRouter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Product
    },
    {
      path: '/checkout',
      component: Checkout
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
