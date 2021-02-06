<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="container">
      <form action=""
            class="bg-form mx-auto sm:px-16 px-2.5 sm:py-10 pt-16 pb-8 xl:w-1/2 lg:w-3/4 w-full relative"
      >
        <div class="font-light sm:text-2xl text-xl sm:text-left text-center">We will be glad to cooperate</div>
        <img src="~assets/img/menu-close.svg" class="absolute w-8 sm:top-10 top-5 sm:right-10 right-5">
        <div class="sm:mt-10 mt-5 flex flex-col">
          <input type="text"  placeholder="Superdesigner"
                 class="bg-transparent placeholder-input border border-input border-2 px-3 py-2.5">
          <input type="email"  placeholder="e.g. john@gmail.com"
                 class="bg-transparent placeholder-input border border-input border-2 px-3 py-2.5 mt-4">
          <textarea name=""
                    class="bg-transparent text-input border border-input border-2 h-28 px-3 py-2.5 mt-4"
          >Describe your project</textarea>
          <button class="bg-btn w-full text-btnColor bg-btnLight
            lg:text-4xl  text-xl lg:py-4 sm:py-3.5 py-3  px-4 mt-5 transition-all duration-150" >
            send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "Form"
}
</script>

<style scoped>

</style>