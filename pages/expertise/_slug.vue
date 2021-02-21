<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1 v-scroll="scrollHandler" class="main-title start-animate-position">
          Media & Digital Advertising
        </h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <Card
          img="img/project-img.png"
          title="Fortify Your Presence"
          text="Digital platform holds a significant key for your brand due to its unlimited connectivity
                  and access. Strengthen your digital presence with consistent, strategic marketing and
                  communication."
          :width-full="true"
          text-end=""
          btn=""
          link=""
        />
        <div class="xl:mt-28 lg:mt-24 sm:mt-20 mt-16">
          <p
            v-scroll="scrollHandler"
            class="start-animate-position font-light w-1/2 xl:text-2xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158"
          >
            A successful digital campaign ensures the highest ROI and augments
            your brand’s visibility over the internet. Through growth-obsessed
            digital marketing we put strategy in motion and connect you with the
            right people, at the right time.
          </p>

          <div
            v-scroll="scrollHandler"
            class="start-animate-position group overflow-hidden"
          >
            <img
              src="~assets/img/media-digital-img-2.png"
              class="lg:mt-16 sm:mt-10 mt-5 w-full object-cover w-full transform transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 v-scroll="scrollHandler" class="title start-animate-position">
          Media & Digital Advertising Services
        </h2>
        <InfoSlider :slides="infoSlides" idx="123" />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 class="title">Our Approach</h2>
        <InfoSlider :slides="infoSlides" idx="2" />
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
export default {
  components: { Card, InfoSlider, Feedback },
  data: () => ({
    infoSlides: [
      {
        img: 'img/project-img.png',
        title: 'Digital Advertising',
        text:
          'In this digital age, it is impossible to exclude digital platforms in your marketing campaigns. ' +
          'Knowing how to cut through the ever congested and noisy web takes skills. We analyze the digital ' +
          'channel to find smart opportunities, and build brand growth tactics to help you become a market leader.',
      },
      {
        img: 'img/project-img.png',
        title: 'Digital Advertising',
        text:
          'In this digital age, it is impossible to exclude digital platforms in your marketing campaigns. ' +
          'Knowing how to cut through the ever congested and noisy web takes skills. We analyze the digital ' +
          'channel to find smart opportunities, and build brand growth tactics to help you become a market leader.',
      },
      {
        img: 'img/project-img.png',
        title: 'Digital Advertising',
        text:
          'In this digital age, it is impossible to exclude digital platforms in your marketing campaigns. ' +
          'Knowing how to cut through the ever congested and noisy web takes skills. We analyze the digital ' +
          'channel to find smart opportunities, and build brand growth tactics to help you become a market leader.',
      },
      {
        img: 'img/project-img.png',
        title: 'Digital Advertising',
        text:
          'In this digital age, it is impossible to exclude digital platforms in your marketing campaigns. ' +
          'Knowing how to cut through the ever congested and noisy web takes skills. We analyze the digital ' +
          'channel to find smart opportunities, and build brand growth tactics to help you become a market leader.',
      },
      {
        img: 'img/project-img.png',
        title: 'Digital Advertising',
        text:
          'In this digital age, it is impossible to exclude digital platforms in your marketing campaigns. ' +
          'Knowing how to cut through the ever congested and noisy web takes skills. We analyze the digital ' +
          'channel to find smart opportunities, and build brand growth tactics to help you become a market leader.',
      },
    ],
  }),
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
