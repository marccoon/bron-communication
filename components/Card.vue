<template>
  <div class="grid sm:grid-cols-2 xl:gap-x-10 lg:gap-x-0 sm:gap-x-10" >
    <div class=" xl:pr-0 lg:pr-10">
      <img
          :src="img"
          class="w-full "
          alt="">
    </div>

    <div class="flex flex-col "
         :class="{
                    'xl:justify-center flex-start': !btn,
                    'justify-end': btn,
                    'xl:py-10 lg:pt-16 sm:pt-10': !subtitle
                  }"
    >
      <div class="transform xl:-translate-x-48 lg:-translate-x-40 sm:-translate-x-20 xl:mb-16 lg:mb-10 mb-5 sm:mt-0 mt-2.5">
        <div
            v-if="subtitle"
            class="flex items-center mb-7"
        >
          <span class="uppercase xl:text-xl text-base">portfolio category</span>
          <img src="~assets/img/btn-icon.svg" class="ml-5">
        </div>
        <h3
            v-html="title"
            class="xl:text-6xl lg:text-4xl sm:text-3xl text-2xl font-medium"
        >
        </h3>
      </div>
      <div
          :class="{
                    'w-3/5': !widthFull,
                    'w-full': widthFull
                  }"
      >
        <p
            v-html="text"
            class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs leading-normal"
        ></p>
        <Button
            :btn="btn"
            class="mt-28"
            v-if="btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  },
}
</script>

<style scoped>

</style>