<template>
  <div :class="`bg-stone-50 p-2 w-${size} h-${size}`">
    <img
      class="mix-blend-multiply"
      :width="16"
      :height="16"
      :src="getFaviconURL()"
      :alt="`${domain} Favicon`" />
  </div>
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
