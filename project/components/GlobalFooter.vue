<template>
    <footer>
        <div class="w-full h-[70vh] lg:h-[60vh] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start pt-6 px-12 z-10 bg-white relative">
            <div class="flex flex-col justify-center items-center lg:items-start">
                <img src="/images/logos/logo.svg" alt="JagTrim International" class="h-16 mb-4">
                <div class="flex flex-col justify-center items-start mb-4">
                    <div id="logos" class="w-full flex justify-center items-center lg:justify-start mb-4 space-x-4">
                        <a href="https://www.instagram.com/jagtrimnyc" target="_blank">
                            <img src="/images/logos/ig.png" alt="Instagram" class="h-8">
                        </a>
                        <a href="https://github.com/jas9n/jtinternational" target="_blank">
                            <img src="/images/logos/git.svg" class="h-8" alt="Github">
                        </a>
                    </div>
                    <p class="space-x-4">
                        <span class="font-semibold">Phone</span>
                        <span class="text-zinc-500">(917) 207-7549</span>
                    </p>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=amanda@jagtrim.com" target="_blank" class="space-x-5">
                        <span class="font-semibold">Email</span>
                        <span class="text-zinc-500">amanda@jagtrim.com</span>
                    </a>
                </div>
                <div class="flex flex-col justify-center items-center lg:items-start mb-8">
                    <a href="https://maps.app.goo.gl/Tk7qtMxSP31HzxY5A" target="_blank" class="flex flex-col items-center lg:items-start mb-4">
                        <span class="font-semibold">Head Office</span>
                        <span class="text-zinc-500">315 W 39th St Studio 905</span>
                        <span class="text-zinc-500">New York, NY 10018</span>
                    </a>
                    <p class="flex flex-col items-center lg:items-start">
                        <span class="font-semibold">Branch Office</span>
                        <span class="text-zinc-500">Flat B, 14F Kwai Shing Industrial</span>
                        <span class="text-zinc-500">Building Phase 1, 36-40 Tai Lin</span>
                        <span class="text-zinc-500">Pai Rd, Kwai Chung, Hong Kong</span>
                    </p>
                </div>
            </div>
            <ul class="flex justify-center items-center space-x-8 md:space-x-16 xl:space-x-24 font-semibold lg:pt-20 lg:pr-20 text-center">
                <li><nuxt-link :to="{ name: 'index', hash: '#about' }" class="">About Us</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'products' }" class="">Product Profile</nuxt-link></li>
                
                <li><nuxt-link :to="{ name: 'contact' }" class="">Contact Us</nuxt-link></li>
            </ul>
        </div>
    </footer>
</template>