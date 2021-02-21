<template>
  <div class="relative">
    <Swiper
      ref="slider"
      :options="sliderOptions"
      class="w-10/12"
      style="margin-left: 0 !important"
    >
      <SwiperSlide
        v-for="(project, index) in projects"
        :key="index"
        :ref="`slide${index}`"
      >
        <ProjectSlide
          :img="project.featuredImage"
          :title="project.title"
          :text="project.excerpt"
          :link="project.uri"
        />
      </SwiperSlide>
    </Swiper>
    <div
      v-scroll="scrollHandlerPagination"
      class="swiper-pagination-1 start-animate-position z-10"
    ></div>
  </div>
</template>

<script>
import ProjectSlide from '@/components/sliders/ProjectSlide'
import projectsSliderGQL from '~/apollo/queries/projectsSlider.gql'

export default {
  name: 'ProjectSlider',
  components: { ProjectSlide },
  apollo: {
    projects: {
      prefetch: true,
      query: projectsSliderGQL,
      update: (data) => data.projects.nodes,
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
        renderBullet: (index, className) => {
          return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
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
