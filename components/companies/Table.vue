<template>
  <div>
    <table class="shadow-md shadow-gray-300 rounded-lg overflow-hidden bg-dark-bg-dark ">
      <thead>
        
        <tr>
          <th v-for="column in visibleColumns" :key="column.key" class="table-header   text-sm text-cta-base border-2 border-green-300 bg-dark-bg-dark ">
            {{ column.label }}
            <input v-if="column.filterable" v-model="filters[column.key]" type="text" placeholder="Filter..." class="filter-input ml-2 p-1 ring-offset-gray-300  rounded-lg border-2 border-green-300 focus:outline-none focus:border-green-500 shadow-md transition transform hover:transition-all">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredData.length === 0" class="table-row border bg-dark-bg-dark border-green-300">
          <td :colspan="visibleColumns.length" class="text-xl text-center py-4">
            No matching data found.
          </td>
        </tr>
        <tr v-for="(row, index) in filteredData" :key="index" class="table-row border bg-dark-bg-dark border-green-300">
          <td v-for="column in visibleColumns" :key="column.key" class="table-data border-2 border-green-300 py-2 px-2 text-sm text-center">
           
            <template v-if="column.key === 'company'">
                <div class="flex items-center">
                <CompaniesLogo :domain="row['logo']" :size="24"></CompaniesLogo>
                <span class="ml-2">{{ row[column.key] }}</span>
              </div>
            </template>
           
            <template v-else-if="column.key === 'website' || column.key === 'linkedin'">
              <a :href="row[column.key]" class="underline hover:text-cta-hover">{{ row[column.key] }}</a>
            </template>
           
            <template v-else>
              {{ row[column.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filters = ref({});

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const columns = [
  { key: 'company', label: 'Company', filterable: true },
  { key: 'website', label: 'Website' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'location', label: 'Location', filterable: true },
];

// Filter out empty columns
const visibleColumns = computed(() => {
  return columns.filter(column => props.data.some(row => row[column.key] !== undefined));
});

const filteredData = computed(() => {
  if (Object.values(filters.value).every(filter => filter === '')) {
    // No search query and all filters are empty, return original data
    return props.data;
  }

  let filteredData = props.data;

 
  for (let key in filters.value) {
    const filterValue = filters.value[key].toLowerCase();
    if (filterValue) {
      filteredData = filteredData.filter(row =>
        row[key].toString().toLowerCase().includes(filterValue)
      );
    }
  }

  return filteredData;
});
</script>

<style scoped>

.table-header,
.table-data {
  padding: 8px;
}

.filter-input {
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

/*space icon-company*/
.table-data .flex .ml-2 {
  margin-left: 8px;
}
.filter-input:focus {
  border-color: #2D3748;
  box-shadow: 0 0 0 1px #2D3748;
}
</style>
