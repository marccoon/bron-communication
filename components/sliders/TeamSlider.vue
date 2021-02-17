<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="w-10/12"
        style="margin-left: 0;"
    >
      <SwiperSlide  v-for="(slide, index) in slides" :key="index"
                    :ref="`slide${index}`"
      >
        <TeamSlide
            :img="slide.img"
            :name="slide.name"
            :position="slide.position"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination-2 z-10 start-animate-position" v-scroll="scrollHandlerPagination" slot="pagination">
    </div>
  </div>
</template>

<script>
import TeamSlide from "@/components/sliders/TeamSlide";
export default {
  components: {TeamSlide},
  name: "TeamSlider",
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
        renderBullet: function (index, className) {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
  }),
  methods: {
    scrollHandler (evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    },
    scrollHandlerPagination (evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  }
}
</script>
