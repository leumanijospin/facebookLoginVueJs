<template>
  <section class="flex flex-row justify-center xl:h-screen">
    <div class="min-w-[375px] mt-4 md:flex md:flex-row md:justify-center md:mt-16 md:items-center md:gap-x-16 md:px-10">
      <AboutFacebook />
      <FormWrapper />
    </div>
  </section>
</template>

<script>
import FormWrapper from './components/FormWrapper.vue'
import AboutFacebook from "./components/AboutFacebook.vue"
export default {
  components: { 
    FormWrapper, 
    AboutFacebook
  }
}
</script>
