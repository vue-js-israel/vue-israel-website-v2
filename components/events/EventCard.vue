<template>
  <NuxtLink :to="`${event._path}`">
    <div class="rounded-lg bg-white p-6 shadow-md">
      <h3 class="text-sm font-medium text-gray-500">
        {{ event.date }}
      </h3>
      <h2 class="mb-2 text-xl font-bold text-gray-600">{{ event.title }}</h2>
      <div class="flex items-center">
        <Icon name="mdi:map-marker-outline" />
        <p>{{ event.location }}</p>
      </div>
      <StaticTags :tags="event.eventTags"/>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    require: true,
  },
});

const formattedDate = (date) => {
  const formattedDate = new Date(date);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    timeZoneName: "shortGeneric",
    timeZone: "Asia/Jerusalem",
  };

  return formattedDate.toLocaleString("en-IL", options).toUpperCase();
};
</script>

<style scoped>
.tag-container {
  @apply flex gap-1 my-2;
}

.tag-container .tag {
  @apply rounded-md bg-gray-200 p-0.5 text-xs;
}
</style>
