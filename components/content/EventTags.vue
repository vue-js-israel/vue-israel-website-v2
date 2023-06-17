<template>
  <div class="my-2 flex gap-1">
    <span
      v-for="(tag, index) in tags"
      class="rounded-md bg-gray-200 p-1 text-xs"
      :class="{ 'bg-slate-400': isTagSelected(tag) }"
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
  const isTagSelected = props.selectedTags.findIndex((selectedTag)=> selectedTag === tag);
  return isTagSelected !== -1;
};
</script>

<style scoped></style>
