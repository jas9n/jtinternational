<template>
    <div class="w-screen h-screen flex justify-center items-center z-10">
      <!-- <div class="absolute w-full h-screen -z-10 bg-black"></div> -->
      <img id="landing-img" :src="`/images/photos/${photos[index]}.jpg`" alt="" class="h-screen w-full object-cover absolute top-0 left-0 ">
      <img :src="`/images/photos/${photos[reverseIndex]}.jpg`" alt="" class="h-screen w-full object-cover absolute top-0 left-0 -z-10">

      <!-- <h1 class="z-20 text-white font-serif text-6xl font-medium">Design with passion. Craft with precision.</h1> -->
      
      <!-- <img id="monogram1" src="/images/logos/monogram-j.svg" class="hidden absolute h-screen w-full object-cover top-0 md:block" alt="">
      <img id="monogram2" src="/images/logos/monogram-t.svg" class="hidden absolute h-screen w-full object-cover top-0 md:block" alt=""> -->
      <div class="flex justify-center items-center absolute bottom-[25%] md:bottom-[35%] sm:items-start sm:right-20 md:right-24 xl:right-32">
        <h1 class="flex flex-col items-end space-y-3 pb-2 font-serif font-medium text-white text-4xl md:text-6xl lg:text-7xl ">
          <span id="title">Design with passion.</span>
          <span id="title">Craft with precision.</span> 
        </h1>
      </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            photos: ['office', 'main', 'ceo', 'shelf1', 'materials'],
            timer: null,
            index: 0,
            count: 5,
            reverseIndex: 4,
        }
    },
    mounted() {
    
      const interval = setInterval(this.next, 4500)
      setTimeout(() => {
        clearInterval(interval)
      }, 4500 * 15) 
    },
    methods: {


        next() {
            this.index += 1
            this.reverseIndex += 1
            if (this.index >= this.count) this.index = 0;
            if (this.reverseIndex >= this.count) this.reverseIndex = 0
            gsap.from('#landing-img', { x:'20%', duration: 0.5, })
            gsap.from('#landing-img', { opacity: 0, duration: 0.5, ease: "power3.in"})
        },
    },


}
</script>

<style scoped>

h1 {
  text-shadow: 1px 1px 2px black;
  /* letter-spacing: 3px;
  font-family: 'Bebas Neue'; */
}
</style>