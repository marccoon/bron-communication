<template>
  <div class="wrap-padding">
    <div class="">
      <div class="container">
        <h1 v-scroll="scrollHandler" class="main-title start-animate-position">
          Our Works
        </h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          :ref="`project${index}`"
          :img="
            project.featuredImage ? project.featuredImage.node.sourceUrl : ''
          "
          :subtitle="true"
          :title="project.title"
          :text="project.excerpt"
          :width-full="false"
          btn="view project"
          :link="project.uri"
          :text-end="index % 2"
          :class="{
            'xl:mb-32 lg:mb-24 sm:mb-20 mb-16': index !== project.length - 1,
          }"
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <Feedback class="mx-auto" />
      </div>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Feedback from '@/components/Feedback'
import { mapState } from 'vuex'

export default {
  components: { Card, Feedback },
  async asyncData({ app }) {
    if (!app.computed.projects)
      await app.store.dispatch('project/fetchPageProject')
  },
  computed: mapState({ projects: (state) => state.project.pageProject }),
  mounted() {
    const event = new Event('scroll')
    window.dispatchEvent(event)
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
  },
}
</script>
