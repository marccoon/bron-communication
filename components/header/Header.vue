<template>
    <header
        class="transition-all transform
        duration-200 fixed z-20 left-0 right-0 start-animate-position"
        :class="{
        'sm:py-10 py-7 bg-transparent': !active || menuOpen,
        'py-3 bg-body': active && !menuOpen,
      }"
        v-scroll="allScrollHandler"
    >
      <div
          class="container flex items-center justify-between box-border"
      >
        <Logo
            class="z-10 sm:w-auto w-36"
            :active="active"
        />
        <Menu
            :active="menuOpen"
            @close="menuOpen = false"
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
    firstLoad: false
  }),
  mounted() {
    const event = new Event('scroll');
    window.dispatchEvent(event);
  },
  methods: {
    allScrollHandler (evt, el) {
      this.scrollHandlerMounted()
      this.scrollHandler(evt, el)
    },
    scrollHandlerMounted (evt, el) {
      if (!this.firstLoad) return false
      self.scrollY > 50 ? this.active = true : this.active = false
    },
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < 1000 && !el.classList.contains('animate')) {
        el.classList.add('animate')
        setTimeout(() => {
          this.firstLoad = true
        }, 700)
      }
    },
  },
}
</script>
