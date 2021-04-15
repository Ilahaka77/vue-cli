<template>
    <div>
        <h1>IDShop</h1>
        <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle-slide="toggleSlider" @delete-item="deleteItem"></navbar>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo incidunt
        dolore repellat illum consequatur eaque optio possimus, reiciendis
        explicabo rem a omnis porro officiis ipsa. Quaerat velit architecto eius
        provident.
        </p>
        <!-- <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
        <price :value="4.23"></price> -->
        <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
        <product-list :products="products" :maximum="maximum" @add-item="addItem"></product-list>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ProductList from './ProductList.vue'
import PriceSlider from './PriceSlider.vue'

export default {
  name: 'product',
  props: ['maximum', 'products', 'cart', 'sliderStatus', 'cartQty', 'cartTotal', 'sliderState'],
  components: {
    Navbar,
    ProductList,
    PriceSlider
  },
  methods: {
    toggleSlider: function () {
      this.$emit('toggle')
    },
    addItem: function (item) {
      this.$emit('add', item)
    },
    deleteItem: function (index) {
      this.$emit('delete', index)
    }
  }
}
</script>
