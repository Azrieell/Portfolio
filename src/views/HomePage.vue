<template>
  <div class="sm:ml-4 md:ml-6 lg:ml-80 sm:mr-4 md:mr-5 lg:mr-96 sm:mt-8 md:mt-12 lg:mt-36">
    <h3 class="mb-4 font-extrabold text-4xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white sm:mt-6 md:mt-12 sm:ml-2 ml-2" style="font-family: 'Montserrat', sans-serif;">
      Hi, I'm <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{{ typedName }}</span>
      <div
        class="underline underline-offset-2 decoration-8 decoration-blue-400 dark:decoration-blue-600 sm:mt-3 md:mt-7" style="font-family: 'Montserrat', sans-serif;">I
        FrontEnd Developer</div>
    </h3>
    <h3
      class="text-wrap mb-4 text-black dark:text-white md:text-base lg:text-lg text-justify ml-3 sm:mt-6 md:mt-14 mr-5 sm:mr-0">
      I am a student in Bandung, Indonesia, who is interested in becoming a FrontEnd Developer. I have experience in
      designing user interfaces (UI/UX) for various software products. I am very enthusiastic about improving user
      experience through design and always eager to learn new things every day.
    </h3>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@1,300&family=Montserrat:wght@300&display=swap');
</style>

<script>
  export default {
    data() {
      return {
        typedName: '', // Menampilkan teks yang diketik
        name: 'Azriel R Siddiq.', // Teks yang akan diketik
        typingSpeed: 200, // Kecepatan mengetik dalam milidetik (semakin besar nilainya, semakin lambat)
        intervalId: null // ID interval untuk dihentikan nantinya
      };
    },
    mounted() {
      this.startTyping();
    },
    methods: {
      startTyping() {
        let currentIndex = 0;

        this.intervalId = setInterval(() => {
          if (currentIndex <= this.name.length) {
            this.typedName = this.name.slice(0, currentIndex);
            currentIndex++;
          } else {
            currentIndex = 0; // Kembali ke awal setelah selesai
          }
        }, this.typingSpeed);
      }
    },
    beforeUnmount() {
      clearInterval(this.intervalId); // Membersihkan interval saat komponen dihapus
    }
  };
</script>