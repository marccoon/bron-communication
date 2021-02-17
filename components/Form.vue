<template>
  <div
      class="flex justify-center items-center fixed duration-200
      left-0 right-0 top-0 bottom-0 h-full bg-modal transition-all"
      @click.self="closeModal"
      :class="{
        'opacity-0 pointer-events-none': !active,
        'opacity-1': active
      }"
  >
    <div @click.self="closeModal" class="container m-0 flex justify-center">
      <form
          class="bg-form  sm:px-16 px-2.5 sm:py-10 pt-16 pb-8 xl:w-1/2 lg:w-3/4 w-full relative"
          @submit.prevent="submitHandler"
      >
        <div
            class="absolute w-8 sm:top-10 top-5 sm:right-10 right-5 cursor-pointer"
            @click="closeModal"
        >
          <img src="~assets/img/menu-close.svg" alt="close menu">
        </div>

        <h4 class="font-light sm:text-2xl text-xl sm:text-left text-center">
          We will be glad to cooperate
        </h4>

        <div class="sm:mt-10 mt-5 flex flex-col">
          <div class="relative w-full mb-4">
            <span
                class="bg-form absolute top-0 transform -translate-y-1/2 left-5
                      px-2 transition-all duration-200 text-xs"
                :class="{
                   'text-black': !name.length,
                   'text-white': name.length
                }"
            >
              name
            </span>
            <input
                v-model="name"
                type="text"
                required
                class="bg-transparent border transition-all duration-200
                 border-2 px-3 py-2.5 w-full"
                :class="{
                  'border-white': name.length,
                  'border-input': !name.length
                }"
            />
          </div>

          <div class="relative w-full mb-4">
            <span
                class="bg-form absolute top-0 transform -translate-y-1/2 left-5
                      px-2 transition-all duration-200 text-xs"
                :class="{
                   'text-black': !email.length,
                   'text-white': email.length
                }"
            >
              email
            </span>
            <input
                v-model="email"
                type="email"
                required
                class="bg-transparent border transition-all duration-200
                 border-2 px-3 py-2.5 w-full"
                :class="{
                  'border-white': email.length,
                  'border-input': !email.length
                }"
            >
          </div>

          <textarea
              v-model="body"
              class="resize-none border bg-transparent placeholder-input
                 border-2 h-28 px-3 py-2.5 mb-5"
              :class="{
                  'border-white text-white': body.length,
                  'border-input text-black': !body.length
                }"
          ></textarea>
          <button
              class="bg-white hover:bg-form-btn-hover w-full text-btn-color lg:text-4xl
              text-xl lg:py-4 sm:py-3.5 py-3  px-4 transition-all duration-150">
            send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    name: '',
    email: '',
    body: ''
  }),
  computed: {
    active () {
      return this.$store.state.modal.modal
    }
  },
  methods: {
    submitHandler () {
      console.log(this.name, this.email, this.body)
    },
    closeModal () {
      this.$store.commit('modal/modal', false)
    }
  },
  watch: {
    active () {
      this.active
          ? document.body.classList.add('overflow-hidden')
          : document.body.classList.remove('overflow-hidden')
    }
  }
}
</script>
