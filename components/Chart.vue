<template>
  <ClientOnly>
    <apexchart type="area" :options="chartOptions" :series="series" />
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  chartOptions: {
    type: Object,
    default: () => ({}),
  },
  series: {
    type: Array,
    default: () => [],
  },
});
</script>
