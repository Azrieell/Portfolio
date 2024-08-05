<template>
  <div>
    <HomePage />
    <ProjectPage />
  </div>
</template>

<script>
  import HomePage from "../../components/Main/HomePage.vue";
  import ProjectPage from "../../components/Main/ProjectPage.vue";

  export default {
    components: {
      HomePage,
      ProjectPage
    },

  }
</script>