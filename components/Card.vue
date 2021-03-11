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
        'lg:w-1/2 xl:pr-5': !widthFull,
      }"
    >
      <div
        v-scroll="scrollHandler"
        class="group overflow-hidden start-animate-position-img"
      >
        <img loading="lazy"
          :src="img"
          class="w-full transform transition duration-700 group-hover:scale-110"
          alt=""
        />
      </div>
    </div>

    <div
      class="flex flex-col"
      :class="{
        'xl:justify-center flex-start': !btn,
        'lg:justify-end flex-start': btn,
        'xl:py-10 lg:pt-16 sm:pt-10': !subtitle,
        'xl:w-1/3 lg:w-5/12 xl:pl-5 lg:pl-7': !widthFull,
        'w-full': widthFull,
      }"
    >
      <div v-scroll="scrollHandler" class="start-animate-position">
        <div
          class="transform xl:-translate-x-48 lg:-translate-x-40 sm:-translate-x-20 xl:mb-16 lg:mb-10 mb-5 sm:mt-0 mt-2.5 xl:w-216 lg:w-144 sm:w-96"
        >
          <div v-if="subtitle" class="flex items-center xl:mb-7 mb-2.5">
            <span class="uppercase xl:text-xl lg:text-base text-xs">
              portfolio category
            </span>
            <img loading="lazy"
              src="~assets/img/btn-icon.svg"
              class="sm:w-auto w-5 ml-5"
              alt=""
            />
          </div>
          <h3 class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium">
            <n-link v-if="link" :to="link">
              {{ title }}
            </n-link>
            <span v-else>
              {{ title }}
            </span>
          </h3>
        </div>
      </div>

      <div
        v-scroll="scrollHandler"
        class="start-animate-position"
        :class="{
          'flex flex-col justify-between xl:h-88 lg:h-60 ': btn,
        }"
      >
        <div
          class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
          v-html="text"
        ></div>
        <Button
          v-if="link && btn"
          :btn="btn"
          :link="link"
          class="max-w-xs sm:max-w-full mt-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import scroll from '~/mixins/scroll'

export default {
  name: 'Card',
  components: { Button },
  mixins: [scroll],
  props: {
    img: {
      type: String,
      required: true,
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
      default: false,
    },
    btn: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    widthFull: {
      type: Boolean,
      default: false,
    },
    textEnd: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
