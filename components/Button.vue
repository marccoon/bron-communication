<template>
  <div>
    <n-link
      v-if="link"
      :to="link"
      class="bg-btn w-full flex justify-center items-center text-btn xl:text-4xl lg:text-2xl text-xl xl:py-6 lg:py-2.5 sm:py-3.5 py-3 px-4 transition-all duration-700 transform hover:scale-105 active:bg-btn-focus"
    >
      <button class="flex items-center">
        {{ btn }}
        <img loading="lazy"
          src="~assets/img/btn-icon.svg"
          class="lg:ml-5 ml-3 lg:w-auto w-6"
          alt=""
        />
      </button>
    </n-link>
    <button
      v-else
      class="bg-btn w-full flex justify-center items-center text-btn xl:text-4xl lg:text-2xl text-xl xl:py-6 lg:py-2.5 sm:py-3.5 py-3 px-4 transition-all transform duration-700 hover:scale-105 active:bg-btn-focus"
    >
      {{ btn }}
      <img loading="lazy"
        src="~assets/img/btn-icon.svg"
        class="lg:ml-5 ml-3 lg:w-auto w-6"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btn: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
