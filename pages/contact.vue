<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1 v-scroll="scrollHandler" class="main-title start-animate-position">
          Contact
        </h1>
      </div>
    </div>
    <section
      v-scroll="scrollHandler"
      class="section-padding start-animate-position"
    >
      <div
        class="container xl:flex xl:flex-col xl:flex-wrap xl:justify-between xl:items-baseline xl:h-128"
      >
        <div class="xl:w-1/2 xl:pr-5 xl:order-1">
          <div
            class="xl:text-xl lg:text-base text-xs xl:max-w-lg lg:max-w-none max-w-xs lg:pr-0 sm:pr-10 lg:mt-0 mt-10"
          >
            <a
              href="mailto: hello@broncommunications.com"
              class="block font-normal"
            >
              <span
                class="inline-block duration-700 transform hover:scale-110 transition-all"
              >
                hello@broncommunications.com
              </span>
            </a>
            <a href="tel: +(60)12 977 7739" class="block font-normal">
              <span
                class="inline-block duration-700 transform hover:scale-110 transition-all"
              >
                +(60)12 977 7739
              </span>
            </a>
            <p class="mt-7 font-normal">
              Level 16, 16-06 Plaza Azalea, Persiaran Bandaraya, Seksyen 14,
              Shah Alam, 40000, <br />
              Selangor Darul Ehsan, Malaysia
            </p>
          </div>
          <SocialIcon class="mt-7" />
        </div>
        <div
          class="xl:w-1/2 xl:h-full h-96 xl:pl-5 xl:order-3 xl:mt-0 sm:mt-20 mt-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0796800757403!2d101.51962691525226!3d3.0733897544695634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5281aef0bd31%3A0x4f8ea1d842a147f4!2sFateh%20Group%20Of%20Companies%20(Plaza%20Azalea)!5e0!3m2!1sru!2sby!4v1612817918354!5m2!1sru!2sby"
            width="100%"
            height="100%"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <Feedback class="xl:order-2 xl:mt-0 sm:mt-20 mt-16" />
      </div>
    </section>
  </div>
</template>

<script>
import SocialIcon from '@/components/SocialIcon'
import Feedback from '@/components/Feedback'
import scroll from '~/mixins/scroll'

export default {
  components: { SocialIcon, Feedback },
  mixins: [scroll],
}
</script>
