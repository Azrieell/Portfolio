<template>
  <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div class="container mx-auto px-4 lg:px-8 xl:px-60 sm:mb-12 lg:mb-7 mt-7">
      <div class="flex items-center justify-between">
        <!-- Logo and Brand Name -->
        <a href="#" class="flex items-center flex-shrink-0">
          <span
            class="self-center font-semibold whitespace-nowrap dark:text-white ml-2 text-2xl sm:text-3xl mr-8 sm:mr-16"
            style="font-family: 'Montserrat', sans-serif;">
            Azriel
          </span>
        </a>

        <!-- Mobile Menu Button -->
        <div class="flex items-center lg:order-2">
          <button @click="toggleMobileMenu" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

        <!-- Navigation Menu -->
        <div :class="{ 'hidden': !mobileMenuOpen }"
          class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex items-center flex-col mt-0 font-medium lg:flex-row lg:space-x-12">
            <li>
              <a @click="scrollToHome" href="#"
                class="block py-2 px-2 text-black text-center lg:text-left bg-white rounded lg:bg-transparent lg:text-black lg:p-0 dark:text-black text-1xl "
                aria-current="page" style="font-family: 'Montserrat', sans-serif;">HOME</a>
            </li>
            <li>
              <a @click="scrollToContact" href="#"
                class="block py-2 px-2 text-gray-700 text-center lg:text-left border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl "
                style="font-family: 'Montserrat', sans-serif;">SKILLS</a>
            </li>
            <li>
              <a @click="scrollToAbout" href="#"
                class="block py-2 px-2 text-gray-700 text-center lg:text-left border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl "
                style="font-family: 'Montserrat', sans-serif;">PROJECT</a>
            </li>
            <li>
              <a @click="scrollToProject" href="#"
                class="block py-2 px-2 text-center lg:text-left text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-800 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-1xl "
                style="font-family: 'Montserrat', sans-serif;">CERTIFICATION</a>
            </li>
            <li class="lg:ml-6">
              <button type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Download CV
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>

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
        const element = document.getElementById('home');
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