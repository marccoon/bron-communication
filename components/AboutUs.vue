<template>
  <div class="border border-red-200 xl:mt-28 sm:mt-16 mt-10 xl:grid xl:grid-cols-2 xl:gap-x-10
              flex justify-center sm:flex-row flex-col">
    <div
        class="xl:w-full w-1/3 sm:mx-0 mx-auto "
         :class="{
          'sm:order-2 lg:pl-16 sm:pl-12 xl:pl-0' : reverse,
          'sm:order-1 lg:pr-16 sm:pr-12 xl:pr-0' : !reverse,
        }"
    >
      <img
          :src="img"
          alt=""
          class="xl:mx-auto"
      >
    </div>
    <div
        class="xl:w-full sm:w-2/3 flex flex-col justify-center"
        :class="{
          'sm:order-1' : reverse,
          'sm:order-2' : !reverse,
        }"
    >
<!--      class="flex flex-col justify-center lg:col-start-2 lg:col-end-4 xl:col-start-2 xl:col-end-3"-->
      <h3 class="text-title-color title-block sm:mt-0 mt-5">{{title}}</h3>
      <p
          v-html="text"
          class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs sm:mt-3 mt-2.5"
      ></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutUs",
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
    reverse: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>