<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="xl:h-172 lg:h-104 sm:h-72"
    >
      <SwiperSlide  v-for="(slide, index) in slides" :key="index"
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
        <div class="swiper-pagination-1" slot="pagination">
        </div>
  </div>
</template>

<script>
import ProjectSlide from "@/components/sliders/ProjectSlide";
export default {
  components: {ProjectSlide}
  name: "ProjectSlider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      // direction: 'ho',
      breakpoints: {
        660: {
          direction: 'vertical',
        },
      },
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },

      },
    },
  }),

}
</script>

<style >

</style>
