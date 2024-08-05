<template>
  <div ref="circlesContainer" class="dot-cursor-container">
    <div class="circle" v-for="(circle, index) in circles" :key="index"></div>
  </div>
</template>

<style scoped>
.dot-cursor-container {
  position: fixed;
  /* Tetap di tempat saat scroll */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Memastikan elemen tidak mengganggu interaksi */
  z-index: 9999;
  /* Nilai z-index tinggi untuk memastikan berada di atas */
}

.circle {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s ease;
}
</style>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const circlesContainer = ref(null);
    const coords = { x: 0, y: 0 };
    const circles = Array.from({ length: 10 }, () => ({ x: 0, y: 0, backgroundColor: 'black' }));

    function handleMouseMove(e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    }

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      const circleElements = circlesContainer.value.children;

      Array.from(circleElements).forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circleElements.length - index) / circleElements.length})`;
        circle.style.backgroundColor = circles[index].backgroundColor;

        circles[index].x = x;
        circles[index].y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove);
      animateCircles();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', handleMouseMove);
    });

    return {
      circles,
      circlesContainer,
    };
  },
};
</script>
