<template>
   
     <div class="flex justify-center items-center min-h-screen">
    <div class="p-6 rounded-lg ">
    <CompaniesTable class="shadow-md text-white" :data="companies" />
     <div class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <!-- Loop through companies and display a card for each -->
      <div v-for="company in companies" :key="company.id">
        <CompaniesCard :company="company"/>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script>

import companies from '@/content/companies.json' ;
export default {
 
  data() {
    return {
      companies,
    };
  }
}
</script>
