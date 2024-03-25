<template>
  <div class="flex items-center  bg-gray-100 p-0.5 rounded-full">
  
    <div class=" rounded bg-white rounded-full p-1 border-2 border-gray-300">
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
 const  trimDomain=domain.trim();
  return `https://www.google.com/s2/favicons?sz=${props.size}&domain=${trimDomain}`;
};

</script>

<style scoped>
/* style*/
</style>
