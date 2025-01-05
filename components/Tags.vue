<template>
  <div class="flex flex-wrap gap-1">
    <component
      :is="props.isClickable ? 'button' : 'span'"
      v-for="(tag, key) in tags"
      :key="key"
      class="tag"
      :class="getTagClasses(tag)"
      @click.prevent="props.isClickable && tagClick(tag)">
      {{ tag }}
    </component>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => {
      return [];
    },
  },
  isClickable: {
    type: Boolean,
    default: true,
  },
});
const { selectedTags } = useSelectedTags();
const router = useRouter();

const isSelected = (tag) => {
  return selectedTags.value.includes(tag);
};

const getTagClasses = (tag) => ({
  "border-cta-hover bg-cta-hover text-dark-bg-dark": isSelected(tag),
  clickable: props.isClickable,
});

const tagClick = (tagKey) => {
  const tagSelectedIndex = selectedTags.value.findIndex(
    (selectedTag) => selectedTag === tagKey
  );

  if (tagSelectedIndex !== -1) {
    selectedTags.value.splice(tagSelectedIndex, 1);
  } else {
    selectedTags.value.push(tagKey);
  }

  const { path } = useRoute();
  // Add/Remove tags to/from URL params
  const query =
    selectedTags.value.length > 0
      ? { tags: decodeURIComponent(selectedTags.value) }
      : null;

  router.replace({
    path,
    query,
  });
};
</script>

<style scoped>
.tag {
  @apply self-start rounded-full border border-cta-base px-3 py-1 text-sm;
}

.clickable {
  @apply hover:border-cta-hover;
}
</style>
