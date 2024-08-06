<template>
  <p id="my-project" class="container mx-auto px-4 lg:px-8 xl:px-60 text-2xl font-bold mt-36 fade-in"
    style="font-family: 'Montserrat', sans-serif;">Skills
  </p>
  <p id="my-project" class="container mx-auto px-4 lg:px-8 xl:px-60 text-base text-gray-500 mt-4"
    style="font-family: 'Montserrat', sans-serif;">The technology I used to create the project
  </p>

  <div class="container mx-auto px-4 lg:px-8 xl:px-60 mt-6 md:mt-10 lg:mt-6 fade-in">
    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <!-- HTML Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('HTML'), 'bg-[#e44b23]': isHovered('HTML') }"
          @mouseover="hoverSkill('HTML')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- CSS Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('CSS'), 'bg-[#1572B6]': isHovered('CSS') }"
          @mouseover="hoverSkill('CSS')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- JavaScript Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('JavaScript'), 'bg-[#f7e02d]': isHovered('JavaScript') }"
          @mouseover="hoverSkill('JavaScript')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- Vue Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('Vue'), 'bg-[#42b883]': isHovered('Vue') }"
          @mouseover="hoverSkill('Vue')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- Tailwind CSS Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('Tailwind'), 'bg-[#38bdf8]': isHovered('Tailwind') }"
          @mouseover="hoverSkill('Tailwind')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind CSS"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- Bootstrap Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('Bootstrap'), 'bg-[#563d7c]': isHovered('Bootstrap') }"
          @mouseover="hoverSkill('Bootstrap')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/ios/50/000000/bootstrap.png" alt="Bootstrap"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- MySQL Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('MySQL'), 'bg-[#00758f]': isHovered('MySQL') }"
          @mouseover="hoverSkill('MySQL')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- Node.js Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('Node.js'), 'bg-[#68a063]': isHovered('Node.js') }"
          @mouseover="hoverSkill('Node.js')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- Laravel Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('Laravel'), 'bg-[#ff2d20]': isHovered('Laravel') }"
          @mouseover="hoverSkill('Laravel')" @mouseleave="hoverSkill(null)">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png"
            alt="Laravel" class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>

      <!-- PHP Skill Card -->
      <div class="relative group overflow-hidden transition-transform transform hover:scale-105">
        <div
          class="w-full h-32 flex items-center justify-center bg-white border-2 border-gray-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          :class="{ 'border-black': !isHovered('PHP'), 'bg-[#8993be]': isHovered('PHP') }"
          @mouseover="hoverSkill('PHP')" @mouseleave="hoverSkill(null)">
          <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="PHP"
            class="w-20 h-20 object-cover transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hoveredSkill: null
      };
    },
    methods: {
      hoverSkill(skillName) {
        this.hoveredSkill = skillName;
      },
      isHovered(skillName) {
        return this.hoveredSkill === skillName;
      }
    }
  };
</script>

<style scoped>
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>