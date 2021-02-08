<template>
  <nuxt-link to="/">
    <img
      :class="{ hidden: active }"
      src="~assets/img/logo.svg"
      alt="logo"
    >
    <img
      :class="{ hidden: !active }"
      src="~assets/img/logo-active.svg"
      alt="logo"
    >
  </nuxt-link>
</template>

<script>
export default {
  name: "Logo",
  props: {
    active: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
</style>
