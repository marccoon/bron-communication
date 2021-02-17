<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="w-10/12"
        style="margin-left: 0 !important;"
    >
      <SwiperSlide
          v-for="(slide, index) in slides" :key="index"
          :ref="`slide${index}`"
      >
        <ProjectSlide
            :img="slide.img"
            :title="slide.title"
            :text="slide.text"
            :btn="slide.btn"
            :link="slide.link"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination-1 start-animate-position z-10" v-scroll="scrollHandlerPagination" slot="pagination"></div>
  </div>
</template>

<script>
import ProjectSlide from "@/components/sliders/ProjectSlide";
export default {
  components: {ProjectSlide},
  name: "ProjectSlider",
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
        el: '.swiper-pagination-1',
        clickable: true,
        renderBullet:  (index, className) => {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
  }),
  methods: {
    scrollHandler (evt, el) {
      if (el.getBoundingClientRect().top < 1000 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    },
    scrollHandlerPagination (evt, el) {
      if (el.getBoundingClientRect().top < 1000 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  }
}
</script>
