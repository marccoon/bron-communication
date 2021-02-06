<template>
  <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 flex flex-wrap">
    <div class="xl:w-full lg:w-6/12 sm:w-5/12 w-4/5 xl:pr-0 lg:pr-10 sm:pr-7 hover:cursor-pointer">
      <img
          :src="img"
          class="w-full "
          alt="">
    </div>


    <div class="flex flex-col xl:w-full sm:w-1/2 w-full lg:justify-end flex-start">

      <div class="xl:w-216 lg:w-144 sm:w-96 transform xl:-translate-x-48 lg:-translate-x-28 sm:-translate-x-20 xl:mb-16 lg:mb-10 mb-5 sm:mt-0 mt-2.5">
        <div class="flex items-center xl:mb-7 mb-2.5">
          <span class="uppercase xl:text-xl lg:text-base text-xs">portfolio category</span>
          <img src="~assets/img/btn-icon.svg" class="lg:w-auto w-7 lg:ml-5 ml-4">
        </div>
        <h3
            v-html="title"
            class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium"
        >
        </h3>
      </div>
      <div
          class="flex flex-col justify-between xl:h-88 lg:h-60 sm:h-48 xl:w-3/5 lg:w-3/4 sm:w-5/6"
      >
        <p
            v-html="text"
            class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
        ></p>
        <Button
            :btn="btn"
            :link="link"
            class="max-w-xs sm:max-w-full sm:mt-0 mt-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSlide",
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
    btn: {
      type: String,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: false
    },

  },
}
</script>

<style scoped>

</style>