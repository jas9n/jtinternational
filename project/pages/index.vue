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
        <div id="sketch" class="w-full h-[60vh] md:h-screen flex justify-center items-center">
            <img id="img" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-full h-full object-cover">
            <div id="mask" class="w-1/3 bg-black absolute left-0"></div>
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

    //   const sketch = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '#sketch',
    //       start: 'top top',
    //       end: 'bottom 250vh',
    //       pin: '#sketch',
    //       scrub: 0.2,
    //     }
    //   })
    //   sketch.fromTo('#mask', {width: '0%'}, {width: '100%'}, 0)
    //   sketch.fromTo('#img', {x:0}, {x:0}, 0)

      
    },
}
</script>