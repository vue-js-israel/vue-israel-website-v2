<template>
  <div class="flex flex-wrap gap-1">
    <span v-for="(tag, index) in tags"
      class="self-start rounded-full px-3 py-1 text-sm border border-cta-base hover:border-cta-hover"
      :class="{ 'bg-cta-hover border-cta-hover text-dark-bg-dark': isTagSelected(tag, index) }" :key="tag"
      @click.stop.prevent="tagClick(tag, index)">
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => {
      return [];
    },
  }
});

const router = useRouter();

const isTagSelected = (tag, index) => {
  let tagKey = tag
  if (!Array.isArray(props.tags)) {
    tagKey = index
  }
  return selectedTags.value.includes(tagKey);
}

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});

const tagClick = (tag, index) => {
  let tagKey = tag
  if (!Array.isArray(props.tags)) {
    tagKey = index
  }


  const currentSelectedTags = selectedTags.value

  const isTagSelected = currentSelectedTags.includes(tagKey)

  if (isTagSelected) {
    const tagIndex = currentSelectedTags.findIndex((selectedTag) => {
      return selectedTag === tagKey;
    });
    currentSelectedTags.splice(tagIndex, 1);
  } else {
    currentSelectedTags.push(tagKey)
  }
  const { path } = useRoute();
  // Add/Remove tags to/from URL params
  if (currentSelectedTags.length > 0) {
    const decodedTags = decodeURIComponent(currentSelectedTags)
    router.replace({ path, query: { 'tags': decodedTags } })
  } else {
    router.replace({ path })
  }
};
</script>

<style scoped></style>
