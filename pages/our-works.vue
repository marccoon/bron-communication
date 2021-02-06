<template>
  <div class="wrap-padding">
    <div class="">
      <div class="container">
        <h1 class="main-title">Our Works</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container">
        <Card v-for="(block, index) in blocks" :key="index"
              :ref="`block${index}`"
              :img="block.img"
              :subtitle="true"
              :title="block.title"
              :text="block.text"
              :widthFull="false"
              :btn="block.btn"
              :link="block.link"
              :textEnd="block.textEnd"
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
export default {
  name: "our-works",
  data: () => ({
    blocks: [
      {
        img: 'img/work-1.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
      },
      {
        img: 'img/work-2.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: true,
      },
      {
        img: 'img/work-3.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
      },
      {
        img: 'img/work-4.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: true,
      },
      {
        img: 'img/work-5.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate!\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link: '/',
        textEnd: false,
      },
    ],
  })
}
</script>

<style scoped>

</style>