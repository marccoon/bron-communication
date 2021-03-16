<template>
  <div
    ref="footer"
    v-scroll="scrollHandler"
    class="bg-footer start-animate-position lg:py-20 sm:py-16 pt-10 pb-12"
  >
    <div
      class="container flex justify-between items-start lg:flex-row flex-col-reverse"
    >
      <div
        class="lg:text-xl sm:text-base text-xs lg:max-w-sm lg:w-auto sm:w-3/5 lg:mt-0 mt-10"
      >
        <div class="">
          <a href="mailto: hello@broncommunications.com" class="block">
            <span
              class="inline-block duration-700 transform hover:scale-110 transition-all"
            >
              hello@broncommunications.com
            </span>
          </a>
          <a href="tel: +(60)12 977 7739" class="block">
            <span
              class="inline-block duration-700 transform hover:scale-110 transition-all"
            >
              +(60)12 977 7739
            </span>
          </a>
        </div>

        <div class="mt-10">
          <p>
            Level 16, 16-06 Plaza Azalea, Persiaran Bandaraya, Seksyen 14, Shah
            Alam, 40000, <br />
            Selangor Darul Ehsan, Malaysia
          </p>
          <div class="mt-2">
            <n-link
              to="/contact"
              class="font-medium underline duration-700 transform hover:scale-110 transition-all"
            >
              <span
                class="inline-block duration-700 transform hover:scale-110 transition-all"
              >
                View on map
              </span>
            </n-link>
          </div>
        </div>
        <div class="text-xs mt-10">
          &copy; Bron Communication Sdn Bhd (1304961-T)
        </div>
      </div>
      <SocialIcon />
    </div>
    <div class="flex justify-center mt-2 container font-normal text-xl">
      <span>
        <a class="" target="_blank" href="https://marccoon.com/">
          Created by Marccoon
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import SocialIcon from '@/components/SocialIcon'
export default {
  name: 'Footer',
  components: { SocialIcon },
  methods: {
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top <= self.innerHeight + 100) {
        el.classList.add('animate')
      }
    },
  },
}
</script>
