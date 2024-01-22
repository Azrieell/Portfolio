<template>
  <div>
    <Navbar></Navbar>
    <HomePage></HomePage>
    <ProjectPage></ProjectPage>
    <Footer></Footer>
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import HomePage from './views/HomePage.vue';
  import ProjectPage from './views/ProjectPage.vue';
  import Footer from './components/Footer.vue';
</script>