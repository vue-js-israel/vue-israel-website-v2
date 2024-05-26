<template>
  <div :class="`p-2 bg-stone-50 w-${size} h-${size}` ">
      <img  class="mix-blend-multiply" :width="props.size" :height="props.size"  :src="getFaviconURL(domain)" :alt="`${domain} Favicon`"     />
    </div>
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


</script>

<style scoped>
/* style*/
</style>
