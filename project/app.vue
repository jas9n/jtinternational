<script setup>

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
  console.log('finish')
  window.scrollTo(0, 0)
})

</script>

<template>
  <div>
    <global-nav/>
    <nuxt-page/>
    <global-footer/>
  </div>
</template>

<style>
html {
  max-width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
