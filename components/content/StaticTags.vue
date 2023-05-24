<template>
  <div class="tag-container">
    <span
      class="tag"
      v-for="(tag, n) in stringTagsToArray"
      :key="`tag-key-${tag}-${n}`"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
/**
 * Static Tags Components for MD
 */
const props = defineProps({
  tags: {
    type: Array,
    default: "[]",
  },
});

const stringTagsToArray = computed(() => {
  return typeof props.tags === "string" ? JSON.parse(props.tags) : props.tags;
});
</script>

<style scoped>

.tag-container{
  @apply flex gap-1 my-2;
}
.tag-container .tag {
  @apply rounded-md bg-gray-200 p-1 text-xs;
}
</style>
