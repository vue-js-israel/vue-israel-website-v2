<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  subTitleBold: {
    type: String,
    required: false,
    default: "",
  },
  ctaLink: {
    type: String,
    required: true,
  },
  ctaTextContent: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-cta-base p-6 dark:text-gray-900">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <h2 class="text-center text-5xl font-bold md:text-4xl">
          {{ title }}
        </h2>
        <div class="space-x-2 py-2 text-center lg:py-0">
          <span>{{ subTitle }}</span>
          <span class="text-lg font-bold">{{ subTitleBold }}</span>
        </div>
        <NuxtLink
          :href="ctaLink"
          target="_blank"
          class="mt-4 block rounded-md border border-gray-400 bg-gray-50 px-5 py-3 text-gray-900 lg:mt-0"
          >{{ ctaTextContent }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
