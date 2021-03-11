<template>
  <header
    ref="header"
    v-scroll="scrollHandler"
    class="fixed transform transition-all delay-200 duration-700 z-20 left-0 right-0"
    :class="{
      'sm:py-10 py-7 bg-transparent': !active || menuOpen,
      'py-3 bg-body': active && !menuOpen,
      'start-animate-position': firstLoading,
    }"
  >
    <div class="container flex items-center justify-between box-border">
      <Logo class="z-10 sm:w-auto w-36" :active="active" />
      <Menu :active="menuOpen" @close="menuOpen = false" />
      <div
        class="lg:hidden w-16 h-10 flex justify-end items-center"
        @click="menuOpen = !menuOpen"
      >
        <button v-if="!menuOpen">
          <img loading="lazy" alt="whopper" src="~assets/img/menu.svg" />
        </button>
        <button v-else class="z-50 relative">
          <img loading="lazy" alt="cross" src="~assets/img/menu-close.svg" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Menu from '@/components/header/Menu'

export default {
  name: 'Header',
  components: { Logo, Menu },
  data: () => ({
    menuOpen: false,
    active: false,
    firstLoading: true,
  }),
  methods: {
    scrollHandler(evt, el) {
      if (el.classList.contains('start-animate-position')) {
        this.firstLoading = false
        return false
      }
      self.scrollY > 50 ? (this.active = true) : (this.active = false)
    },
  },
}
</script>
