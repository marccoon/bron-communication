<template>
  <div class="border border-red-200 ">
    <div class="flex sm:items-center items-start sm:flex-row flex-col">
      <img
          :src="img"
          alt=""
          class="sm:mr-10 sm:ml-0 mx-auto"
      >
      <h3 class="text-title-color title-block sm:mt-0 mt-5">{{title}}</h3>
    </div>
      <p
          v-html="text"
          class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-8 lg:mt-5 sm:mt-5 mt-2.5"
      ></p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    img: {
      type: String,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>