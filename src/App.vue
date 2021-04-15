<template>
  <div id="app" class="container mt-5">
    <router-view :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" :maximum.sync="maximum" :products="products" :sliderStatus="sliderStatus" @toggle="toggleSliderStatus" @add="addItem" @delete="deleteItem"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// // import Price from './components/Price.vue'
// import Navbar from './components/Navbar.vue'
// import ProductList from './components/ProductList.vue'
// import PriceSlider from './components/PriceSlider.vue'
// import Product from './components/Product.vue'

export default {
  name: 'App',
  data: function () {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: false
    }
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus
    },
    addItem: function (product) {
      let productIndex
      var productExist = this.cart.filter(function (item, index) {
        console.log(item.product.id === product.id)
        if (item.product.id === product.id) {
          productIndex = index
          return true
        } else {
          return false
        }
      })

      if (productExist.length) {
        this.cart[productIndex].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem: function (index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--
      } else {
        this.cart.splice(index, 1)
      }
    }
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then((response) => response.json())
      .then((data) => {
        this.products = data
      })
  },
  computed: {
    cartTotal: function () {
      let sum = 0
      for (const key in this.cart) {
        sum = sum + (this.cart[key].product.price * this.cart[key].qty)
      }
      return sum
    },
    cartQty: function () {
      let qty = 0
      for (const key in this.cart) {
        qty = qty + this.cart[key].qty
      }
      return qty
    }
  }
}
</script>
