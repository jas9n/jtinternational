
<template>
    <div id="contact">
      <div class="w-full h-screen flex justify-center items-center">
          <img src="/images/photos/button.svg" alt="Big Yellow Button" class="absolute w-full h-full object-cover">
          <div class="flex flex-col justify-center items-center bg-white w-[90vw] max-w-[35rem] h-[70vh] sm:h-[80vh] p-8 z-10 rounded-lg opacity-95 mt-12">
            <h2 class="font-serif font-semibold text-xl sm:text-2xl  mb-2">Interested in partnering with us?</h2>
            <p class="mb-4 text-md sm:text-lg">Get in touch with our team to learn more.</p>
            <form class="w-full sm:w-[85%] flex flex-col justify-center items-center">
              <FormInput name="name" type="text" placeholder="Name" size="sm"/>
              <FormInput name="email" type="text" placeholder="Email" size="sm"/>
              <FormInput name="message" type="text" placeholder="Message" size="lg"/>
              <button type="submit" class=" bg-orange-400 mt-2.5 px-8 py-3 rounded hover:bg-orange-500 transition-colors duration-300">Contact Us</button>
            </form>
          </div>
      </div>
    </div>
  </template>
  
  