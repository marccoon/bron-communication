<template>
  <header
      class="transition-all transform
        duration-200 fixed z-20 left-0 right-0"
      :class="{
        'sm:py-10 py-7 bg-transparent': !active || menuOpen,
        'py-3 bg-body': active && !menuOpen,
      }"
      v-scroll="scrollHandler"
  >
    <div
        ref="header"
        class="container flex items-center justify-between start-animate-position"
    >
      <Logo
          class="z-10 sm:w-auto w-36"
          :active="active"
      />
      <Menu
          :active="menuOpen"
          @close="menuOpen = false"
          @openModal="modal = true"
      />
      <div @click="menuOpen = !menuOpen"
           class="lg:hidden w-16 h-10 flex justify-end items-center"
      >
        <button v-if="!menuOpen">
          <img alt="whopper" src="~assets/img/menu.svg">
        </button>
        <button v-else class="z-50 relative">
          <img alt="cross" src="~assets/img/menu-close.svg">
        </button>
      </div>
    </div>

    <Form
      @close="modal = false"
    />
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import Menu from "@/components/header/Menu";

export default {
  name: "Header",
  components: {Logo, Menu},
  data: () => ({
    menuOpen: false,
    active: false,
  }),
  mounted () {
    this.$refs.header.classList.add('animate')
  },
  methods: {
    scrollHandler (evt, el) {
      self.scrollY > 50 ? this.active = true : this.active = false
    }
  }
}
</script>
