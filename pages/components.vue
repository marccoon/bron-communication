<template>
  <div class="container">

<!--    Homepage-->
<!--    <ProjectSlider-->
<!--        :slides="projectSlides"-->
<!--    />-->
    <TextImg
        img="img/homepage-img-1.png"
        text="Working in a large-scale media organization has empowered us to establish relationships with
              major media and advertising companies in Malaysia as well as to maintain excellent collaborative efforts
              with the media and advertisers, making us an ideal agent of many mainstream media in Malaysia."
        linkName="learn more about the company"
        link="/company"
        :reverse="true"
        :imgFull="true"

    />
<!--    <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 mx-auto  border border-red-200">-->
<!--      <div>-->
<!--        <h2 class="title">Our Services</h2>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Service v-for="(service, index) in services" :key="index"-->
<!--                 :ref="`slide${index}`"-->
<!--                 :img="service.img"-->
<!--                 :title="service.title"-->
<!--                 :text="service.text"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->



<!--    Company-->



    <div class="xl:grid xl:grid-cols-2 xl:gap-x-10 mx-auto  border border-red-200">
      <div>
        <h2 class="title">Our team</h2>
      </div>
<!--      <TeamSlide-->
<!--          :slides="teamSlides"-->
<!--      />-->
<!--      <div class="lg:w-3/4 w-full xl:mx-0 mx-auto ">-->
<!--        <div class="xl:w-full lg:w-3/4 sm:w-4/5 w-5/6 border border-red-200" v-for="(slide, index) in teamSlides" :key="index"-->
<!--             :ref="`slide${index}`"-->
<!--        >-->
<!--          <img-->
<!--              :src="slide.img"-->
<!--              class="w-full object-cover"-->
<!--              alt="">-->
<!--          <h4 class="title-block text-title-color lg:mt-5 mt-2.5">{{slide.name}}</h4>-->
<!--          <div class="font-light xl:text-2xl lg:text-xl sm:text-base text-xs mt-2.5">{{slide.position}}</div>-->
<!--        </div>-->
<!--      </div>-->

    </div>



    <TextImg
        img="img/text-img-1.png"
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
        reverse=""

    />

    <div>
      <AboutUs v-for="(item, index) in aboutUs" :key="index"
               :ref="`slide${index}`"
               :img="item.img"
               :title="item.title"
               :text="item.text"
               :reverse="item.reverse"
      />
    </div>
    <ProjectSlider
        :slides="projectSlides"
    />
    <Feedback
        class="mx-auto"
    />
  </div>
<!--  <TextImg-->
<!--      img="img/company-img-1.png"-->
<!--      text="Bron Communications Sdn. Bhd, a one-stop media advertising-->
<!--              industry by producing all sorts of advertisements that meet expected-->
<!--              marketing effects. <br><br>-->
<!--              We vow to make premium advertisements available to all. In fact, we-->
<!--              have produced big brand advertisements for many Small Medium-->
<!--              Enterprise (SMEs) so that the latter can shine like big brands.<br><br>-->
<!--              If your business needs an expert in mass communication and one-stop-->
<!--              production to improve your sales performance and create overnight-->
<!--              success for your brand, we are here to give you delightful surprises-->
<!--              exceeding your expectations!"-->
<!--      linkName=""-->
<!--      link=""-->
<!--      :reverse="false"-->
<!--      :imgFull="false"-->

<!--  />-->
<!--  <section class="grid xl:grid-cols-2 grid-cols-1 xl:gap-x-10 xl:w-full lg:w-3/4 mx-auto">-->
<!--    <TeamSlider-->
<!--        :slides="teamSlides"-->
<!--    />-->
<!--  </section>-->
</template>

<script>
export default {
  data: () => ({
    projectSlides: [
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
      },
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
      },
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
      },
    ],
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
    services: [
      {
        img: 'img/service-1.png',
        title: 'Media & Digital Advertising',
        text: 'Various TV networks, multiple radio stations and countless other media platforms. Backed by marketing ' +
            'creativity and invaluable experience, we develop efficient strategic campaigns to gain maximum impact' +
            'for your brand. Our strong relationship with media owners only means that our clients only enjoy the ' +
            'best rates in the market. <br><br>\n ' +
            'A successful digital campaign ensures the highest ROI and augments your brand’s visibility over the ' +
            'internet. Through growth-obsessed digital marketing we put strategies in motion and connect you with ' +
            'the right people, at the right time. ',
      },
      {
        img: 'img/service-2.png',
        title: 'Video Production',
        text: 'We also specialize in digital video productions, which include the following:\n <br><br>' +
            'Creative content creation, video production, TV program production, TV commercial production, ' +
            'motion graphics (2D and 3D), corporate videos etc. ',
      },
      {
        img: 'img/service-3.png',
        title: 'Event Management',
        text: 'Events are an essential platform to communicate a campaign’s message to the audience. We specialize ' +
            'in the enhancement of your events with unique and creative ideas. From large conferences to small brand ' +
            'activation campaigns, we strive to understand your needs and objectives. time. ',
      },
      {
        img: 'img/service-4.png',
        title: 'PR (Public Relation)',
        text: 'Get the media coverage your company deserve! We help to make it happen by guiding you through ' +
            'engaging press releases, connecting you with journalists, and putting your business in front of ' +
            'people that matter. With the relevant industry expertise, know-how, strong relationships and great ' +
            'contacts, we can get your brand heard and amplify its messages to journalists, influencers and bloggers',
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
    ]
  })
}
</script>

<style>

</style>