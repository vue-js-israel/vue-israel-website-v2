<template>
  <section>
    <NuxtLink :to="`/events/${event.eventId}`" class="my-5 max-w-5xl grid lg:grid-cols-3">
      <div class="col-span-2  rounded lg:flex">
        <img :src="event.eventPoster.src" alt="" class="h-auto max-h-96 w-full object-cover dark:bg-gray-500" />
      </div>
      <div class="lg:col-span-1 col-span-2 space-y-6 p-6 dark:bg-dark-second bg-light-second md:flex md:flex-col lg:p-8">
        <EventTags :tags="event.eventTags" :selectedTags="selectedTags" @tag-click="(tag) => {
            emit('tagClick', tag);
          }
          " />
        <h2 class="text-3xl font-bold md:flex-1">{{ event.eventTitle }}</h2>
        <div>
          <p class="dark:text-gray-400">{{ event.eventDate }}</p>
          <p class="dark:text-gray-400">{{ event.eventLocationName }}</p>
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
