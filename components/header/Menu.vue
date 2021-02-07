<template>
    <div class=" lg:bg-transparent bg-menu lg:relative top-0 h-screen lg:h-auto absolute right-0 lg:left-0 transition-all duration-750"
         :class="{
        'left-0  sm:pt-36 pt-28': active,
        'left-full ': !active,
    }"
    >
      <div class="menu-container flex lg:items-center lg:flex-row flex-col">
        <menu
            class="px-0"
        >
          <ul class="flex lg:flex-row flex-col text-menu xl:text-xl lg:text-base text-2xl lg:font-normal font-medium">
            <li class="xl:ml-12 lg:ml-7">
              <nuxt-link to="/company" class="hover:font-medium focus:text-menuActive">
                Company
              </nuxt-link>
            </li>
            <li class="xl:ml-12 lg:ml-7 lg:mt-0 mt-5">
              <nuxt-link to="/expertise" class="hover:font-medium focus:text-menuActive">
                Expertise
              </nuxt-link>
            </li>
            <li class="xl:ml-12 lg:ml-7 lg:mt-0 mt-5">
              <nuxt-link to="/our-works" class="hover:font-medium focus:text-menuActive">
                Our Works
              </nuxt-link>
            </li>
            <li class="xl:ml-12 lg:ml-7 lg:mt-0 mt-5">
              <nuxt-link to="/contact" class="hover:font-medium focus:text-menuActive">
                Contact
              </nuxt-link>
            </li>
          </ul>

        </menu>
        <button class="w-max lg:bg-btn bg-btnLight lg:text-btn text-btnLight text-xl py-1.5 xl:px-16 px-10 xl:ml-24 lg:ml-7 lg:mt-0 mt-10 w-auto transition-all duration-150" >
          Call us
        </button>
      </div>

    </div>

</template>

<script>
export default {
  name: "Menu",
  props: {
    active: {
      type: Boolean,
      required: true
    },
  },

}
</script>

<style scoped>
</style>