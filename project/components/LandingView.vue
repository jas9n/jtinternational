<script setup>
import gsap from 'gsap'
</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center z-10">
      <img id="landing-img" src="/images/photos/landing.svg" alt="" class="h-screen w-full object-cover absolute -z-10 top-0 ">
      <img id="monogram1" src="/images/logos/monogram-j.svg" class="hidden absolute h-screen w-full object-cover top-0 md:block" alt="">
      <img id="monogram2" src="/images/logos/monogram-t.svg" class="hidden absolute h-screen w-full object-cover top-0 md:block" alt="">
      <div class="flex justify-center items-start absolute right-12 sm:right-20 md:right-24 xl:right-40">
        <h1 class="flex flex-col items-end space-y-3 pb-2 font-serif text-4xl md:text-6xl lg:text-7xl">
          <span id="title">Design by passion.</span>
          <span id="title">Craft with precision.</span> 
        </h1>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LandingView',
    mounted() {
        const inital = gsap.timeline()
        inital.to('#monogram1', {x: '-100%',  opacity: 0.1, duration: 2}, 0.3)
        inital.to('#monogram2', {x: '100%', opacity: 0.1, duration: 2}, 0.3)
        inital.from('#title', {y: -40, opacity: 0, duration: 1, stagger: 0.4}, 1.5)
    }
}
</script>