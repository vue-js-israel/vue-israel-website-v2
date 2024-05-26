<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center rounded-lg bg-dark-bg-dark p-4 py-6 sm:p-10 md:max-w-6xl">
    <div class="flex items-center justify-center gap-4">
      <CompaniesLogo :domain="company.logo" :size="48" />
      <h2
        :class="[
          'text-4xl',
          'text-center',
          { 'text-3xl': company.company.length > 20 },
          'font-bold',
          'text-white',
        ]">
        {{ company.company }}
      </h2>
    </div>
    <div class="mt-2 flex flex-grow items-center">
      <a>
        <Icon
          name="mdi:location"
          width="2rem"
          height="2rem"
          style="color: white" />
      </a>
      <p class="ml-2 text-center text-xl text-white">{{ company.location }}</p>
    </div>
    <div class="mt-4 flex items-center space-x-4">
      <a :href="company.website">
        <Icon name="mdi:web" width="2em" height="2rem" style="color: white" />
      </a>
      <a :href="company.linkedin">
        <Icon
          name="mdi:linkedin"
          width="2rem"
          height="2rem"
          style="color: white" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  company: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
