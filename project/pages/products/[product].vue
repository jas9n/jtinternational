<template>
    <div class="min-h-screen w-full flex justify-center items-center mt-16 lg:mt-10">
        <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <nuxt-link :to="{ name: 'products' }" class="absolute top-[15%] left-[10%]">&#10094; Back</nuxt-link>
            <div class="flex flex-col justify-center items-center">
                <img :src="`/images/collection/${itemStore.items[$route.params.product - 1].photo[index]}.jpg`" :alt="itemStore.items[$route.params.product - 1].photo[0]" class="w-[80vw] max-w-lg">
                <div id="gallery" class="flex items-center justify-center lg:justify-start w-full space-x-2">
                    <div v-for="(photo, index) in itemStore.items[$route.params.product - 1].photo" :key="index" @click="display(index)" class="item cursor-pointer">
                        <img :src="`/images/collection/${photo}.jpg`" :alt="photo" class="w-16 h-16 md:w-20 md:h-20">
                    </div>
                </div>
            </div>
            <div class=" flex flex-col justify-center items-start px-8 max-w-xl pt-6 lg:pt-32">
                <h1 class="font-serif font-medium text-4xl">{{ itemStore.items[$route.params.product - 1].name }}</h1>
                <div class="flex justify-start items-center space-x-6 text-xl font-semibold mt-6 mb-4">
                    <h3 id="desc" class="line">Description</h3>
                    <!-- <h3 id="usage" @click="toggleUsage()" class=" cursor-pointer">Usage</h3> -->
                </div>
                <p>{{ itemStore.items[$route.params.product - 1].desc[index] }}</p>

            </div>
        </div>
    </div>
</template>

<script>
import { useItemStore } from '@/store/index';
 
export default {
    data() {
        return {
            index: 0,
            description: true,
            usage: false
        }
    },
    props: {
        product: String,
    },
    setup() {
        const itemStore = useItemStore()

        return { itemStore }
    },
    methods: {
        display(n) {
            this.index = n
        },
        // toggleDesc() {
        //     this.description = true
        //     this.usage = false
        //     document.querySelector('#desc').classList.add('line')
        //     document.querySelector('#usage').classList.remove('line')
        // },
        // toggleUsage() {
        //     this.usage = true
        //     this.description = false
        //     document.querySelector('#usage').classList.add('line')
        //     document.querySelector('#desc').classList.remove('line')
        // },
        
    },
}
</script>

<style scoped>
.line {
   -webkit-text-decoration: black solid underline;
  text-decoration: black solid underline;
  -webkit-text-underline-position: under;
  text-underline-position: under;
  text-decoration-thickness: 1.6px;
}

</style>