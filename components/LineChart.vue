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
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  options: {
    type: Object,
    default: () => {},
  },
});
</script>
