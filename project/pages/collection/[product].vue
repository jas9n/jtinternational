<template>
    <div class="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <img :src="`/images/collection/${itemStore.items[$route.params.product - 1].photo[index]}.jpg`" :alt="itemStore.items[$route.params.product - 1].photo[0]" class="w-[80vw] lg:w-[40vw]">
            <div id="gallery" class="flex items-center justify-center lg:justify-start w-full space-x-2">
                <div v-for="(photo, index) in itemStore.items[$route.params.product - 1].photo" :key="index" @click="display(index)" class="item cursor-pointer">
                    <img :src="`/images/collection/${photo}.jpg`" :alt="photo" class="w-20 h-20">
                </div>
            </div>
        </div>
        <div class="h-[40vh] w-[40vw] space-y-6">
            <h1 class="font-serif font-medium text-4xl">{{ itemStore.items[$route.params.product - 1].name }}</h1>
            <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae voluptas maiores eveniet tenetur eaque. Dicta debitis eligendi, odio, quidem veritatis dolor nemo cumque quisquam culpa quod enim aperiam? Reprehenderit?</p>
        </div>
    </div>
</template>

<script>
import { useItemStore } from '@/store/index';
 
export default {
    data() {
        return {
            index: 0,
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
        }
    },
}
</script>