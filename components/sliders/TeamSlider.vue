<template>
  <div class="relative">
    <Swiper
        :options="sliderOptions"
        ref="slider"
        class="sm:h-154"
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
    <div class="swiper-pagination" slot="pagination">
    </div>
  </div>
</template>

<script>

export default {
  name: "TeamSlider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sliderOptions: {
      // direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        },

      },
      breakpoints: {
        660: {
          direction: 'vertical',
        },
      }
    },

  }),

}
</script>

<style >

</style>
