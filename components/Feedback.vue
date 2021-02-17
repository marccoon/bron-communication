<template>
  <div class="text-center start-animate-position" v-scroll="scrollHandler">
    <p class="font-medium lg:text-4xl sm:text-3xl text-2xl">
      We’d love to collaborate with <br>
      aspiring brands and individuals.
    </p>
    <button
        class="font-bold underline xl:text-7xl lg:text-6xl sm:text-4xl text-3xl lg:mt-7 mt-5
             duration-700 transform hover:scale-110 transition-all"
        @click="showModal"
    >
      Let’s talk
    </button>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  methods: {
    showModal() {
      this.$store.commit('modal/modal', true)
    },
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  }
}
</script>
