<template>
  <div v-if="company" class="container items-center justify-center rounded-lg p-4 py-6">
    <div class="group mx-auto hover: shadow-md hover:shadow-gray-300 hover:border-gray-300 border-transparent border-4  block max-w-sm gap-3 bg-green-300 rounded-lg shadow-md  hover:duration-500 text-dark-text-lightest   lg:grid lg:max-w-full lg:grid-cols-12">

      
      <div class="w-full lg:col-span-3 md:col-span-1 sm:col-span-1  flex items-center justify-center bg-green-300 rounded-lg ">
        <CompaniesLogo
          :domain="company.logo"
          :size="50"
          class="w-50 h-50 rounded-full mr-2"
        />
      </div>

      
      <div class="w-full lg:col-span-9 p-6 flex flex-col justify-center items-center bg-dark-bg-dark rounded-lg">
      
        <h2 class="text-4xl font-bold">{{ company.company }}</h2>
      
        <div class="flex items-center mt-2">
          <a>
            <Icon name="mdi:location" width="2rem" height="2rem" style="color: white"  />
          </a>
          <p class="text-xl dark:text-gray-400 ml-2">{{ company.location }}</p>
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
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  company: {
    type: Object,
    default: null
  }
});
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  text-align: center;
}








</style>
