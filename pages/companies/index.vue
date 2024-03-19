<template>
   
     <div class="flex justify-center items-center min-h-screen">
    <div class="p-6 rounded-lg ">
    <CompaniesTable class="shadow-md text-white" :data="companies" />
    </div>
  </div>
</template>
<script>

import companies from '@/content/companies.json' ;
export default {
 
  data() {
    return {
      companies,
      tableData: [
        { id: 1, name: 'John', age: 30, country: 'USA' },
        { id: 2, name: 'Alice', age: 25, country: 'Canada' },
        { id: 3, name: 'Bob', age: 35, country: 'UK' },
      ],
      tableColumns: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name', filterable: true },
        { key: 'age', label: 'Age', filterable: true },
        { key: 'country', label: 'Country', filterable: true },
      ]
    };
  }
}
</script>
