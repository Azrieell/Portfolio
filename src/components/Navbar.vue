<template>
  <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900 justify-items-center">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <a href="#" class="flex items-center">
        <span
          class="self-center font-semibold whitespace-nowrap dark:text-white sm:ml-80 ml-2 sm:mt-9 mt-5 sm:text-2xl text-3xl"
          style="font-family: 'Montserrat', sans-serif;">Azrieeel</span>
      </a>
      <div class="flex items-center lg:order-2">
        <div class="hidden mt-2 mr-4 sm:inline-block">
          <span></span>
        </div>
        <button @click="toggleMobileMenu" type="button"
          class="inline-flex items-center sm:mt-5 mt-5 sm:mr-60 mr-1 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg v-if="!mobileMenuOpen" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div :class="{ 'hidden': !mobileMenuOpen }"
        class="items-center mt-9 justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a @click="scrollToHome" href="#"
              class="block py-2 pl-3 pr-4 text-black text-center bg-white rounded lg:bg-transparent lg:text-black lg:p-0 dark:text-black text-1xl font-bold"
              aria-current="page" style="font-family: 'Montserrat', sans-serif;">HOME</a>
          </li>
          <li>
            <a @click="scrollToProject" href="#"
              class="block py-2 pl-3 pr-4 text-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl font-bold"
              style="font-family: 'Montserrat', sans-serif;">PROJECT</a>
          </li>
          <li>
            <a @click="scrollToAbout" href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 text-center border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl font-bold"
              style="font-family: 'Montserrat', sans-serif;">ABOUT</a>
          </li>
          <li>
            <a @click="scrollToContact" href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 text-center border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl font-bold"
              style="font-family: 'Montserrat', sans-serif;">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        mobileMenuOpen: false
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      scrollToHome() {
        const element = document.getElementById('home'); // Update 'home' with your home section id
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      },
      scrollToProject() {
        const element = document.getElementById('my-project');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      },
      scrollToAbout() {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      },
      scrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@1,300&family=Montserrat:wght@300&display=swap');
</style>