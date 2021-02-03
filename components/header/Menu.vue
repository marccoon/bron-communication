<template>
    <div class="flex lg:items-center lg:flex-row flex-col lg:relative absolute left-full lg:left-0">
      <menu
          class="px-0"
      >
        <ul class="flex lg:flex-row flex-col text-menu xl:text-xl lg:text-base text-2xl lg:font-normal font-medium">
          <li class="xl:ml-12 lg:ml-7">
            <nuxt-link to="/company">
              Company
            </nuxt-link>
          </li>
          <li class="xl:ml-12 lg:ml-7">
            <nuxt-link to="/expertise">
              Expertise
            </nuxt-link>
          </li>
          <li class="xl:ml-12 lg:ml-7">
            <nuxt-link to="/project">
              Our Works
            </nuxt-link>
          </li>
          <li class="xl:ml-12 lg:ml-7">
            <nuxt-link to="/">
              Contact
            </nuxt-link>
          </li>
        </ul>

      </menu>
      <button class="bg-btn lg:text-xl lg:py-1.5 xl:px-16 lg:px-10 xl:ml-24 lg:ml-7 transition-all duration-150" >
        Call us
      </button>
    </div>

</template>

<script>
// import Button from "~/components/Button";
export default {
  // components: {Button},
  name: "Menu",
  props: {

  },

}
</script>

<style scoped>
</style>