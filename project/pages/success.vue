<template>
    <div class="h-screen w-full flex flex-col justify-center items-center">
        <p>Thank you for your inquiry! We will get back to you shortly!</p>
        <NuxtLink :to="{ name: 'index' }">
            <button>Go Back</button>
        </NuxtLink>
    </div>
</template>