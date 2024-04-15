<script setup>
import platforms from "@/content/platforms.json";

const platformsNames = platforms.map((platform) => platform.name);
</script>
<template>
  <footer
    class="h-60 min-h-fit border-t-2 border-t-light-bg-lighter bg-dark-bg-dark text-dark-text-lightest dark:border-t-dark-bg-dark">
    <div
      class="container mx-auto flex flex-col justify-center divide-gray-400 p-4 md:p-8 lg:flex-row">
      <div class="flex flex-col justify-center pt-6 lg:pt-0">
        <div class="flex justify-center gap-6 space-x-4">
          <IconLink
            v-for="platform in platformsNames"
            :key="platform"
            :platformName="platform" />
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[100px_auto_100px]">
      <div class="hidden items-center px-8 md:flex">
        <ColorMode />
      </div>
      <div class="py-6 text-center text-sm dark:text-gray-400">
        <p class="text-xl font-bold">Official Vue.js Israel Community</p>
        <span
          >Built with 💚 by
          <a href="https://www.linkedin.com/in/alex-nechayev/" target="_blank"
            >Alex Nechayev</a
          >
          &
          <a href="https://www.linkedin.com/in/dimshik100" target="_blank"
            >Dima Vishnevetsky</a
          ></span
        >
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
