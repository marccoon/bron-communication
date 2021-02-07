<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1 class="main-title">Expertise</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <h2 class="title text-title-color">One-stop Ad & Media Services for All of Your Advertising Needs</h2>
        <div class="font-light xl:w-1/2 lg:w-2/3 xl:mb-16 lg:mb-12 sm:mb-10 mb-7
                    xl:text-2xl lg:text-xl sm:text-base text-xs xl:leading-158 lg:leading-158 sm:leading-158 leading-158">
          Bron Communications Sdn. Bhd. provides one-stop advertising and professional media services including:
        </div>
        <Card v-for="(block, index) in blocks" :key="index"
              :ref="`block${index}`"
              :img="block.img"
              :title="block.title"
              :text="block.text"
              btn=""
              link=""
              :widthFull="block.widthFull"
              textEnd=""
              :class="{
                'xl:mb-32 lg:mb-24 sm:mb-20 mb-16': index !== blocks.length - 1
              }"
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <Feedback
            class="mx-auto"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Feedback from "@/components/Feedback";
export default {
  components: {Card, Feedback},
  data: () => ({
    blocks: [
      {
        img: 'img/exp-1.png',
        title: 'Media & Digital Advertising',
        text: 'Various TV networks, multiple radio stations and countless other media platforms. Backed by marketing ' +
            'creativity and invaluable experience, we develop efficient strategic campaigns to gain maximum impact ' +
            'for your brand. Our strong relationship with media owners only means that our clients only enjoy the ' +
            'best rates in the market. <br><br>  ' +
            'A successful digital campaign ensures the highest ROI and augments your brand’s visibility over ' +
            'the internet. Through growth-obsessed digital marketing we put strategies in motion and connect ' +
            'you with the right people, at the right time. ',
        widthFull: true,
      },
      {
        img: 'img/exp-2.png',
        title: 'Video Production',
        text: 'We also specialize in digital video productions, which include the following:<br> <br>  ' +
            'Creative content creation, video production, TV program production, TV commercial production, ' +
            'motion graphics (2D and 3D), corporate videos etc. ',
        widthFull: true,
      },
      {
        img: 'img/exp-3.png',
        title: 'Event Management',
        text: 'Events are an essential platform to communicate a campaign’s message to the audience. We specialize ' +
            'in the enhancement of your events with unique and creative ideas. From large conferences to small brand ' +
            'activation campaigns, we strive to understand your needs and objectives. time. ',
        widthFull: true,

      },
      {
        img: 'img/exp-4.png',
        title: 'PR (Public Relation)',
        text: 'Get the media coverage your company deserve! We help to make it happen by guiding you through ' +
            'engaging press releases, connecting you with journalists, and putting your business in front of ' +
            'people that matter. With the relevant industry expertise, know-how, strong relationships and great ' +
            'contacts, we can get your brand heard and amplify its messages to journalists, influencers and bloggers',
        widthFull: true,
      },

    ],
  })
}
</script>

<style scoped>

</style>