<template>
  <div
    class="lg:bg-transparent bg-menu lg:relative top-0 h-screen lg:h-auto fixed right-0 lg:left-0 transition-all duration-750"
    :class="{
      'left-0 sm:pt-36 pt-28': active,
      'left-full ': !active,
    }"
  >
    <div class="menu-container flex lg:items-center lg:flex-row flex-col">
      <menu class="px-0">
        <ul
          class="flex lg:flex-row flex-col text-menu xl:text-xl lg:text-base text-2xl lg:font-normal font-medium"
        >
          <n-link
            tag="li"
            to="/company"
            active-class="lg:text-menu-active"
            class="lg:hover:text-menu-active xl:ml-12 lg:ml-7 cursor-pointer transition-all duration-150"
            @click.native="closeMenu"
          >
            Company
          </n-link>

          <n-link
            tag="li"
            to="/expertise"
            active-class="lg:text-menu-active"
            class="lg:hover:text-menu-active xl:ml-12 lg:ml-7 lg:mt-0 mt-5 cursor-pointer transition-all duration-150"
            @click.native="closeMenu"
          >
            Expertise
          </n-link>

          <n-link
            tag="li"
            to="/our-works"
            active-class="lg:text-menu-active"
            class="lg:hover:text-menu-active xl:ml-12 lg:ml-7 lg:mt-0 mt-5 cursor-pointer transition-all duration-150"
            @click.native="closeMenu"
          >
            Our Works
          </n-link>

          <n-link
            tag="li"
            to="/contact"
            active-class="lg:text-menu-active"
            class="lg:hover:text-menu-active xl:ml-12 lg:ml-7 lg:mt-0 mt-5 cursor-pointer transition-all duration-150"
            @click.native="closeMenu"
          >
            Contact
          </n-link>
        </ul>
      </menu>

      <a
        href="tel: +(60)12 977 7739"
        class="w-max lg:bg-btn bg-btn-light lg:text-btn text-btn-light text-xl py-1.5 xl:px-16 px-10 xl:ml-24 lg:ml-7 lg:mt-0 mt-10 w-auto transition-all duration-150 transform hover:scale-105 active:bg-btn-focus"
      >
        Call us
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    active() {
      if (this.active) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    },
  },
}
</script>
