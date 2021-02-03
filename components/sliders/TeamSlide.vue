<template>
  <div class="xl:w-3/4 w-full xl:mx-0 mx-auto ">
    <div class="xl:w-full lg:w-3/4 sm:w-4/5 w-5/6">
      <img
          :src="img"
          class="w-full object-cover"
          alt="">
      <h4 class="title-block text-title-color lg:mt-5 mt-2.5">{{name}}</h4>
      <div class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs mt-2.5">{{position}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "TeamSlide",
  props: {
    img: {
      type: String,
      required: true,
      default: false
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>