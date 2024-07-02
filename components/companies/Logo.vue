<template>
  
    <img
     
      :width="size"
      :height="size"
      :src="getFaviconURL()"
      :alt="`${domain} Favicon`" />
  
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  domain: { type: String, default: "logo.com" },
  size: { type: Number, default: 16 },
});

const getFaviconURL = () => {
  return `https://www.google.com/s2/favicons?sz=${props.size}&domain=${props.domain}`;
};
</script>

<style scoped>
/* style*/
</style>
