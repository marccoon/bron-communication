<template>
  <div class="wrap-padding">
    <div class="">
      <div class="container">
        <h1 v-scroll="scrollHandler" class="main-title start-animate-position">
          Our Works
        </h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <Card
          v-for="(block, index) in blocks"
          :key="index"
          :ref="`block${index}`"
          :img="block.img"
          :subtitle="true"
          :title="block.title"
          :text="block.text"
          :width-full="false"
          :btn="block.btn"
          :link="block.link"
          :text-end="block.textEnd"
          :class="{
            'xl:mb-32 lg:mb-24 sm:mb-20 mb-16': index !== blocks.length - 1,
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

export default {
  components: { Card, Feedback },
  data: () => ({
    blocks: [
      {
        img: 'img/work-1.png',
        title: 'Project name',
        text:
          'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
          ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
      },
      {
        img: 'img/work-2.png',
        title: 'Project name',
        text:
          'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
          ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: true,
      },
      {
        img: 'img/work-3.png',
        title: 'Project name',
        text:
          'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
          ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
      },
      {
        img: 'img/work-4.png',
        title: 'Project name',
        text:
          'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
          ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: true,
      },
      {
        img: 'img/work-5.png',
        title: 'Project name',
        text:
          'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
          ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
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
