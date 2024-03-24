<template>
  <!--Tabs-->
  <div class="flex min-h-screen">
    <div class=" bg-gray-800 text-gray-100 flex flex-col">
      <a href="#" :class="{ 'border-b border-gray-400': activeTab === 'table', 'active': activeTab === 'table' }" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-400 hover:text-gray-100"  @click="activeTab = 'table'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Table View</span>
      </a>
      <a href="#"  :class="{ 'border-b border-gray-400': activeTab === 'card', 'active': activeTab === 'card' }" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-400 hover:text-gray-100" @click="activeTab = 'card'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Card View</span>
      </a>
      
    </div>

    <!-- Tab content -->
    <div class="flex-1">
      <div v-if="activeTab === 'table'" class="p-6 rounded-lg border border-gray-300" >
        <CompaniesTable class="shadow-md text-white" :data="companies" />
      </div>
      <div v-else-if="activeTab === 'card'" class="p-6 rounded-lg border border-gray-300" >
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div v-for="company in companies" :key="company.id">
            <CompaniesCard :company="company"/>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import companies from '@/content/companies.json';

const activeTab = ref('table');

</script>

<style>

.active {
  background-color: #4b5563; 
  @apply text-gray-100;
}
</style>
