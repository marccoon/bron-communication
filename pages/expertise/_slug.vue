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
        <Card
          :img="content.imageRight ? content.imageRight.sourceUrl : ''"
          :title="content.title"
          :text="content.textLeft"
          width-full
          text-end
        />
        <div class="xl:mt-28 lg:mt-24 sm:mt-20 mt-16">
          <div
            v-scroll="scrollHandler"
            class="start-animate-position font-light w-1/2 xl:text-2xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
            v-html="content.textFullwidth"
          ></div>

          <div
            v-scroll="scrollHandler"
            class="start-animate-position group overflow-hidden"
          >
            <img
              :src="
                content.imageFullwidth ? content.imageFullwidth.sourceUrl : ''
              "
              class="lg:mt-16 sm:mt-10 mt-5 w-full object-cover w-full transform transition duration-700 group-hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" v-if="page.content">
      <div class="container">
        <div
          class="xl:mt-28 lg:mt-24 sm:mt-20 mt-16"
          v-html="page.content"
        ></div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          {{ services.title }}
        </h2>
        <InfoSlider :slides="services.list" idx="123" />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 class="title">{{ approach.title }}</h2>
        <InfoSlider :slides="approach.list" idx="2" />
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
import InfoSlider from '@/components/sliders/InfoSlider'
import Feedback from '@/components/Feedback'
import scroll from '~/mixins/scroll'
import expertisePageGQL from '~/apollo/queries/expertisePage.gql'

export default {
  components: { Card, InfoSlider, Feedback },
  mixins: [scroll],
  async asyncData({ app, route }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: expertisePageGQL,
      variables: {
        slug: route.params.slug,
      },
    })
    return {
      page: data.page,
      content: data.page.attributes.content,
      services: data.page.attributes.services,
      approach: data.page.attributes.approach,
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
