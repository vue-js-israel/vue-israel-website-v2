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
      <div class="my-2 flex gap-1">
        <span
          class="rounded-md bg-gray-200 p-0.5 text-xs"
          v-for="(tag, n) in event.eventTags"
          :key="`tag-key-${tag}-${n}`"
        >
          {{ tag }}
        </span>
      </div>
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
</script>

<style scoped>
</style>
