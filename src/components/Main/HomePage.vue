<template>
  <div class="container mx-auto px-4 lg:px-8 xl:px-60 mt-16 md:mt-24 lg:mt-32 fade-in" ref="mainContainer">
    <div class="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <h3
        class="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 leading-tight"
        style="font-family: 'Montserrat', sans-serif;">
        Hi, I'm <span class="bg-yellow-200 px-2">{{ typedName }}</span>
      </h3>
      <h2
        class="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-2 sm:mt-4 md:mt-6 lg:mt-8 leading-tight"
        style="font-family: 'Montserrat', sans-serif;">
        I <span class="highlight px-2">FrontEnd</span> Developer.
      </h2>
      <h3 class="text-wrap mb-4 text-black dark:text-white md:text-base lg:text-lg text-justify sm:mt-6 md:mt-14">
        I am a student in Bandung, Indonesia, who is interested in becoming a FrontEnd Developer. I have experience in
        designing user interfaces (UI/UX) for various software products. I am very enthusiastic about improving user
        experience through design and always eager to learn new things every day.
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        typedName: '',
        name: 'Azriel',
        typingSpeed: 200,
        intervalId: null
      };
    },
    mounted() {
      this.startTyping();
      this.addScrollEvent();
      this.fadeInOnLoad();
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      startTyping() {
        let currentIndex = 0;

        this.intervalId = setInterval(() => {
          if (currentIndex <= this.name.length) {
            this.typedName = this.name.slice(0, currentIndex);
            currentIndex++;
          } else {
            currentIndex = 0;
          }
        }, this.typingSpeed);
      },
      handleScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
        });
      },
      addScrollEvent() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Check visibility on mount
      },
      fadeInOnLoad() {
        const container = this.$refs.mainContainer;
        if (container) {
          // Trigger fade-in effect
          container.classList.add('is-visible');
          setTimeout(() => {
            // Remove fade-in class after animation completes
            container.classList.remove('fade-in');
          }, 600); // Duration of the fade-in effect
        }
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .highlight {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #021526;
    position: relative;
    transition: color 0.3s, text-shadow 0.3s;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .highlight:hover {
    background-color: #BEDC74;
    color: #000;
    text-shadow: none;
  }

  .highlight::before {
    content: 'FrontEnd';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: transparent;
    transition: color 0.3s;
    z-index: -1;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .highlight:hover::before {
    content: '';
  }
</style>