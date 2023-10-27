<script setup>
import rawEvents from "@/content/events.json";

useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const rawEventsArray = Object.entries(rawEvents).map(([eventId, event]) => {
  return { ...event, eventId };
});

const convertArrayToObject = (array) => {
  return array.reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
};

const tagsObject = computed(() => {
  const eventTagsArray = rawEventsArray.map((event) => event.eventTags);
  const flattenEventTags = eventTagsArray.flat();
  const uniqueEventTags = [...new Set(flattenEventTags)];
  uniqueEventTags.sort((tagA, tagB) => tagA.localeCompare(tagB));

  const tagsObject = convertArrayToObject(uniqueEventTags);
  return tagsObject;
});

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});

const sortEventsByDateInDescendingOrder = (events) => {
  return events.sort((eventA, eventB) => {
    return new Date(eventB.eventDate) - new Date(eventA.eventDate);
  });
};

const filterEventBySelectedTags = (events, selectedTags) => {
  return events.filter((event) => {
    return event.eventTags.find((eventTag) => {
      return selectedTags.includes(eventTag);
    });
  });
};

const addLazyLoadingPropertyToEvents = (events) => {
  /**
   * Adds lazy loading property to each event object for lazy loading
   * When the first one gets undefined, it ensures that the event loaded above the fold.
   */
  return events.map((event, index) => {
    return {
      ...event,
      lazyLoad: index === 0 ? undefined : "lazy",
    };
  });
};

const events = computed(() => {
  const sortedEvents = sortEventsByDateInDescendingOrder(rawEventsArray);
  const eventsToDisplay =
    selectedTags.value.length > 0
      ? filterEventBySelectedTags(sortedEvents, selectedTags.value)
      : sortedEvents;

  return addLazyLoadingPropertyToEvents(eventsToDisplay);
});
</script>

<template>
  <div class="container mx-auto space-y-16">
    <div
      class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
      <p class="text-md p-2 text-center font-medium uppercase">Events</p>
      <div class="w-full">
        <TagsController :tags="tagsObject" />
      </div>
      <section class="my-5">
        <EventsCard
          v-for="event in events"
          :key="event.eventId"
          :event="event" />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
