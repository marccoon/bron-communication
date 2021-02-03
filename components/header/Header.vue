<template>
  <div class="relative">
    <header class="bg-transparent fixed z-20 left-0 right-0 pt-10">
      <div class="container flex items-center justify-between">
        <Logo />
        <Menu />
        <div class="lg:hidden ">
          <img src="~assets/img/menu.svg" class="">
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
}
</script>

<style scoped>
</style>