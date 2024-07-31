<template>
    <div id="contact">
      <div class="w-full h-screen flex justify-center items-center">
          <img src="/images/photos/button.jpg" alt="Big Yellow Button" class="absolute w-full h-full object-cover">
          <div class="flex flex-col justify-center items-center bg-white w-[90vw] max-w-[35rem] h-[70vh] sm:h-[80vh] p-8 z-10 rounded-lg opacity-95 mt-[5%]">
            <h2 class="font-serif font-semibold text-xl sm:text-2xl  mb-2">Interested in partnering with us?</h2>
            <p class="mb-4 text-md sm:text-lg">Get in touch with our team to learn more.</p>
            <form @submit.prevent="sendEmail" class="w-full sm:w-[85%] flex flex-col justify-center items-center">
              <input v-model="emailData.name" class="block py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" name="name" type="text" placeholder="Name" required/>

              <input v-model="emailData.email" class="block py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" name="email" type="text" placeholder="Email" required/>

              <textarea v-model="emailData.message"  class="block h-48 sm:h-60 py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" name="message" type="text" placeholder="Message" required/>
          
              <button @click="redirect()" type="submit" class=" bg-orange-400 mt-2.5 px-8 py-3 rounded hover:bg-orange-500 transition-colors duration-300">Contact Us</button>
            </form>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      emailData: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    async sendEmail() {
      try {
        await $fetch("https://5equ0zbhib.execute-api.us-east-2.amazonaws.com/production/sendemail", {
          method: "POST",
          // headers: {
          //   "Access-Control-Allow-Headers": "Content-Type",
          //   "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          // },
          body: {
            "name": this.emailData.name,
            "email": this.emailData.email,
            "message": this.emailData.message
          },
        })
      } catch(err) {
        console.log(err)
      }
    },

    async redirect() {
      try {
          await navigateTo('/success')
        } catch(err) {
          console.log(err)
        }
    }
  }
}
</script>
  
  