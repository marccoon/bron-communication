<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1
          v-scroll="scrollHandler"
          class="main-title start-animate-position"
          v-text="page.title"
        ></h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <h2
          v-scroll="scrollHandler"
          class="title text-title-color start-animate-position"
          v-text="page.attributes.subtitle"
        ></h2>

        <div
          v-scroll="scrollHandler"
          class="font-light xl:w-1/2 lg:w-2/3 xl:mb-16 lg:mb-12 sm:mb-10 mb-7 xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158 start-animate-position"
          v-html="page.content"
        ></div>
        <Card
          v-for="(block, index) in page.attributes.expertisesList"
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
              index !== page.attributes.expertisesList.length - 1,
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
import gql from 'graphql-tag'
export default {
  components: { Card, Feedback },
  async asyncData({ app, route }) {
    const response = await app.apolloProvider.defaultClient.query({
      query: gql`
        query expertisePage {
          pageBy(uri: "expertise") {
            title
            content
            attributes {
              subtitle
              expertisesList {
                expertise {
                  ... on Expertise {
                    attributes {
                      excerpt
                    }
                    title
                    uri
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })
    return {
      page: response.data.pageBy,
    }
  },
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
