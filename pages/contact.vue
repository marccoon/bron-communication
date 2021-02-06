<template>
  <div class="wrap-padding">
    <div class="">
      <div class="container">
        <h1 class="main-title">Contact</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="container xl:flex xl:flex-col xl:flex-wrap xl:justify-between xl:items-baseline xl:h-128">
        <div class="xl:w-1/2 xl:pr-5 xl:order-1">
          <div class="xl:text-xl lg:text-base text-xs xl:max-w-lg lg:max-w-none max-w-xs lg:pr-0 sm:pr-10  lg:mt-0 mt-10">
              <a class="block">hello@broncommunications.com</a>
              <a class="block">+(60)12 977 7739</a>
              <p class="mt-7 ">
                Level 16, 16-06 Plaza Azalea, Persiaran Bandaraya,
                Seksyen 14, Shah Alam, 40000, <br>
                Selangor Darul Ehsan, Malaysia
              </p>
          </div>
          <SocialIcon
              class="mt-7"
          />
        </div>
        <div class="xl:w-1/2 xl:h-full xl:pl-5 xl:order-3 xl:mt-0 sm:mt-20 mt-16">
          <img src="~assets/img/map.png" class="h-full w-full object-cover">
        </div>
        <Feedback
            class="xl:order-2 xl:mt-0 sm:mt-20 mt-16"
        />


      </div>
    </section>
    <section class="section-padding">
      <div class="container">

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact",

}
</script>

<style scoped>

</style>