<template>
  
  <div class="container mx-auto flex flex-col items-center justify-center rounded-lg p-4 py-6 sm:p-10 md:max-w-6xl bg-dark-bg-dark ">
        <div class="flex justify-center items-center  gap-4">
          <CompaniesLogo :domain="company.logo" :size="48" />
          <h2 :class="['text-4xl', { 'text-3xl': company.company.length > 20 }, 'font-bold','text-white']">{{ company.company }}</h2>
        </div>
        <div class="flex flex-grow items-center mt-2">
          <a>
            <Icon name="mdi:location" width="2rem" height="2rem" style="color: white" />
          </a>
          <p class="text-xl text-white ml-2">{{ company.location }}</p>
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <a :href="company.website">
            <Icon name="mdi:web" width="2em" height="2rem" style="color: white" />
          </a>
          <a :href="company.linkedin">
            <Icon name="mdi:linkedin" width="2rem" height="2rem" style="color: white" />
          </a>
        </div>
      
</div>

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  company: {
    type: Object,
    default: ()=>{}
  }
});
</script>

<style scoped>

</style>
