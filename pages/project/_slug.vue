<template>
  <div class="wrap-padding">
    <div>
      <div
        v-scroll="scrollHandler"
        class="container start-animate-position flex lg:items-end lg:flex-row flex-col flex-wrap"
      >
        <h1 class="main-title lg:mr-16">
          {{ page.title }}
        </h1>
        <span
          class="uppercase xl:mb-4 lg:mb-3 xl:text-xl lg:text-base text-xs lg:mt-0 sm:mt-5 mt-4"
        >
          portfolio category
        </span>
      </div>
    </div>

    <section class="section-padding">
      <div class="container" v-html="page.content"></div>
    </section>

    <section class="section-padding">
      <div class="container">
        <Feedback class="mx-auto" />
      </div>
    </section>
  </div>
</template>

<script>
import Feedback from '@/components/Feedback'
import scroll from '~/mixins/scroll'
import projectPageGQL from '~/apollo/queries/projectPage.gql'

export default {
  components: { Feedback },
  mixins: [scroll],
  async asyncData({ app, route }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: projectPageGQL,
      variables: {
        slug: route.params.slug,
      },
    })
    return {
      page: data.page,
    }
  },
  head() {
    const link = []
    const endpoint = this.$config.wpEndpoint
    const styles = this.page.enqueuedStylesheets.nodes
    styles.forEach(function (data) {
      link.push({
        rel: 'stylesheet',
        href: `${endpoint}/${data.src}`,
      })
    })
    return {
      title: this.page.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seo.metaDesc,
        },
      ],
      link,
    }
  },
}
</script>
