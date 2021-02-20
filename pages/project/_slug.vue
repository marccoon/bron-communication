<template>
  <div class="wrap-padding">
    <div>
      <div
          v-scroll="scrollHandler"
          class="container start-animate-position flex lg:items-end lg:flex-row flex-col flex-wrap"
      >
        <h1 class="main-title lg:mr-16">Project name</h1>
        <span class="uppercase xl:mb-4 lg:mb-3  xl:text-xl lg:text-base text-xs lg:mt-0 sm:mt-5 mt-4">
          portfolio category
        </span>
      </div>
    </div>

    <section class="section-padding">
<!--      Сюда выводить контент-->
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
import Feedback from "@/components/Feedback";
export default {
  components: {Feedback},
  methods: {
    scrollHandler(evt, el) {
      if (el.getBoundingClientRect().top < self.innerHeight * 1.1 && !el.classList.contains('animate')) {
        el.classList.add('animate')
      }
    }
  },
  mounted() {
    const event = new Event('scroll');
    window.dispatchEvent(event);
  }
}
</script>
