<template>
  <div
    class="grid lg:grid-cols-2 xl:gap-x-10 lg:gap-x-20 sm:gap-y-10 gap-y-5"
    :class="{
      'grid-cols-1': imgFull,
      'sm:grid-cols-2 grid-cols-1 sm:gap-x-10': !imgFull,
    }"
  >
    <div
      v-scroll="scrollHandler"
      class="group overflow-hidden start-animate-position-img"
      :class="{
        'order-2': reverse,
        'order-1': !reverse,
      }"
    >
      <img loading="lazy"
        :src="img"
        alt=""
        class="w-full transform transition duration-700 group-hover:scale-110"
      />
    </div>
    <div
      :class="{
        'order-1': reverse,
        'order-2': !reverse,
        'flex flex-col justify-center': textCenter,
      }"
    >
      <div
        v-scroll="scrollHandler"
        class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs start-animate-position"
        v-html="text"
      ></div>
      <div v-scroll="scrollHandler" class="start-animate-position">
        <n-link
          v-if="link"
          :to="link"
          class="text-link underline xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-5 lg:mt-4 sm:mt-5 mt-2.5"
        >
          <button
            class="inline-block duration-700 transform hover:scale-110 transition-all mt-5"
          >
            {{ linkName }}
          </button>
        </n-link>
        <button
          v-else
          class="text-link underline transition-all duration-700 hover:scale-110 xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-5 lg:mt-4 sm:mt-5 mt-2.5"
        >
          {{ linkName }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextImg',
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    linkName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    imgFull: {
      type: Boolean,
      default: false,
    },
    textCenter: {
      type: Boolean,
      default: false,
    },
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
