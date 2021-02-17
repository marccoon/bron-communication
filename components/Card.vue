<template>
  <div
       :class="{
            'grid sm:grid-cols-2 xl:gap-x-10 lg:gap-x-0 sm:gap-x-10': widthFull,
            'lg:flex grid sm:grid-cols-2 grid-cols-1 sm:gap-x-10 gap-x-0': !widthFull,
            'lg:justify-start': !textEnd,
            'lg:justify-end': textEnd,
         }"
  >
    <div
         :class="{
            'w-full xl:pr-0 lg:pr-10': widthFull,
            'lg:w-1/2 xl:pr-5': !widthFull
         }">
      <img
          :src="img"
          class="w-full start-animate-position-img"
          alt=""
          v-scroll="scrollHandler"
      >
    </div>

    <div class="flex flex-col "
         :class="{
                    'xl:justify-center flex-start': !btn,
                    'lg:justify-end flex-start': btn,
                    'xl:py-10 lg:pt-16 sm:pt-10': !subtitle,
                    'xl:w-1/3 lg:w-5/12 xl:pl-5 lg:pl-7': !widthFull,
                    'w-full': widthFull
                  }">
      <div class="start-animate-position" v-scroll="scrollHandler">
        <div
            class=" transform xl:-translate-x-48
           lg:-translate-x-40 sm:-translate-x-20
           xl:mb-16 lg:mb-10 mb-5 sm:mt-0 mt-2.5 xl:w-216 lg:w-144 sm:w-96"
        >
          <div
              v-if="subtitle"
              class="flex items-center xl:mb-7 mb-2.5"
          >
            <span class="uppercase xl:text-xl lg:text-base text-xs">portfolio category</span>
            <img src="~assets/img/btn-icon.svg" class="sm:w-auto w-5 ml-5">
          </div>
          <h3
              v-html="title"
              class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium"
          >
          </h3>
        </div>
      </div>

      <div
          class="start-animate-position"
          :class="{
          'flex flex-col justify-between xl:h-88 lg:h-60 ': btn
        }"
          v-scroll="scrollHandler"
      >
        <p
            v-html="text"
            class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
        ></p>
        <Button
            :btn="btn"
            :link="link"
            class="max-w-xs sm:max-w-full mt-5"
            v-if="btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {Button},
  name: "Card",
  props: {
    img: {
      type: String,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    subtitle: {
      type: Boolean,
      required: false,
      default: false
    },
    btn: {
      type: String,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: false
    },
    widthFull: {
      type: Boolean,
      required: false,
      default: false
    },
    textEnd: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  methods: {
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  },
  mounted() {
    const event = new Event('scroll');
    window.dispatchEvent(event);
  }
}
</script>
