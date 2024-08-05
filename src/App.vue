<template>
  <div class="relative">
    <transition name="fade">
      <Loading v-if="showLoading" key="loading" />
    </transition>

    <transition name="fade">
      <DotCursor v-if="!showLoading" key="dot-cursor" />
    </transition>

    <transition name="fade">
      <router-view v-if="!showLoading" key="router-view" />
    </transition>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref,
    onMounted
  } from 'vue';
  import Loading from './components/Main/Loading.vue';
  import DotCursor from './components/DotCursor.vue';

  export default defineComponent({
    components: {
      Loading,
      DotCursor,
    },
    setup() {
      const showLoading = ref(true);

      onMounted(() => {
        setTimeout(() => {
          showLoading.value = false;
        }, 3000); 
      });

      return {
        showLoading
      };
    },
  });
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
  }
</style>