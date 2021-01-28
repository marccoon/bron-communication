<template>
  <div class="">
    <n-link :to="link" v-if="link" tag="button" class="bg-btn w-full flex justify-center items-center text-btn
            text-4xl py-3 px-4 transition-all duration-150">
      {{btn}}
      <img src="~assets/img/btn-icon.svg" class="ml-5"s>
    </n-link>
    <button v-else  class="bg-btn w-full flex justify-center items-center text-btn
            text-4xl py-6 px-4 transition-all duration-150" >
      {{btn}}
      <img src="~assets/img/btn-icon.svg" class="ml-5">
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btn: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
  }
}
</script>

<style scoped>

</style>