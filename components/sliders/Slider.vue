<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="h-full"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index"
                   :ref="`slide${index}`"
      >
        <Card
            :img="slide.img"
            :title="slide.title"
            :text="slide.text"
            :btn="slide.btn"
            :link="slide.link"
            :subtitle="slide.subtitle"
            :widthFull="slide.widthFull"
        />
      </SwiperSlide>
    </Swiper>
<!--    <div class="swiper-pagination" slot="pagination">-->

<!--    </div>-->
<!--    <button-->
<!--        class="bg-pagination px-2 pagination"-->
<!--        v-for="(btn, index) in slides"-->
<!--        :class="{'sm:w-1 w-0.5 sm:h-4 h-2.5 ': index === currentSlide, 'sm:w-0.5 w-px sm:h-3 h-1.5': index !== currentSlide,}"-->
<!--        @click="slider.slideTo(index)"-->
<!--    ></button>-->
  </div>
</template>

<script>

export default {
  name: "Slider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      direction: 'vertical',

    },
  }),
  methods: {
  },
  computed: {

    slider() {
      return this.$refs.slider.$swiper
    }
  },
  mounted() {
    const height = this.$refs.slide0
    console.log(height)
  }
}
</script>

<style scoped>

</style>