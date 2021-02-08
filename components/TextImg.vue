<template>
  <div class="grid lg:grid-cols-2 xl:gap-x-10 lg:gap-x-20 sm:gap-y-10 gap-y-5"
       :class="{
          'grid-cols-1': imgFull,
          'sm:grid-cols-2 grid-cols-1 sm:gap-x-10': !imgFull,
        }"
  >
    <img
        :src="img"
        alt=""
        class="w-full"
        :class="{
          'order-2': reverse,
          'order-1': !reverse,
        }"
    >
    <div
        :class="{
          'order-1': reverse,
          'order-2': !reverse,
          'flex flex-col justify-center': textCenter
       }"
    >
      <p
          class="leading-normal font-light xl:text-2xl lg:text-xl sm:text-base text-xs
                  xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
          v-html="text"></p>
      <n-link v-if="link" :to="link" tag="button" class="text-link underline transition-all duration-150
              xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-5 lg:mt-4 sm:mt-5 mt-2.5
        ">
        {{linkName}}
      </n-link>
      <button v-else class="text-link underline transition-all duration-150
              xl:text-2xl lg:text-xl sm:text-base text-xs xl:mt-5 lg:mt-4 sm:mt-5 mt-2.5
        ">
        {{linkName}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImg",
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    linkName: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    imgFull: {
      type: Boolean,
      required: false,
      default: false
    },
    textCenter: {
      type: Boolean,
      required: false,
      default: false
    },
  }
}
</script>

<style scoped>

</style>
