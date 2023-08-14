<script setup>
import events from "@/content/events.json";

useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const eventList = Object.entries(events).map(([eventId, event]) => { return { ...event, eventId } })
const eventsTags = eventList.map((event) => event.eventTags)

const tags = computed(() => {
  const mergedArray = [].concat(...eventsTags);
  // Remove duplicates using a Set
  return [...new Set(mergedArray)];
})

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});

const filteredEvents = computed(() => {
  if (selectedTags.value.length > 0) {
    return eventList.filter((event) => {
      return event.eventTags.find((eventTag) => {
        return selectedTags.value.includes(eventTag)
      })
    })
  } else {
    return eventList
  }
})
</script>

<template>
  <div class="container mx-auto space-y-16 ">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <p class="p-2 text-md font-medium tracki text-center uppercase">Events</p>
      <div class="w-full">
        <TagsController :tags="tags" />
      </div>
      <section class="my-5">
        <EventsCard v-for="event in filteredEvents" :key="event.eventId" :event="event" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
