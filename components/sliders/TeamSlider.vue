<template>
  <div class="relative">
    <Swiper
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
        <TeamSlide
          :img="slide.photo ? slide.photo.sourceUrl : ''"
          :name="slide.fullname"
          :position="slide.position"
        />
      </SwiperSlide>
    </Swiper>
    <div
      slot="pagination"
      v-scroll="scrollHandlerPagination"
      class="swiper-pagination-2 z-10 start-animate-position"
    ></div>
  </div>
</template>

<script>
import TeamSlide from '@/components/sliders/TeamSlide'
export default {
  name: 'TeamSlider',
  components: { TeamSlide },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      spaceBetween: 100,
      autoHeight: true,
      speed: 1000,
      keyboard: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination-2',
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
    },
  }),
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
