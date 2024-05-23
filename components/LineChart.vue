<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);
const props = defineProps({
  data: {
    type: Object,
    default: () => ({ labels: [], datasets: [] }),
  },
  options: {
    type: Object,
    default: () => {},
  },
});
</script>
