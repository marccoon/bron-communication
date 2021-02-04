<template>
  <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 flex flex-wrap">
    <div class="xl:w-full lg:w-6/12 sm:w-5/12 w-4/5 xl:pr-0 lg:pr-10 sm:pr-7">
      <img
          :src="img"
          class="w-full "
          alt="">
    </div>


    <div class="flex flex-col justify-center xl:w-full sm:w-1/2 w-full sm:mt-0 mt-2.5">

      <div class="transform xl:-translate-x-48 lg:-translate-x-28 sm:-translate-x-20 xl:pt-0 lg:pt-12 sm:pt-10
      xl:mb-16 lg:mb-10 sm:mb-5 mb-2.5 sm:mt-0">
        <h3
            v-html="title"
            class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium"
        >
        </h3>
      </div>
        <p
            v-html="text"
            class="font-light xl:w-3/5 lg:w-3/4 sm:w-5/6 xl:text-2xl lg:text-xl sm:text-base text-xs leading-normal"
        ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSlide",
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
  },
}
</script>

<style scoped>

</style>