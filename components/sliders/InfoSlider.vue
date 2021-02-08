<template>
  <div class="relative">
    <Swiper
        v-if="load"
        :options="sliderOptions"
        ref="slider"
        class="w-10/12"
        style="margin-left: 0;"
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
    <div :class="'swiper-pagination-3' + idx" slot="pagination"></div>
  </div>
</template>

<script>
import InfoSlide from "@/components/sliders/InfoSlide";
export default {
  components: {InfoSlide},
  name: "InfoSlider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
    idx: {
      type: String,
      default: ''
    }
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
        renderBullet: function (index, className) {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },
      },
    }
    this.load = true
  }
}
</script>
