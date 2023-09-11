<template>
  <section class="text-dark-text-lighter">
    <NuxtLink
      :to="`/events/${event.eventId}`"
      class="my-5 max-w-5xl grid lg:grid-cols-3"
    >
      <div class="col-span-2 rounded lg:flex">
        <NuxtImg provider="cloudinary" :src="event.eventPoster.src" :alt="event.eventPoster.alt"/>
      </div>
      <div
        class="lg:col-span-1 col-span-2 space-y-6 p-6 bg-dark-bg-dark md:flex md:flex-col lg:p-8"
      >
        <Tags :tags="tagsObject" />
        <h2 class="text-3xl font-bold md:flex-1">{{ event.eventTitle }}</h2>
        <div>
          <p class="text-gray-400">{{ event.eventDate }}</p>
          <p class="text-gray-400">{{ event.eventLocationName }}</p>
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
});

const arrayToObject = (array) => {
  return array.reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
};

const tagsObject = arrayToObject(props.event.eventTags);
</script>

<style scoped></style>
