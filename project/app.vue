<script setup>
useHead({
  title: 'Jag International Trim LLC',
  meta: {
    name: 'description',
    content: 'Jag International Trim, located in the Garment District in NYC, is a premier button and trimming manufacturer. We offer development and design service to the fashion community.'
  }
})
useSeoMeta(
  {
    title: 'Jag International Trim LLC',
    ogTitle: 'Jag International Trim LLC',
    description: 'Jag International Trim, located in the Garment District in NYC, is a premier button and trimming manufacturer. We offer development and design service to the fashion community.',
    ogDescription: 'Jag International Trim, located in the Garment District in NYC, is a premier button and trimming manufacturer. We offer development and design service to the fashion community.',
    ogImage: 'images/favicon.png',
  }
)

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
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
