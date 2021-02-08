<template>
  <div class="text-center">
    <p class="font-medium lg:text-4xl sm:text-3xl text-2xl">
      We’d love to collaborate with <br>
      aspiring brands and individuals. </p>
    <button
      class="font-bold underline xl:text-7xl lg:text-6xl sm:text-4xl text-3xl lg:mt-7 mt-5"
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
    showModal () {
      this.$store.commit('modal/modal', true)
    }
  }
}
</script>
