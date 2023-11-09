<template>
  <div class="flex flex-wrap gap-1">
    <span
      v-for="(tag, tagKey) in localTags"
      :key="tagKey"
      class="self-start rounded-full border border-cta-base px-3 py-1 text-sm hover:border-cta-hover"
      :class="{
        'border-cta-hover bg-cta-hover text-dark-bg-dark': tag.isSelected,
      }"
      @click.prevent="tagClick(tagKey)">
      {{ tag.title }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const router = useRouter();

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});

const localTags = computed(() => {
  const tags = {};
  for (const key in props.tags) {
    const title = props.tags[key];
    const isSelected = selectedTags.value.includes(key);
    tags[key] = {
      title,
      isSelected,
    };
  }
  return tags;
});

const tagClick = (tagKey) => {
  const currentSelectedTags = selectedTags.value;
  const isTagSelected = currentSelectedTags.includes(tagKey);

  if (isTagSelected) {
    const tagIndex = currentSelectedTags.findIndex((selectedTag) => {
      return selectedTag === tagKey;
    });
    currentSelectedTags.splice(tagIndex, 1);
  } else {
    currentSelectedTags.push(tagKey);
  }
  const { path } = useRoute();
  // Add/Remove tags to/from URL params
  if (currentSelectedTags.length > 0) {
    const decodedTags = decodeURIComponent(currentSelectedTags);
    router.replace({
      path,
      query: {
        tags: decodedTags,
      },
    });
  } else {
    router.replace({
      path,
    });
  }
};
</script>

<style scoped></style>
