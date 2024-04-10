<template>
  <div class="flex flex-col rounded-lg bg-dark-bg-dark p-4 text-gray-100">
    <div class="flex space-x-4 md:space-x-6">
      <div class="flex items-center justify-center rounded-lg p-2 sm:p-4">
        <IconLink :platformName="stat.name" />
      </div>
      <div class="flex flex-col justify-center align-middle">
        <p class="text-3xl font-semibold">{{ stat.currentValue }}</p>
        <p class="capitalize">{{ stat.type }}</p>
      </div>
    </div>
    <Chart :series="series" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import Chart from "@/components/Chart.vue";
import IconLink from "@/components/IconLink.vue";

const props = defineProps({
  stat: {
    type: Object,
    require: true,
    default: () => {},
  },
});

const { label, values } = props.stat;

const series = [
  {
    name: label,
    data: values.map((value) => value.value),
  },
];

const chartOptions = computed(() => {
  return {
    chart: {
      height: 200,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      show: false,
    },
    colors: ["#00DE80"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      row: {
        opacity: 0.5,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: values.map((value) => value.date),
      labels: {
        style: {
          colors: "#fff",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
  };
});
</script>

<style scoped></style>
