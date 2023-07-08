<template>
  <!-- <NuxtLink :to="`/events/${event.eventId}`">
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
  </NuxtLink> -->
  <section>
    <NuxtLink :to="`/events/${event.eventId}`" class="grid lg:grid-cols-3 my-5">
      <div class="overflow-hidden rounded lg:flex col-span-3">
        <img :src="event.eventPoster.src" alt=""
          class="object-cover w-full h-auto max-h-96 dark:bg-gray-500">
        <div class="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900">
          <span class="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900">Business</span>
          <h2 class="text-3xl font-bold md:flex-1">{{ event.eventTitle }}</h2>
          <div>
            <p class="dark:text-gray-400">{{ event.eventDate }}</p>
            <p class="dark:text-gray-400">{{ event.eventLocationName }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup>
const emit = defineEmits(["tagClick"]);

const props = defineProps({
  event: {
    type: Object,
    require: true,
  },
  selectedTags: {
    type: Object,
    default: () => [],
  },
});

</script>

<style scoped></style>
