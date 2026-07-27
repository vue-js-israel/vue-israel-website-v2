<template>
  <section class="text-dark-text-lighter">
    <NuxtLink
      :to="`/events/${event.eventId}`"
      class="my-5 grid max-w-5xl lg:grid-cols-3">
      <div class="col-span-2 rounded lg:flex">
        <NuxtImg
          provider="cloudinary"
          :src="event.eventPoster.src"
          :alt="event.eventPoster.alt"
          fetchFormat="auto"
          quality="auto"
          :loading="event.lazyLoad"
          width="1352"
          height="720"
          sizes="560px sm:552px md:680px lg:622px"
          densities="x1 x2" />
      </div>
      <div
        class="col-span-2 space-y-6 bg-dark-bg-dark p-6 md:flex md:flex-col lg:col-span-1 lg:p-8">
        <Tags :tags="event.eventTags" />
        <h2 class="text-3xl font-bold md:flex-1">{{ event.eventTitle }}</h2>
        <div>
          <p class="text-gray-400">{{ event.date }}</p>
          <p class="text-gray-400">{{ event.eventLocationName }}</p>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style scoped></style>
