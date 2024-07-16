<script setup>
import platforms from "@/content/platforms.json";
import platformsStatistics from "@/content/platforms-statistics.json";
import funStatistics from "@/content/fun-statistics.json";

const platformsInStatistics = platforms.filter((p) =>
  platformsStatistics.hasOwnProperty(p.name)
);

const platformsStats = platformsInStatistics.map((platform) => ({
  ...platform,
  ...platformsStatistics[platform.name],
}));
</script>

<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center gap-10 px-8 py-10 lg:px-20 2xl:px-36">
    <p class="text-md p-2 text-center font-medium uppercase">Statistics</p>
    <section class="container mx-auto w-full">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        <StatisticsPlatformCard
          v-for="platform in platformsStats"
          :key="platform.title"
          :platform="platform" />
      </div>
    </section>
    <section class="container mx-auto w-full">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
        <StatisticsFunCard
          v-for="stat in funStatistics"
          :key="stat.value"
          :stat="stat" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
