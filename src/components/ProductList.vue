<template>
  <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
    <div class="row mb-3 align-items-center" v-for="(item, index) in showList" :key="item.id" :data-index="index">
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add-item', item)">
          <font-awesome-icon :icon="['fas', 'cart-plus']" style="font-size: 28"></font-awesome-icon>
        </button>
      </div>
      <div class="col-sm-4">
        <img :src="item.image" :alt="item.name" class="img-fluid d-block" />
      </div>
      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from './Price.vue'

export default {
  name: 'product-list',
  props: ['products', 'maximum'],
  computed: {
    showList: function () {
      var max = this.maximum
      return this.products.filter(function (item) {
        return item.price <= max
      })
    }
  },
  methods: {
    before: function (el) {
      el.className = 'd-none'
    },
    enter: function (el) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        el.className =
          'row d-flex mb-3 align-items-center animate__animated animate__fadeInRight'
      }, delay)
    },
    leave: function (el) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        el.className =
          'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight'
      }, delay)
    }
  },
  components: {
    Price
  }
}
</script>
