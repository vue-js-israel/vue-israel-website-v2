<script setup>
// import icon
// import { TagIcon } from "@heroicons/vue/solid";

// tag list state
const expanded = ref(false);

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

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// get only tags data from `/events`
const { data } = await useAsyncData("tags", () => queryContent("events").only(["tags"]).find());

// generate array without duplicates from flattened array
const eventTags = [...new Set(flatten(data.value, "tags"))];
</script>
<template>
  <div class="tag-list">
    <!-- Button to toggle expand -->
    <button @click="toggleExpand" class="cta w-icon">
        <Icon name="mdi:tag-outline" />
        <span>Tags</span>
    </button>
    <ul class="event-tags" :class="{ expanded: expanded }">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in eventTags" :key="n" class="tag">
        <NuxtLink :to="`/events/tags/${tag}`" class="font-semibold"> {{ tag }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tag-list {
  @apply flex items-center gap-2 p-2 rounded-lg;
}
.event-tags {
    @apply grid grid-cols-4 transition-all max-w-0 overflow-hidden;
  /* @apply transition-all max-w-0 max-h-10 overflow-hidden flex flex-row justify-center content-center; */
}
.event-tags.expanded {
  @apply max-w-full;
}
</style>