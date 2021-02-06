<template>
  <div class="">
    <header class="bg-transparent fixed z-20 left-0 right-0 sm:pt-10 pt-7 ">
      <div class="container flex items-center justify-between">
        <Logo
            class="z-10 sm:w-auto w-36"
        />
        <Menu
            :active="menuOpen"
            @closeMenu="menuOpen = false"
        />
        <div @click="menuOpen = !menuOpen"
             class="lg:hidden w-16 h-10 flex justify-end items-center"
        >
          <button v-if="!menuOpen">
            <img src="~assets/img/menu.svg" class="">
          </button>
          <button v-else class="z-50 relative">
            <img src="~assets/img/menu-close.svg" class="">
          </button>
        </div>

      </div>
    </header>

  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Menu from "~/components/header/Menu";
export default {
    name: "Header",
    components: {Logo},
  data: () => ({
    menuOpen: false
  }),
  watch: {
    menuOpen () {
      console.log(this.menuOpen)
    }
  },
}
</script>

<style scoped>
</style>