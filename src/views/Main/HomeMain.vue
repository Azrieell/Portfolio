<template>
  <div>
    <HomePage />
    <Skills />
    <ProjectPage />
  </div>
</template>

<script>
  import HomePage from "../../components/Main/HomePage.vue";
  import Skills from "../../components/Main/Skills.vue";
  import ProjectPage from "../../components/Main/ProjectPage.vue";

  export default {
    components: {
      HomePage,
      Skills,
      ProjectPage
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
        });
      }
    }
  }
</script>