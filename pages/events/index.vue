<script setup>
import events from "@/content/events.json";

useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const eventList = Object.entries(events).map(([eventId, event]) => { return { ...event, eventId } })

const tagsObject = computed(() => {
  const eventTags = eventList.map((event) => event.eventTags)
  const uniqueEventTags = [...new Set(...eventTags)];
  // converts an array to an object
  return uniqueEventTags.reduce((obj, item,) => {
    obj[item] = item;
    return obj;
  }, {});
})

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});


const filteredEvents = computed(() => {
  const sortEventByDate = eventList.sort((eventA, eventB) => {
    return new Date(eventB.eventDate) - new Date(eventA.eventDate)
  })

  if (selectedTags.value.length > 0) {
    return sortEventByDate.filter((event) => {
      return event.eventTags.find((eventTag) => {
        return selectedTags.value.includes(eventTag)
      })
    })
  } else {
    return sortEventByDate
  }
})
</script>

<template>
  <div class="container mx-auto space-y-16 ">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <p class="p-2 text-md font-medium tracki text-center uppercase">Events</p>
      <div class="w-full">
        <TagsController :tags="tagsObject" />
      </div>
      <section class="my-5">
        <EventsCard v-for="event in filteredEvents" :key="event.eventId" :event="event" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
