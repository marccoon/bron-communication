<template>
  <div class="relative">
    <Swiper
      :options="sliderOptions"
      ref="slider"
      class="w-10/12"
      style="margin-left: 0 !important;"
    >
      <SwiperSlide
        v-for="(project, index) in projects" :key="index"
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
      class="swiper-pagination-1 start-animate-position z-10"
      v-scroll="scrollHandlerPagination"
    ></div>
  </div>
</template>

<script>
import ProjectSlide from "@/components/sliders/ProjectSlide";
import {mapActions, mapState} from "vuex"

export default {
  name: 'ProjectSlider',
  components: { ProjectSlide },
  async fetch() {
    if (!this.projects.length)
      await this.fetchProject()
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
        // renderBullet: (index, className) => {
        //   return '<span class="pagination-item ' + className + '">' + (index + 1) + '</span>';
        // },
      },
    },
  }),
  computed: mapState(
    { projects: state => state.project.sliderProject }
  ),
  methods: {
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    },
    scrollHandlerPagination(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    },
    ...mapActions(
      {fetchProject: "project/fetchProjectToSlider"}
    )
  }
}
</script>
