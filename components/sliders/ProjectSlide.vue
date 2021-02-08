<template>
  <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 flex flex-wrap">
    <div class="xl:w-full lg:w-6/12 sm:w-5/12 w-4/5 xl:pr-0 lg:pr-10 sm:pr-7 hover:cursor-pointer">
      <img
          :src="img"
          class="w-full "
          alt=""
      >
    </div>

    <div class="flex flex-wrap xl:w-full sm:w-1/2 w-full pt-5 min-h-full">
      <div
          class="xl:w-216 lg:w-144 sm:w-96 transform xl:-translate-x-48
           lg:-translate-x-28 sm:-translate-x-20 xl:mb-16 lg:mb-10 mb-5 sm:mt-0 mt-2.5"
      >
        <div class="flex items-center xl:mb-3 mb-2.5">
          <span class="uppercase xl:text-xl lg:text-base text-xs">portfolio category</span>
          <img src="~assets/img/btn-icon.svg" class="lg:w-auto w-7 lg:ml-5 ml-4">
        </div>
        <h3
            v-html="title"
            class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium"
        >
        </h3>
      </div>

      <p
          v-html="text"
          class="font-light xl:text-2xl lg:text-xl sm:text-base text-md leading-158"
      ></p>

      <Button
          :btn="btn"
          :link="link"
          class="w-full mt-5 self-end"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {Button},
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
