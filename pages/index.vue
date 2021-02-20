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
        <img
          src="~assets/img/homepage-bg.jpg"
          class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover z-0"
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
          {{ page.aboutBlock.about.title }}
        </h2>
        <TextImg
          :img="page.aboutBlock.about.image.sourceUrl"
          :text="page.aboutBlock.about.text"
          link-name="learn more about the company"
          :link="page.aboutBlock.about.link.uri"
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
              {{ page.services.serviceTitle }}
            </h2>
          </div>
        </div>
        <div>
          <Service
            v-for="(service, index) in page.services.serviceList"
            :key="index"
            :ref="`slide${index}`"
            :class="{
              'mb-0': index === page.services.serviceList.length - 1,
              'mb-20': index !== page.services.serviceList.length - 1,
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
import gql from 'graphql-tag'

export default {
  components: { ProjectSlider, TextImg, Service, Feedback },
  async asyncData({ app }) {
    const response = await app.apolloProvider.defaultClient.query({
      query: gql`
        query mainPage {
          pageBy(uri: "/") {
            title
            aboutBlock {
              about {
                text
                title
                image {
                  sourceUrl
                }
                link {
                  ... on Page {
                    uri
                  }
                }
              }
            }
            services {
              serviceTitle
              serviceList {
                icon
                text
                title
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
      `,
    })

    return {
      page: response.data.pageBy,
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
    const event = new Event('scroll')
    window.dispatchEvent(event)
    this.isFixTitle = window.innerWidth >= 1536
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
          content: this.page.seo.metDesc,
        },
      ],
    }
  },
}
</script>
