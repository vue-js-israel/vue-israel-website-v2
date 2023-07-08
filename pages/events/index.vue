<script setup>
import { addURLParams, removeURLParams } from "@/components/utils/urlUtils";
import { events } from "@/content/events.json";

useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const eventsTags = computed(() => {
  return events.map((event) => {
    return event.eventTags;
  })
})

const mergeAndRemoveDuplicates = (arrays) => {
  // Merge arrays into a single array
  const mergedArray = [].concat(...arrays);
  // Remove duplicates using a Set
  return [...new Set(mergedArray)];
}

const selectedTagsFromURL = () => {
  const { fullPath } = useRoute();
  const tagsString = fullPath.split("=")[1];
  return tagsString?.split(",") ?? [];
};

const selectedTags = ref(selectedTagsFromURL());
/**
 * generates an array without duplicates from flattened array
 * and initiate each instance with the title and selected property.
 */
const interactiveTags = () => {
  const tags = mergeAndRemoveDuplicates(eventsTags.value);
  const interactiveTags = tags.map((tag) => {
    const selected = selectedTags.value.includes(tag);

    return {
      title: tag,
      selected,
    };
  });
  return interactiveTags;
};
const eventTags = ref(interactiveTags());

const onTagClickHandler = (tagIndex) => {
  const tag = eventTags.value[tagIndex];
  tag.selected = !tag.selected;
  // When the user selects the Tag it will be added to the selectedTags Array.
  if (tag.selected) {
    selectedTags.value.push(tag.title);
  } else {
    // When the user unselects the Tag it will be removed from the selectedTags Array.
    const tagIndex = selectedTags.value.findIndex((selectedTag) => {
      return selectedTag === tag.title;
    });
    selectedTags.value.splice(tagIndex, 1);
  }

  // Add/Remove tags to/from URL params
  if (selectedTags.value.length > 0) {
    addURLParams("tags", selectedTags.value);
  } else {
    removeURLParams("tags");
  }
};

const onTagEventClickHandler = (eventTag) => {
  const tagIndex = eventTags.value.findIndex(
    (mainTag) => eventTag === mainTag.title
  );
  onTagClickHandler(tagIndex);
};
</script>

<template>
  <main class="py-6 dark:bg-gray-700 dark:text-gray-100">
    <div class="container mx-auto space-y-16 ">

      <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p class="p-2 text-sm font-medium tracki text-center uppercase">Events</p>
        <h1 class="text-4xl font-bold leadi text-center sm:text-5xl">Events of Vue.js Israel</h1>
        <section class="my-5">
          <Tags :tags="eventTags" @tag-click="onTagClickHandler" />
          <EventsEventCard v-for="event in events" :key="event.eventId" :event="event" :selectedTags="selectedTags"
            @tag-click="onTagEventClickHandler" />
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
