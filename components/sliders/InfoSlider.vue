<template>
  <div class="relative">
    <Swiper
      v-if="load"
      ref="slider"
      :options="sliderOptions"
      class="w-10/12"
      style="margin-left: 0"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        :ref="`slide${index}`"
      >
        <InfoSlide
          :img="slide.image ? slide.image.sourceUrl : ''"
          :title="slide.title"
          :text="slide.text"
        />
      </SwiperSlide>
    </Swiper>
    <div
      slot="pagination"
      v-scroll="scrollHandlerPagination"
      class="start-animate-position"
      :class="'swiper-pagination-3' + idx"
    ></div>
  </div>
</template>

<script>
import InfoSlide from '@/components/sliders/InfoSlide'
export default {
  name: 'InfoSlider',
  components: { InfoSlide },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    idx: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    load: false,
    sliderOptions: null,
  }),
  mounted() {
    this.sliderOptions = {
      spaceBetween: 100,
      autoHeight: true,
      speed: 1000,
      keyboard: true,
      loop: true,
      pagination: {
        el: `.swiper-pagination-3${this.idx}`,
        clickable: true,
        renderBullet(index, className) {
          return (
            '<span class="pagination-item ' +
            className +
            '">' +
            (index + 1) +
            '</span>'
          )
        },
      },
    }
    this.load = true
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
    scrollHandlerPagination(evt, el) {
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
