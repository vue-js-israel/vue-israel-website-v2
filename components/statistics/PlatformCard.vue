<template>
  <div class="flex flex-col rounded-lg bg-dark-bg-dark p-6 text-gray-100">
    <div class="mb-2 flex justify-between">
      <div class="flex items-center justify-center gap-1 self-start rounded-lg">
        <IconLink
          :title="platform.name"
          :url="platform.url"
          :icon="platform.icon"
          :iconSize="40" />
        <div class="font-semibold capitalize">{{ platform.name }}</div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-3xl font-semibold">{{ platform.currentValue }}</span>
        <span class="capitalize">{{ platform.type }}</span>
      </div>
    </div>
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
const props = defineProps({
  platform: {
    type: Object,
    default: () => {},
  },
});

const { values = [] } = props.platform || {};

const chartData = {
  labels: values.map((v) => v.date),
  datasets: [
    {
      type: "line",
      data: values.map((v) => v.value),
      borderColor: "#007e4a",
      backgroundColor: "rgba(48, 255, 170, .1)",
      fill: "start",
    },
  ],
};

const chartOptions = {
  datasets: {
    fill: "start",
    line: {
      borderWidth: 3,
    },
  },
  plugins: {
    filler: {
      propagate: true,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        display: false,
      },
    },
  },
};
</script>

<style scoped></style>
