<template>
  <div class="flex flex-col rounded-lg bg-dark-bg-dark p-4 text-gray-100">
    <div class="mb-2 flex space-x-4 md:space-x-6">
      <div class="flex items-center justify-center rounded-lg p-2 sm:p-4">
        <IconLink
          :title="platform.name"
          :url="platform.url"
          :icon="platform.icon"
          :iconSize="platform.iconSize" />
      </div>
      <div class="flex flex-col justify-center align-middle">
        <p class="text-3xl font-semibold">{{ platform.currentValue }}</p>
        <p class="capitalize">{{ platform.type }}</p>
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
    },
    x: {
      ticks: {
        color: "white",
      },
    },
  },
};
</script>

<style scoped></style>
