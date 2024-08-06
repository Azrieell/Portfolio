<template>
  <p id="my-project" class="container mx-auto px-4 lg:px-8 xl:px-60 text-2xl font-bold mt-36 mb-1fade-in"
    style="font-family: 'Montserrat', sans-serif;">MY PROJECT
  </p>

  <p id="my-project" class="container mx-auto px-4 lg:px-8 xl:px-60 text-base text-gray-500 mt-1 mb-6"
    style="font-family: 'Montserrat', sans-serif;">Projects that I worked on
  </p>

  <div class="container mx-auto px-4 lg:px-8 xl:px-60 fade-in">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Card 1 -->
      <div class="flex justify-center fade-in">
        <div
          class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-60 md:w-80 cursor-pointer">
          <a href="#" class="w-full block">
            <img alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              class="max-h-40 w-full object-cover" />
            <div class="bg-white w-full p-4">
              <p class="text-indigo-500 text-2xl font-medium mb-2">
                Should You Get Online Education?
              </p>
              <p class="text-gray-800 text-sm font-medium mb-2">
                A comprehensive guide about online education.
              </p>
              <p class="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having instant access to information at...
                <a class="inline-flex text-indigo-500" href="#">Read More</a>
              </p>
              <div class="flex flex-wrap justify-start items-center py-3 border-b-2 text-xs text-white font-medium">
                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- Card 2 -->
      <!-- Card 3 -->
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // Check visibility on mount
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
        });
      }
    }
  };
</script>