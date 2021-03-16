<template>
  <div>
    <div
      v-scroll="scrollHandler"
      class="flex sm:items-center items-start sm:flex-row start-animate-position flex-col"
    >
      <img
        loading="lazy"
        :src="'/icons/' + icon + '.png'"
        :alt="icon"
        class="sm:mr-10 sm:ml-0 mx-auto"
      />
      <h3 class="text-title-color title-block sm:mt-0 mt-5">
        {{ title }}

        <div class="flex justify-center">
          <div
            class="h-1 mt-2 w-0 bg-btn rounded-lg transition-all duration-700 group-hover:w-full"
            :class="{
              'w-full': active,
              'w-0': !active,
            }"
          ></div>
        </div>
      </h3>
    </div>
    <div
      v-scroll="scrollHandler"
      class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-8 lg:mt-5 sm:mt-5 mt-2.5 xl:leading-158 lg:leading-158 sm:leading-158 leading-158 start-animate-position"
      v-html="text"
    ></div>

    <div
      v-if="link && link.uri"
      v-scroll="scrollHandler"
      class="start-animate-position"
      @mouseover="active = true"
      @mouseleave="active = false"
    >
      <n-link
        class="group text-link hover:text-link underline xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-5 lg:mt-4 sm:mt-5 mt-2.5 inline-flex items-center"
        :to="link.uri"
      >
        <span
          class="underline inline-block duration-700 transform group-hover:scale-110 transition-all"
        >
          learn more
        </span>

        <img
          loading="lazy"
          class="ml-3 duration-700 transform group-hover:translate-x-5 transition-all group-hover:translate-x-6"
          src="~assets/img/link-arrow.svg"
          alt="arrow"
        />
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    icon: {
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
    link: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    scrollHandler(evt, el) {
      if (
        el.getBoundingClientRect().top < self.innerHeight * 1.1 &&
        !el.classList.contains('animate')
      ) {
        el.classList.add('animate')
      }
    },
  },
}
</script>

<style scoped></style>
