<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1 v-scroll="scrollHandler" class="main-title start-animate-position">
          {{ page.title }}
        </h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <h2
          v-scroll="scrollHandler"
          class="title text-title-color start-animate-position"
        >
          {{ page.subtitle }}
        </h2>

        <div
          v-scroll="scrollHandler"
          class="font-light xl:w-1/2 lg:w-2/3 xl:mb-16 lg:mb-12 sm:mb-10 mb-7 xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158 start-animate-position"
          v-html="page.content"
        ></div>
        <Card
          v-for="(block, index) in expertises"
          :key="index"
          :ref="`block${index}`"
          :img="
            block.expertise.featuredImage
              ? block.expertise.featuredImage.node.sourceUrl
              : ''
          "
          :title="block.expertise.title"
          :text="block.expertise.attributes.excerpt"
          :link="block.expertise.uri"
          width-full
          text-end
          :class="{
            'xl:mb-32 lg:mb-24 sm:mb-20 mb-16':
              index !== expertises.length - 1,
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
import expertisesPageGQL from '~/apollo/queries/expertisesPage.gql'

export default {
  components: { Card, Feedback },
  mixins: [scroll],
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: expertisesPageGQL,
    })
    return {
      page: {
        subtitle: data.page.attributes.subtitle,
        ...data.page,
      },
      expertises: data.page.attributes.expertisesList,
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
