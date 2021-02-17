<template>
  <div class="relative">
    <Header  />
    <Form class="z-50" />
    <Nuxt />

    <Footer />
  </div>
</template>
<style>
</style>
<script>
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import Form from "~/components/Form"
export default {
  components: {Footer, Header, Form},
}
</script>
