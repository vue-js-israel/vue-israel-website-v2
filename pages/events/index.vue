<script setup>
// import { addURLParams, removeURLParams } from "@/components/utils/urlUtils";
import { events } from "@/content/event.json";

useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const eventCardData = computed(() => {
  return events.map((event) => {
    return {
      eventId: event.eventId,
      eventDate: event.eventDate,
      eventLocationName: event.eventLocationName,
      eventTags: event.eventTags,
      eventTitle: event.eventTitle,
    };
  });
});

// const { data: data1 } = await useAsyncData(() =>
//   queryContent("/").where({ _path: "/event", 'events.eventTags':{$ne:[]} }).only(["events"]).findOne()
// );
// const { data } = await useAsyncData(() => queryContent("/").where({ _path: "/event"}).only(["events"]).find());

// const events = computed(() => {
//   return data1.value.events;
// });

// const eventsTags = computed(() => {
//   const eventsTags = events.value.map((event) => {
//     return { eventTags: [...event.eventTags] };
//   });
//   return eventsTags;
// });

// get only tags data from `/events`
// const { data } = await useAsyncData("eventTags", () =>
//   queryContent("events").only(["eventTags"]).find()
// );

// helper function to flatten tags array
// const flatten = (tags, key) => {
//   let _tags = tags
//     .map((tag) => {
//       let _tag = tag;
//       if (tag[key]) {
//         let flattened = flatten(tag[key]);
//         _tag = flattened;
//       }
//       return _tag;
//     })
//     .flat(1);
//   return _tags;
// };

// const selectedTagsFromURL = () => {
//   const { fullPath } = useRoute();
//   const tagsString = fullPath.split("=")[1];
//   return tagsString?.split(",") ?? [];
// };

// const selectedTags = ref(selectedTagsFromURL());
// /**
//  * generates an array without duplicates from flattened array
//  * and initiate each instance with the title and selected property.
//  */
// const interactiveTags = () => {
//   const tags = [...new Set(flatten(eventsTags.value, "eventTags"))];
//   const interactiveTags = tags.map((tag) => {
//     const selected = selectedTags.value.includes(tag);

//     return {
//       title: tag,
//       selected,
//     };
//   });
//   return interactiveTags;
// };
// const eventTags = ref(interactiveTags());

// const onTagClickHandler = (tagIndex) => {
//   const tag = eventTags.value[tagIndex];
//   tag.selected = !tag.selected;
//   // When the user selects the Tag it will be added to the selectedTags Array.
//   if (tag.selected) {
//     selectedTags.value.push(tag.title);
//   } else {
//     // When the user unselects the Tag it will be removed from the selectedTags Array.
//     const tagIndex = selectedTags.value.findIndex((selectedTag) => {
//       return selectedTag === tag.title;
//     });
//     selectedTags.value.splice(tagIndex, 1);
//   }

//   // Add/Remove tags to/from URL params
//   if (selectedTags.value.length > 0) {
//     addURLParams("tags", selectedTags.value);
//   } else {
//     removeURLParams("tags");
//   }
// };

// const onTagEventClickHandler = (eventTag) => {
//   const tagIndex = eventTags.value.findIndex(
//     (mainTag) => eventTag === mainTag.title
//   );
//   onTagClickHandler(tagIndex);
// };
</script>

<template>
  <main class="py-5">
    <header class="flex justify-center">
      <div>
        <h1 class="text-5xl font-extrabold">Events</h1>
        <p class="text-lg font-medium">Events of Vus.JS Israel</p>
      </div>
    </header>
    <section class="m-auto max-w-xl py-2">
      <div v-for="event in eventCardData" :key="event.eventId">
        <EventsEventCard
          :event="event"
          :selectedTags="[]"
          @tag-click="onTagEventClickHandler"/>
      </div>
      <!-- <Tags :tags="eventTags" @tag-click="onTagClickHandler" /> -->
    </section>
  </main>
</template>

<style scoped></style>
