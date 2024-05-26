<template>
  <div class="container items-center justify-center p-4 sm:p-10 ">
    <p class="text-md p-2 text-center font-medium uppercase">Companies</p>

<section class=" container flex items-center justify-center my-5">
  <label for="toggle-tabs" class="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-100">
    <input id="toggle-tabs" v-model="activeTab" type="checkbox" class="hidden peer">
    <span class="px-4 py-2 rounded-l-md bg-green-500 peer-checked:bg-gray-700">Card View</span>
    <span class="px-4 py-2 rounded-r-md bg-gray-700 peer-checked:bg-green-500">Table View</span>
  </label>
</section>


<section v-if="activeTab" class="my-5 ">
  <CompaniesTable :data="companies" />
</section>
<div v-else  class=" my-5 grid-cols-1  inline-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6 ">
    <template v-for="company in companies" :key="company.id">

 <CompaniesCard :company="company" />
 </template>
</div>
</div>

</template>

<script setup>
import { ref } from 'vue'
import companies from '@/content/companies.json';
const activeTab = ref(true);


 
</script>

<style scoped>

</style>
