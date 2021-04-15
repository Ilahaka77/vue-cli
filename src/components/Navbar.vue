<template>
    <nav class="navbar navbar-light fixed-top">
        <div class="navbar-text ml-auto d-flex">
            <button class="btn btn-sm btn-outline-success" @click="$emit('toggle-slide')">
                <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
            </button>
            <div class="dropdown ml-2" v-if="cart.length > 0">
                <button class="btn btn-success btn-sm dropdown-toggle" id="dropdownCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="badge badge-pill badge-success">{{ cartQty }}</span>
                    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
                    <price :value="Number(cartTotal)"></price>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                    <div v-for="(item, index) in cart" :key="index">
                        <span class="badge badge-pill badge-warning align-text-top">{{ item.qty }}</span>
                        {{ item.product.name }}
                        <b>{{ item.product.price * item.qty | currencyFormat }}</b>
                        <a href="#" class="badge badge-danger text-white" @click="$emit('delete-item', index)">
                            <font-awesome-icon icon="trash"></font-awesome-icon>
                        </a>
                    </div>
                    <router-link class="btn btn-sm btn-outline-info text-dart float-right" to="/checkout">
                    Checkout
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Price from './Price.vue'

export default {
  name: 'navbar',
  components: {
    Price
  },
  props: ['cart', 'cartQty', 'cartTotal'],
  filters: {
    currencyFormat: function (value) {
      return 'Rp ' + Number.parseFloat(value).toFixed(2)
    }
  }
}
</script>
