<template>
  <NuxtLink :to="`/events/${event.eventId}`">
    <div class="rounded-lg bg-white p-6 shadow-md">
      <h3 class="text-sm font-medium text-gray-500">
        {{ event.eventDate }}
      </h3>
      <h2 class="mb-2 text-xl font-bold text-gray-600">{{ event.eventTitle }}</h2>
      <div class="flex items-center">
        <Icon name="mdi:map-marker-outline" />
        <p>{{ event.eventLocationName }}</p>
      </div>
      <EventTags
        :tags="event.eventTags"
        :selectedTags="selectedTags"
        @tag-click="
          (tag) => {
            emit('tagClick', tag);
          }
        "
      />
    </div>
  </NuxtLink>
</template>

<script setup>
const emit = defineEmits(["tagClick"]);

const props = defineProps({
  event: {
    type: Object,
    require: true,
  },
  selectedTags : {
    type: Object,
    default: () => [],
  },
});

</script>

<style scoped></style>
