<template>
    <transition name="custom" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
        <div v-if="sliderStatus">
            <div class="align-items-center" :class="sliderState">
                <label for="" class="font-weight-bold mr-2">Max</label>
                <input type="number" class="form-control mx-2" style="width: 100px; text-align: center" v-model="maxAmount" @change="$emit('update:maximum', maxAmount)">
                <input type="range" class="custom-range" min="0" max="200" v-model="maxAmount" @change="$emit('update:maximum', maxAmount)">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'price-slider',
  data: function () {
    return {
      maxAmount: 50
    }
  },
  props: ['sliderStatus', 'maximum'],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? 'd-flex' : 'd-none'
    }
  }
}
</script>

<style>

</style>
