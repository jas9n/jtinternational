<template>
    <div class="flex justify-center items-center w-full md:h-screen h-[50vh]">
        <div class="group flex justify-center items-center relative w-[90vw] lg:w-[80vw]">
            <img src="/images/photos/materials.jpg" class="item absolute transition duration-250"/>
            <img src="/images/photos/shelf1.jpg" class="item absolute transition duration-250"/>
            <img src="/images/photos/ceo.jpg" class="item absolute transition duration-250"/>
            <img src="/images/photos/office.jpg" class="item absolute transition duration-250"/>
            <p id="prev" class="opacity-60 md:opacity-0 cursor-pointer text-white absolute left-0 bg-black text-2xl p-3 rounded group-hover:opacity-60 transition duration-250" @click="prev()">&#10094;</p>
            <p id="next" class="opacity-60 md:opacity-0  cursor-pointer text-white absolute right-0 bg-black text-2xl p-3 rounded group-hover:opacity-60 transition duration-250" @click="next()">&#10095;</p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            index: 0,
            count: 4,
        }
    },
    mounted() {
        this.show(this.index)
    },
    methods: {
        show(n) {
            let items = document.querySelectorAll('.item')
            items.forEach((item, i) => {
                item.style.opacity = i === n ? 1 : 0;
                // gsap.from(item, {x: -200, duration: 0.1}, )
            })
        },

        next() {
            this.index += 1
            if (this.index >= this.count) this.index = 0;
            this.show(this.index);

        },

        prev() {
            this.index -= 1
            if (this.index < 0) this.index = this.count - 1;
            this.show(this.index);
        },

    },
}
</script>
