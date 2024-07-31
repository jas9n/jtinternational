<template>
    <div class="w-full flex flex-col justify-center items-center">
        <div id="landing">
            <LandingView />
        </div>
        <div id="about" class="w-full h-auto py-20 flex justify-center items-center z-20 bg-white">
            <div class="flex flex-col items-center justify-center w-2/3 space-y-4">
                <h2 class="font-serif font-medium text-2xl md:text-3xl lg:text-4xl pb-4 text-center">Our Story</h2>
                <p class="text-md md:text-lg lg:text-xl text-center">
                    Located in the heart of the Garment District in New York City, we founded Jag International Trim in 2019. Five years later, we have expanded our presence to fashion brands and garment manufacturers around the world. Together with our dedicated team members in Hong Kong and China, we take a service-centric approach to our everyday work and operate from a place of appreciation of designs and art forms. We believe in the integrity of well-made products, and we have an unwavering commitment to quality, functionality, and the quest for high standards.
                </p>
                <!-- <p class="font-medium text-md md:text-lg lg:text-xl text-center">Let us bring your design visions to life and see how we can meet your needs.</p> -->
            </div>
        </div>
        <div id="sketch" class="w-full h-[60vh] md:h-screen flex justify-center items-center relative" >
            <img id="img1" src="/images/photos/sketch1.jpg" alt="" class="xl:h-full xl:w-auto height-full w-full object-cover absolute">

            <svg class="w-full h-full object-cover" preserve-aspect-ratio="xMidYMid slice">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect id="img2" x="0" y="0" width="30%" height="100%"/>
                    </mask>
                </defs>
                <image href="/images/photos/sketch2.jpg"  x="0" y="0" class="w-full h-full" />
            </svg>
    
        </div>
        <div id="spacer" class="hidden h-[20vh] sm:block sm:h-[40vh] md:h-[70vh]"></div>
        <div id="collection" class="h-screen flex justify-center items-center">
            <img src="/images/photos/collection.jpg" alt="" class="absolute w-full h-full max-h-[60vh] md:max-h-none object-cover"> 
            
            <nuxt-link :to="{ path: 'collection'}">
                <button class=" bg-white text-lg mt-2.5 px-12 py-4 opacity-90 rounded hover:bg-zinc-100 transition-colors duration-300 z-10 absolute ml-20">View Products</button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: "HomePage",
    data() {
        return {
         
        }
    },
    mounted() {
      
      gsap.registerPlugin(ScrollTrigger);
      
      const about = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'center center',
          scrub: 0.2,
        }
      })
      about.fromTo('#landing', {y:0},{y: 200}, 0)
      about.fromTo('#about', {y:0}, {y:0}, 0)

      const sketch = gsap.timeline({
        scrollTrigger: {
          trigger: '#sketch',
          start: 'top top',
          end: 'bottom 300vh',
          pin: '#sketch',
          scrub: 0.3,
        }
      })
    //   sketch.fromTo('#img1', {x:0}, {x:0}, 0)
    //   sketch.fromTo('#img2', {width: '0%'}, {x: '100%'}, 0)
      sketch.fromTo('#img2', {x: '0vw'}, {x: '70vw', ease:'power3.out'}, 0)

      
    },
}
</script>

<style scoped>
mask {
    display: grid;
    place-content: center;
    height: 100vh;
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10;
}

svg rect {
    fill: white;
}

svg > image {
    -webkit-mask: url(#mask);
    mask: url(#mask);
    /* fill: white; */
}

</style>