<template>
  <div class="xl:mx-0 mx-auto w-full">
    <div class="w-full">
      <div
          class=" group overflow-hidden start-animate-position-img"
          v-scroll="scrollHandler"
      >
        <img loading="lazy"
            :src="img"
            class="w-full object-cover transform transition duration-700 group-hover:scale-110"
            alt=""
        >
      </div>

      <h4
          class="title-block text-title-color lg:mt-5 mt-2.5 start-animate-position"
          v-scroll="scrollHandler"
      >
        {{name}}
      </h4>
      <div
          class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs mt-2.5 start-animate-position"
          v-scroll="scrollHandler"
      >
        {{position}}
      </div>
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

<style scoped>

</style>
