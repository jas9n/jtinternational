<template>
    <div class="w-full flex flex-col justify-center items-center">
        <div id="landing">
            <LandingView />
        </div>
        <div id="about" class="w-full h-[60vh] flex justify-center items-center z-20 bg-white">
            <div class="flex flex-col items-center justify-center w-2/3 space-y-2">
                <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl pb-2 text-center">Reimagining Button Freedom</h2>
                <p class="text-md md:text-lg lg:text-xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum ad amet natus magni aperiam doloremque temporibus iure quae ullam placeat corporis tempora doloribus, nihil id. Tempore doloremque quaerat sed.
                </p>
            </div>
        </div>
        <div id="sketch" class="w-full h-[60vh] md:h-screen flex justify-center items-center relative" >
            <img id="img1" src="/images/photos/sketch2.jpg" alt="" class=" h-full absolute">

            <svg class="w-full h-full object-cover" preserve-aspect-ratio="xMidYMid slice">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect id="img2" x="0" y="0" width="100%" height="100%"/>
                    </mask>
                </defs>
                <image href="/images/photos/sketch1.jpg"  x="0" y="0" width="100%" height="100%"/>
            </svg>
    
        </div>
        <div id="collection" class="h-screen flex justify-center items-center">
            <p>This is the collection section</p>
        </div>
        <div id="gallery">
            <PhotoGallery />
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
          end: 'bottom 240vh',
          pin: '#sketch',
          scrub: 0.2,
        }
      })
      sketch.fromTo('#img1', {x:0}, {x:0}, 0)
    //   sketch.fromTo('#img2', {width: '0%'}, {x: '100%'}, 0)
      sketch.fromTo('#img2', {x: '0%'}, {x: '490%'}, 0)

      
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