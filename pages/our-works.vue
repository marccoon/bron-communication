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
          :text-end="index % 2 !== 0"
          :class="{
            'xl:mb-32 lg:mb-24 sm:mb-20 mb-16': index !== projects.length - 1,
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
import scroll from '~/mixins/scroll'
import projectsPageGQL from '~/apollo/queries/projectsPage'

export default {
  components: { Card, Feedback },
  mixins: [scroll],
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: projectsPageGQL,
    })
    return {
      projects: data.projects.nodes,
      page: data.page,
    }
  },
  head() {
    return {
      title: this.page.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seo.metaDesc,
        },
      ],
    }
  },
}
</script>
