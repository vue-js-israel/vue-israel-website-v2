<template>
  <div class="flex flex-wrap gap-1">
    <span
      v-for="(tag, index) in tags"
      class="self-start rounded-full px-3 py-1 text-sm border-2 border-cta-base hover:border-cta-hover"
      :class="{ 'bg-cta-hover border-cta-hover text-dark-text-light': isTagSelected(tag) }"
      :key="`tag-key-${tag}-${index}`"
      @click.stop.prevent="
        () => {
          emit('tagClick', tag);
        }
      "
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["tagClick"]);

const props = defineProps({
  tags: {
    type: Array,
    default: () => {
      return [];
    },
  },
  selectedTags: {
    type: Object,
    default: () => [],
  },
});

const isTagSelected = (tag) => {
  const isTagSelected = props.selectedTags.findIndex(
    (selectedTag) => selectedTag === tag
  );
  return isTagSelected !== -1;
};
</script>

<style scoped></style>
