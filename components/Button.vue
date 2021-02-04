<template>
  <div class="">
    <n-link :to="link" v-if="link" tag="button" class="bg-btn w-full flex justify-center items-center text-btn
           xl:text-4xl lg:text-2xl text-xl xl:py-6 lg:py-2.5 sm:py-3.5 py-3 px-4 transition-all duration-150">
      {{btn}}
      <img src="~assets/img/btn-icon.svg" class="lg:ml-5 ml-3 lg:w-auto w-6">
    </n-link>
    <button v-else  class="bg-btn w-full flex justify-center items-center text-btn
            xl:text-4xl lg:text-2xl text-xl xl:py-6 lg:py-2.5 sm:py-3.5 py-3  px-4 transition-all duration-150" >
      {{btn}}
      <img src="~assets/img/btn-icon.svg" class="lg:ml-5 ml-3 lg:w-auto w-6">
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
      required: false,
      default: false
    },
  }
}
</script>

<style scoped>

</style>