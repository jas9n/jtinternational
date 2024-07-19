<template>
    <div id="collection" class="w-full mt-24 flex flex-col justify-center items-center relative">
      <!-- <img src="../assets/images/logos/monogram3.svg" alt="" class="fixed top-0 w-full"> -->
      <div class="grid grid-cols-3 gap-8 place-items-center">
          <div id="product" v-for="item in itemStore.items" :key="item.id">
              <ProductCard :item="item.name" :id="item.id" :photo="item.photo[0]"></ProductCard>
          </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useItemStore } from '@/store/index'; 

export default {
    data() {
        return {
        }
    },
    setup() {
        const itemStore = useItemStore()
        return {itemStore}
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

      const collection = gsap.timeline({
        scrollTrigger: {
          trigger: '#collection',
          start: 'top bottom',
        }
      })

      collection.from('#product', {y: -30, opacity: 0.3, stagger: 0.1})
    },

}
</script>