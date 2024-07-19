<template>
    <div class="h-screen w-full flex justify-center items-center">
        <div >
            <img :src="`/images/collection/${itemStore.items[$route.params.product - 1].photo[0]}.svg`" alt="">
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
    props: {
        product: String,
    },
    setup() {
        const itemStore = useItemStore()

        return { itemStore }
    }
}
</script>