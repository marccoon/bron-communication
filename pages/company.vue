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
          class="title text-title-color xl:w-4/5 start-animate-position"
        >
          {{ page.attributes.company.title }}
        </h2>
        <TextImg
          :img="
            page.attributes.company.image
              ? page.attributes.company.image.sourceUrl
              : ''
          "
          :text="page.attributes.company.text"
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container xl:grid xl:grid-cols-2 xl:gap-x-10">
        <div>
          <h2 v-scroll="scrollHandler" class="title start-animate-position">
            Our team
          </h2>
        </div>
        <TeamSlider :slides="page.attributes.team" />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          About us
        </h2>
        <div>
          <AboutUsBlock
            v-for="(item, index) in page.attributes.aboutUs"
            :key="index"
            :ref="`slide${index}`"
            :img="item.image ? item.image.sourceUrl : ''"
            :title="item.title"
            :text="item.text"
            :reverse="index % 2 !== 0"
            :class="{
              'mb-0': index === page.attributes.aboutUs.length - 1,
              'xl:mb-28 sm:mb-16 mb-10': index !== page.attributes.aboutUs.length - 1,
            }"
          />
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <TextImg
          :img="page.featuredImage ? page.featuredImage.node.sourceUrl : ''"
          :text="page.content"
          link-name=""
          link=""
          :img-full="true"
          :text-center="true"
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          Our collaborations
        </h2>
        <div
          v-scroll="scrollHandler"
          class="flex items-center justify-between start-animate-position"
        >
          <Swiper :options="sliderOptions">
            <SwiperSlide
              v-for="(item, index) in page.attributes.collaboration"
              :key="index"
            >
              <img loading="lazy"
                :src="item.image ? item.image.sourceUrl : ''"
                class="xl:w-auto max-w-full xl:mx-auto w-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
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
import TextImg from '@/components/TextImg'
import TeamSlider from '@/components/sliders/TeamSlider'
import AboutUsBlock from '@/components/AboutUsBlock'
import Feedback from '@/components/Feedback'
import companyPageGQL from '~/apollo/queries/companyPage.gql'
import scroll from '~/mixins/scroll'

export default {
  name: 'Company',
  components: { TextImg, AboutUsBlock, TeamSlider, Feedback },
  mixins: [scroll],
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: companyPageGQL,
    })
    return {
      page: data.page,
    }
  },
  data: () => ({
    sliderOptions: {
      spaceBetween: 10,
      autoHeight: true,
      speed: 1000,
      keyboard: true,
      loop: true,
      slidesPerView: 3,
      autoplay: true,
      breakpoints: {
        660: {
          spaceBetween: 20,
        },
        1024: {
          spaceBetween: 33,
          slidesPerView: 4,
        },
        1536: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
      },
    },
  }),
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
