<script setup>
const props = defineProps({
  ctaUrl: {
    type: String,
    default: undefined,
  },
  ctaText: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="bg-cta-base p-6 dark:text-gray-900">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <slot></slot>
        <NuxtLink
          v-if="ctaUrl && ctaText"
          :href="ctaUrl"
          target="_blank"
          class="mt-4 block rounded-md border border-gray-400 bg-gray-50 px-5 py-3 text-gray-900 lg:mt-0"
          >{{ ctaText }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
