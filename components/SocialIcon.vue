<template>
  <div class="flex items-center">
    <a :href=icon.link v-for="(icon, index) in socialIcons" :key="index"
       :ref="`icon${index}`"
       :class="{
         'mr-0': index === socialIcons.length - 1,
         'sm:mr-10 mr-7': index !== socialIcons.length - 1,
       }"
    >
      <img :src=icon.img
      >
    </a>
  </div>
</template>

<script>
export default {
name: "SocialIcon",
  data: () => ({
    socialIcons: [
      {
        img: 'img/facebook.svg',
        link: '/',
      },
      {
        img: 'img/mes.svg',
        link: '/',
      },
      {
        img: 'img/linkedin.svg',
        link: '/',
      },
      {
        img: 'img/inst.svg',
        link: '/',
      },
      {
        img: 'img/youtube.svg',
        link: '/',
      },
    ],
  })
}
</script>

<style scoped>

</style>