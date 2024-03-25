<template>
  <!--Tabs-->
  <div class="flex min-h-screen">
    <div class="bg-gray-800 text-gray-100 flex flex-col items-center" >
      <a href="#" :class="{ 'border-b border-gray-400': activeTab === 'table', 'active': activeTab === 'table' }" class="flex  items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-400 hover:text-gray-100"  @click="activeTab = 'table'">
        <a>
         <Icon name="bi:table" width="1.2rem" height="1.2rem"  style="color: white" />
        </a>
        <span>Table View</span>
      </a>
      <a href="#"  :class="{ 'border-b border-gray-400': activeTab === 'card', 'active': activeTab === 'card' }" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-400 hover:text-gray-100" @click="activeTab = 'card'">
        <a>
        <Icon name="bi:card-list" width="1.2rem" height="1.2rem"  style="color: white" />
          </a>
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
