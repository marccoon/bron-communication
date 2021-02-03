<template>
  <div class="wrap-padding">
    <div>
      <div class="container">
        <h1 class="main-title">Company</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <h2 class="title text-title-color xl:w-4/5">We Offer You Pleasant Surprises through Our Ads & Videos</h2>
        <TextImg
          img="img/company-img-1.png"
          text="Bron Communications Sdn. Bhd, a one-stop media advertising
                  industry by producing all sorts of advertisements that meet expected
                  marketing effects. <br><br>
                  We vow to make premium advertisements available to all. In fact, we
                  have produced big brand advertisements for many Small Medium
                  Enterprise (SMEs) so that the latter can shine like big brands.<br><br>
                  If your business needs an expert in mass communication and one-stop
                  production to improve your sales performance and create overnight
                  success for your brand, we are here to give you delightful surprises
                  exceeding your expectations!"
          linkName=""
          link=""
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container xl:grid xl:grid-cols-2 xl:gap-x-10">
<!--        <div class="">-->
          <div>
            <h2 class="title">Our team</h2>
          </div>
          <TeamSlider
              :slides="teamSlides"
          />
<!--        </div>-->
      </div>
    </section>
    <section class="section-padding ">
      <div class="container">
        <h2 class="title">About us</h2>
        <div>
          <AboutUsBlock v-for="(item, index) in aboutUs" :key="index"
                       :ref="`slide${index}`"
                       :img="item.img"
                       :title="item.title"
                       :text="item.text"
                       :reverse="item.reverse"
                      :class="{
                        'mb-0': (index === aboutUs.length - 1),
                        'xl:mb-28 sm:mb-16 mb-10': (index !== aboutUs.length - 1)
                      }"
          />
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <TextImg
          img="img/company-img-1.png"
          text="Bron Communications Sdn. Bhd, a one-stop media advertising
                  industry by producing all sorts of advertisements that meet expected
                  marketing effects. <br><br>
                  We vow to make premium advertisements available to all. In fact, we
                  have produced big brand advertisements for many Small Medium
                  Enterprise (SMEs) so that the latter can shine like big brands.<br><br>
                  If your business needs an expert in mass communication and one-stop
                  production to improve your sales performance and create overnight
                  success for your brand, we are here to give you delightful surprises
                  exceeding your expectations!"
          linkName=""
          link=""
          :imgFull="true"
          :textCenter="true"
        />
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2 class="title">Our collobrations</h2>
        <div class="flex items-center justify-between">
          <img :src="item" v-for="(item, index) in collobrations" :key="index"
               :ref="`item${index}`"
                class="xl:w-auto lg:w-1/5 w-1/3"
               :class="{
                 'lg:block hidden': index > 2
               }"
          >
        </div>
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
export default {
  name: "company",
  data: () => ({
    teamSlides: [
      {
        img: 'img/team-img.png',
        name: 'Mohd Fariz Zulkepley',
        position: 'Founder + CEO',
      },
      {
        img: 'img/team-img.png',
        name: 'Mohd Fariz Zulkepley',
        position: 'Founder + CEO',
      },
      {
        img: 'img/team-img.png',
        name: 'Mohd Fariz Zulkepley',
        position: 'Founder + CEO',
      },
    ],
    aboutUs: [
      {
        img: 'img/about-1.png',
        title: 'Rich experience:',
        text: 'Our team have accumulated rich\n' +
            'practical experience for many years, and can lead the\n' +
            'team to complete any project;\n ',
        reverse: false,
      },
      {
        img: 'img/about-2.png',
        title: 'Professional team:',
        text: 'We have our own dedicated\n' +
            'advertising and video production team, consisting of\n' +
            'highly experienced team members, to come up with\n' +
            'productions that far exceed your expectations;',
        reverse: true,
      },
      {
        img: 'img/about-3.png',
        title: 'Well-equipped production:',
        text: 'High-quality advertising\n' +
            'and video production requires sophisticated\n' +
            'production equipment. At Bron Communications Sdn.\n' +
            'Bhd., there is always abundant equipment to ensure\n' +
            'smooth production. ',
        reverse: false,
      },
      {
        img: 'img/about-4.png',
        title: 'Multimedia Agency:',
        text: 'As an agency for a variety of\n' +
            'mainstream media in Malaysia, we can meet the\n' +
            'diverse advertising requirements of our customers. We\n' +
            'put advertisements in appropriate media to get\n' +
            'excellent result with minimum cost;\n',
        reverse: true,
      },
      {
        img: 'img/about-5.png',
        title: 'Complete package:',
        text: 'We can do everything for you,\n' +
            'from designing the advertising concept, developing\n' +
            'the content all the way to post-production. We promise\n' +
            'to live up to your every expectation;',
        reverse: false,
      },
    ],
    collobrations: [
      'img/col-1.svg',
      'img/col-2.svg',
      'img/col-3.svg',
      'img/col-4.svg',
    ],
  })
}
</script>

<style scoped>

</style>