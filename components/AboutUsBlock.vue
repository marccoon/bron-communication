<template>
  <div
    v-scroll="scrollHandler"
    class="start-animate-position xl:grid xl:grid-cols-2 xl:gap-x-10 flex justify-center sm:flex-row flex-col"
  >
    <div
      class="xl:w-full w-1/3 sm:mx-0 mx-auto"
      :class="{
        'sm:order-2 lg:pl-16 sm:pl-12 xl:pl-0': reverse,
        'sm:order-1 lg:pr-16 sm:pr-12 xl:pr-0': !reverse,
      }"
    >
      <img loading="lazy" :src="img" alt="" class="xl:mx-auto" />
    </div>
    <div
      class="xl:w-full sm:w-2/3 flex flex-col justify-center"
      :class="{
        'sm:order-1': reverse,
        'sm:order-2': !reverse,
      }"
    >
      <h3 class="text-title-color title-block sm:mt-0 mt-5">{{ title }}</h3>
      <div
        class="font-light xl:text-2xl lg:text-xl sm:text-base xl:leading-158 lg:leading-158 sm:leading-158 leading-158 text-xs sm:mt-3 mt-2.5"
        v-html="text"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsBlock',
  props: {
    img: {
      type: String,
      required: true,
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
      default: false,
    },
  },
  methods: {
    scrollHandler(evt, el) {
      if (
        el.getBoundingClientRect().top < self.innerHeight * 1.1 &&
        !el.classList.contains('animate')
      ) {
        el.classList.add('animate')
      }
    },
  },
}
</script>

<style scoped></style>
