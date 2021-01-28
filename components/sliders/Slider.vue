<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="h-96"
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
        <div class="swiper-pagination" slot="pagination">

        </div>
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
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
  }),
  methods: {
  },
  computed: {
    height () {
      return this.$refs.slide0[0].$el.scrollHeight
    },
    slider() {
      return this.$refs.slider.$swiper
    }
  },
}
</script>

<style >

</style>
