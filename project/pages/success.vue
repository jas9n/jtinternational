<template>
    <div class="h-screen w-full flex flex-col justify-center items-center">
        <h1 class="font-serif font-medium text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center mb-4">
            <span>Thank you for your inquiry!</span> 
            <span>We will get back to you shortly.</span>
        </h1>
        <NuxtLink :to="{ name: 'index' }">
            <button class=" bg-orange-400 mt-2.5 px-8 py-3 rounded hover:bg-orange-500 transition-colors duration-300">Go Back</button>
        </NuxtLink>
    </div>
</template>