<template>
  <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 flex flex-wrap">
    <div
        class="xl:w-full xl:pr-0 lg:pr-10 sm:pr-7 group overflow-hidden
        start-animate-position-img"
        v-scroll="scrollHandler"
    >
      <img
          :src="img"
          class="w-full transform transition duration-700 group-hover:scale-110"
          alt=""
      >
    </div>

    <div class="flex flex-col justify-center sm:mt-0 mt-2.5">
      <div class="transform xl:-translate-x-48  xl:pt-0 lg:pt-12 sm:pt-10
                  xl:mb-16 lg:mb-10 sm:mb-5 mb-2.5 sm:mt-0">
        <h3
            v-scroll="scrollHandler"
            v-text="title"
            class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium start-animate-position"
        >
        </h3>
      </div>
        <div
            v-html="text"
            v-scroll="scrollHandler"
            class="start-animate-position font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
        ></div>
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
  methods: {
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  }
}
</script>
