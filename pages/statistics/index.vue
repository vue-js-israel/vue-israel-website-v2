<script setup>
import platforms from "@/content/platforms.json";
import statistics from "@/content/statistics.json";

const platformsInStatistics = platforms.filter((p) =>
  statistics.hasOwnProperty(p.name)
);

const platformsStatistics = platformsInStatistics.map((platform) => ({
  ...platform,
  ...statistics[platform.name],
}));
</script>

<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
    <p class="text-md p-2 text-center font-medium uppercase">Statistics</p>
    <section class="my-6 w-full p-6">
      <div
        class="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <StatisticsCard
          v-for="platform in platformsStatistics"
          :key="platform.title"
          :platform="platform" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
