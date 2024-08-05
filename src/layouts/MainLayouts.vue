<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "../components/Main/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>