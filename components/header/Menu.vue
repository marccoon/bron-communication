<template>
  <div
    class="lg:bg-transparent bg-menu lg:relative top-0 h-screen lg:h-auto fixed right-0 bottom-0 lg:bottom-auto lg:left-0 transition-all duration-750 overflow-y-auto lg:overflow-visible pb-5 lg:pb-0"
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
          <li class="xl:px-2 xl:ml-10 lg:ml-5 lg:mt-0 mt-5 group">
            <n-link
              to="/company"
              active-class="lg:text-menu-active"
              class="lg:group-hover:text-menu-active cursor-pointer transition-all duration-150"
              @click.native="closeMenu"
            >
              Company
              <div
                v-if="!isMobile"
                class="flex justify-center pointer-events-none"
              >
                <div
                  class="h-0.5 bg-btn rounded-lg transition-all duration-700 group-hover:w-full"
                  :class="{
                    'w-full': $route.name === 'company',
                    'w-0': $route.name !== 'company',
                  }"
                ></div>
              </div>
            </n-link>
          </li>

          <li
            class="group xl:px-2 relative group xl:ml-10 lg:ml-5 lg:mt-0 mt-5 lg:flex items-center"
          >
            <n-link
              to="/expertise"
              class="lg:group-hover:text-menu-active cursor-pointer transition-all duration-150 mr-2"
              :class="{ 'lg:text-menu-active': $route.name === 'expertise' }"
              @click.native="closeMenu"
            >
              Expertise
              <div
                v-if="!isMobile"
                class="flex justify-center pointer-events-none"
              >
                <div
                  class="h-0.5 w-0 bg-btn rounded-lg transition-all duration-700 group-hover:w-full"
                  :class="{
                    'w-full': $route.name === 'expertise',
                    'w-0': $route.name !== 'expertise',
                  }"
                ></div>
              </div>
            </n-link>

            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="hidden lg:block transform transition-all duration-700 group-hover:rotate-180"
            >
              <path
                d="M0 1.28636L8 9L16 1.28636L14.6668 7.85698e-08L8 6.42909L1.33318 7.85698e-08L0 1.28636Z"
                class="group-hover:fill-arrow-active"
                :class="{
                  'fill-white': $route.name !== 'expertise',
                  'fill-arrow-active': $route.name === 'expertise',
                }"
              />
            </svg>

            <div
              class="py-2 pt-3 min-w-full left-0 top-full lg:absolute transition-all duration-700"
              :class="{
                'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto': !isMobile,
              }"
            >
              <ul class="lg:bg-body px-3 lg:p-5">
                <li class="mb-2">
                  <n-link
                    class="whitespace-nowrap lg:hover:text-menu-active cursor-pointer transition-all duration-150"
                    to="/expertise/media-digital"
                    @click.native="closeMenu"
                    >Media & Digital</n-link
                  >
                </li>
                <li class="mb-2">
                  <n-link
                    class="whitespace-nowrap lg:hover:text-menu-active cursor-pointer transition-all duration-150"
                    to="/expertise/video-production"
                    @click.native="closeMenu"
                  >
                    Video Production
                  </n-link>
                </li>
                <li class="mb-2">
                  <n-link
                    class="whitespace-nowrap lg:hover:text-menu-active cursor-pointer transition-all duration-150"
                    to="/expertise/event-management"
                    @click.native="closeMenu"
                  >
                    Event Management
                  </n-link>
                </li>
                <li>
                  <n-link
                    class="whitespace-nowrap lg:hover:text-menu-active cursor-pointer transition-all duration-150"
                    to="/expertise/pr-public-relation"
                    @click.native="closeMenu"
                  >
                    PR (Public Relation)
                  </n-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="group xl:px-2 xl:ml-10 lg:ml-5 lg:mt-0 mt-5">
            <n-link
              to="/our-works"
              active-class="lg:text-menu-active"
              class="lg:group-hover:text-menu-active cursor-pointer transition-all duration-150"
              @click.native="closeMenu"
            >
              Our Works
              <div
                v-if="!isMobile"
                class="flex justify-center pointer-events-none"
              >
                <div
                  class="h-0.5 w-0 bg-btn rounded-lg transition-all duration-700 group-hover:w-full"
                  :class="{
                    'w-full': $route.name === 'our-works',
                    'w-0': $route.name !== 'our-works',
                  }"
                ></div>
              </div>
            </n-link>
          </li>

          <li class="group xl:px-2 xl:ml-10 lg:ml-5 lg:mt-0 mt-5">
            <n-link
              to="/contact"
              active-class="lg:text-menu-active"
              class="lg:group-hover:text-menu-active cursor-pointer transition-all duration-150"
              @click.native="closeMenu"
            >
              Contact
              <div
                v-if="!isMobile"
                class="flex justify-center pointer-events-none"
              >
                <div
                  class="h-0.5 w-0 bg-btn rounded-lg transition-all duration-700 group-hover:w-full"
                  :class="{
                    'w-full': $route.name === 'contact',
                    'w-0': $route.name !== 'contact',
                  }"
                ></div>
              </div>
            </n-link>
          </li>
        </ul>
      </menu>

      <a
        href="tel: +(60)12 977 7739"
        class="w-max lg:bg-btn bg-btn-light lg:text-btn text-btn-light text-xl py-1 xl:px-8 px-5 xl:ml-20 lg:ml-7 lg:mt-0 mt-10 w-auto transition-all duration-150 transform hover:scale-105 active:bg-btn-focus"
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
  data() {
    return {
      isMobile: false,
    }
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
  mounted() {
    this.isMobile = self.innerWidth <= 1024
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    },
    handleResize() {
      this.isMobile = self.innerWidth <= 1024
    },
  },
}
</script>
