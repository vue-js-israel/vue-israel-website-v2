<script setup>
import { addURLParams, removeURLParams } from '@/components/utils/urlUtils';


useHead({
  title: "Vue.js Israel Events",
  meta: [
    { name: "description", content: "Vus.js Israel's events" },
  ],
});

// get only tags data from `/events`
const { data } = await useAsyncData("eventTags", () => queryContent("events").only(["eventTags"]).find());

// helper function to flatten tags array
const flatten = (tags, key) => {
  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);
  return _tags;
};



const selectedTagsFromURL = () => {
  const { fullPath } = useRoute();
  const tagsString = (fullPath.split('='))[1];
  return tagsString?.split(',') ?? [];
}

const selectedTags = ref(selectedTagsFromURL());
/**
 * generates an array without duplicates from flattened array
 * and initiate each instance with the title and selected property.
 */
const interactiveTags = () => {
  const tags = [...new Set(flatten(data.value, "eventTags"))];
  const interactiveTags = tags.map((tag) => {

    const selected = selectedTags.value.includes(tag);

    return {
      title: tag,
      selected,
    }
  })
  return interactiveTags;
};
const eventTags = ref(interactiveTags())

const onTagClickHandler = (tagIndex) => {
  const tag = eventTags.value[tagIndex]
  tag.selected = !tag.selected
  // When the user selects the Tag it will be added to the selectedTags Array.
  if (tag.selected) {
    selectedTags.value.push(tag.title);
  } else { // When the user unselects the Tag it will be removed from the selectedTags Array.
    const tagIndex = selectedTags.value.findIndex((selectedTag) => {
      return selectedTag === tag.title;
    })
    selectedTags.value.splice(tagIndex, 1);
  }

  // Add/Remove tags to/from URL params
  if (selectedTags.value.length > 0) {
    addURLParams('tags', selectedTags.value)
  } else {
    removeURLParams('tags')
  }
}
</script>

<template>
  <main class="py-5">
    <header class="flex justify-center">
      <div>
        <h1 class="text-5xl font-extrabold">Events</h1>
        <p class="text-lg font-medium">Events of Vus.JS Israel</p>
      </div>
    </header>
    <section class="max-w-xl m-auto py-2">
      <Tags :tags="eventTags" @tag-click="onTagClickHandler" />
      <!-- Render list of all events in ./events using `path` -->
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList path="/events" :query="{
        only: ['title', 'description', 'date', 'location', 'eventTags', '_path'],
        where: {
          eventTags: {
            // filtering through selectedTags
            $contains: selectedTags,
          },
        },
      }">
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="m-auto my-3 flex max-w-md flex-col gap-3">
            <li v-for="event in list" :key="event._path" class="event">
              <EventsEventCard :event="event" />
            </li>
          </ul>
        </template>

        <!-- slot to display message when no content is found -->
        <template #not-found>
          <p>No Events found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped></style>
