<script setup>
import platforms from "@/content/platforms.json";
import Card from "@/components/statistics/Card.vue";
import platformsStatistics from "@/content/statistics.json";

const statistics = platforms.map((platform) => ({
  ...platform,
  ...platformsStatistics[platform.name],
}));
</script>

<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
    <p class="text-md p-2 text-center font-medium uppercase">Statistics</p>
    <section class="my-6 p-6">
      <div
        class="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        <Card v-for="stat in statistics" :key="stat.title" :stat="stat" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
