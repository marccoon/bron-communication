<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="xl:h-172 lg:h-104 sm:h-80"
    >
      <SwiperSlide  v-for="(slide, index) in slides" :key="index"
                    :ref="`slide${index}`"
      >
        <InfoSlide
            :img="slide.img"
            :title="slide.title"
            :text="slide.text"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination-3" slot="pagination">
    </div>
  </div>
</template>

<script>
import InfoSlide from "@/components/sliders/InfoSlide";
export default {
  components: {InfoSlide}
  name: "InfoSlider",
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
        el: '.swiper-pagination-3',
        dynamicBullets: true,
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
