<template>
  <div class="flex items-center  bg-gray-100 p-0.5 rounded-full">
  
    <div class=" rounded bg-white rounded-full p-1 border-2 border-gray-300">
      <!-- Favicon image -->
      <img :src="getFaviconURL(domain)" :alt="`${domain} Favicon`" class="rounded-full" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  domain: { type: String, default: 'logo.com' },
  size: { type: Number, default: 16 }, 
});

// Function to generate the favicon URL
const getFaviconURL = (domain) => {
  // Construct the favicon URL using the domain
  return `https://www.google.com/s2/favicons?sz=${props.size}&domain=${domain}`;
};

// Computed property to determine image classes based on screen size
const getImageClasses = () => {
  return `rounded-full border-2 border-green-400 shadow-md `;
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
