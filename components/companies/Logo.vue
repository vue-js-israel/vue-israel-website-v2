<template>
      <img  :width="props.size" :height="props.size"  :src="getFaviconURL(domain)" :alt="`${domain} Favicon`"  @error="handleError"   />

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  domain: { type: String, default: 'logo.com' },
  size: { type: Number, default: 16 }, 
});

const getFaviconURL = (domain) => {
  return `https://www.google.com/s2/favicons?sz=${props.size}&domain=${domain}`;
};

const handleError = (event) => {
  event.target.src = 'favicon.co'
  cosnole.log("Error")
};
</script>

<style scoped>
/* style*/
</style>
