<script setup>
useSeoMeta(
  {
    title: 'Jag International Trim LLC',
    ogTitle: 'Jag International Trim LLC',
    description: 'Hello!',
    ogDescription: 'Hello!',
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
