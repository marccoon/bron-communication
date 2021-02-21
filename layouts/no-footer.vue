<template>
  <div>
    <Header />
    <Form class="z-50" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import Form from '~/components/Form'
export default {
  components: { Header, Form },
}
</script>
