<template>
  <div class="grid-block border border-red-200">
    <img
        :src="img"
        alt="">
    <div class="flex flex-col "
         :class="{
                    'justify-center': !btn,
                    'justify-end': btn
                  }"
    >
      <div class="transform -translate-x-48 mb-16">
        <div
            v-if="subtitle"
            class="flex items-center mb-7"
        >
          <span class="uppercase xl:text-xl text-base">portfolio category</span>
          <img src="~assets/img/btn-icon.svg" class="ml-5">
        </div>
        <h3
            v-html="title"
            class="xl:text-6xl text-4xl font-medium"
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
            class="font-light text-xl leading-normal"
        ></p>
        <Button
            :btn="btn"
            class="mt-28"
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