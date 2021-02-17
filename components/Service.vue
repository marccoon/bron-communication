<template>
  <div>
    <div
        v-scroll="scrollHandler"
        class="flex sm:items-center items-start sm:flex-row
         start-animate-position flex-col"
    >
      <img
          :src="img"
          alt=""
          class="sm:mr-10 sm:ml-0 mx-auto"
      >
      <h3
          class="text-title-color title-block sm:mt-0 mt-5"
      >{{ title }}</h3>
    </div>
    <p
        v-html="text"
        v-scroll="scrollHandler"
        class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-8 lg:mt-5 sm:mt-5 mt-2.5
                  xl:leading-158 lg:leading-158 sm:leading-158 leading-158 start-animate-position"
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
