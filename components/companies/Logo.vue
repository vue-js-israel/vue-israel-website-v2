<template>
  <div class="flex items-center space-x-3 bg-gray-100 p-1 rounded-full">
    <img :src="getFaviconURL(domain)" :alt="`${domain} Favicon`" :width="size" :height="size" class="rounded-full border-2 border-green-400 shadow-md">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  domain: { type: String, default: 'logo.com' },
  size: { type: Number, default: 32 }, // Default size of the favicon
});

// Function to generate the favicon URL
const getFaviconURL = (domain) => {
  // Construct the favicon URL using the domain
  return `https://www.google.com/s2/favicons?sz=${props.size}&domain=${domain}`;
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
