<template>
  <div>
    <resize-observer @notify="handleResize" />
    <section class="w-full min-h-screen flex items-center relative">
      <div class="container">
        <h1
          v-scroll="scrollHandler"
          class="main-title relative xl:w-3/4 lg:w-11/12 z-10 mx-auto start-animate-position"
        >
          {{ page.title }}
        </h1>
        <img loading="lazy"
          src="~assets/img/homepage-bg.jpg"
          class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover z-0"
          alt=""
        />
      </div>
    </section>

    <section class="xl:mt-32 lg:mt-24 sm:mt-20 mt-12 section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          Our Works
        </h2>
        <ProjectSlider />
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          {{ about.title }}
        </h2>
        <TextImg
          :img="about.image.sourceUrl"
          :text="about.text"
          link-name="learn more about the company"
          :link="about.link.uri"
          :reverse="true"
          :img-full="true"
        />
      </div>
    </section>

    <section class="section-padding">
      <div
        ref="scrollBlock"
        class="container xl:grid xl:grid-cols-2 xl:gap-x-10 mx-auto"
      >
        <div>
          <div ref="dynamicTitle" v-scroll="fixTitle" class="top-32">
            <h2 v-scroll="scrollHandler" class="title start-animate-position">
              {{ services.title }}
            </h2>
          </div>
        </div>
        <div>
          <Service
            v-for="(service, index) in services.list"
            :key="index"
            :ref="`slide${index}`"
            :class="{
              'mb-0': index === services.list.length - 1,
              'mb-20': index !== services.list.length - 1,
            }"
            :icon="service.icon"
            :title="service.title"
            :text="service.text"
          />
        </div>
      </div>
    </section>
    <section class="xl:mb-32 lg:mb-24 sm:mb-20 mb-12 section-padding">
      <div class="container">
        <Feedback class="mx-auto" />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectSlider from '@/components/sliders/ProjectSlider'
import TextImg from '@/components/TextImg'
import Service from '@/components/Service'
import Feedback from '@/components/Feedback'
import mainPageGQL from '~/apollo/queries/mainPage.gql'
import scroll from '~/mixins/scroll'

export default {
  components: { ProjectSlider, TextImg, Service, Feedback },
  mixins: [scroll],
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: mainPageGQL,
    })
    return {
      page: data.page,
      about: data.page.aboutBlock.about,
      services: {
        title: data.page.services.serviceTitle,
        list: data.page.services.serviceList,
      },
    }
  },
  data: () => ({
    isFixTitle: false,
    titlePosition: '',
    scrollBlockHeight: '',
    scrollBlockPosition: '',
    resizeVar: null,
  }),
  mounted() {
    this.isFixTitle = window.innerWidth >= 1536
    console.log(this.services)
  },
  methods: {
    fixTitle(evt, el) {
      if (
        this.$refs.scrollBlock &&
        this.$refs.scrollBlock.getBoundingClientRect().top < 100 &&
        this.$refs.scrollBlock.getBoundingClientRect().bottom > 200 &&
        this.isFixTitle
      ) {
        el.style.position = 'fixed'
      } else {
        el.style.position = 'static'
      }
    },
    handleResize({ width }) {
      this.isFixTitle = width >= 1536
    },
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
