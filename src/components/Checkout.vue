<template>
    <div>
        <h1>Checkout</h1>
        <table class="table table-hover" v-if="cart.length > 0">
            <caption class="text-right h3">
                <b>Total:</b>
                <price class="d-block text-success font-weight-light" :value="Number(cartTotal)"></price>
            </caption>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col" class="text-center">Qty</th>
                    <th scope="col" class="text-right">Price</th>
                    <th scope="col" class="text-right">Sub-Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="item.product.id">
                    <td class="text-center">
                        <div class="btn-group">
                            <button class="btn btn-info" @click="$emit('add', item.product)">
                                <font-awesome-icon icon="plus"></font-awesome-icon>
                            </button>
                            <button class="btn btn-outline-info" @click="$emit('delete', index)">
                                <font-awesome-icon icon="minus"></font-awesome-icon>
                            </button>
                        </div>
                    </td>
                    <th scope="row">{{ item.product.name }}</th>
                    <th class="text-center">{{ item.qty }}</th>
                    <th class="text-right">{{ Number(item.product.price) }}</th>
                    <th class="text-right">{{ Number(item.product.price * item.qty) }}</th>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-sm btn-outline-info text-dart" to="/">
        Back to Shop
        </router-link>
    </div>
</template>

<script>
import Price from './Price.vue'

export default {
  name: 'checkout',
  props: ['cart', 'cartTotal'],
  components: {
    Price
  }
}
</script>
