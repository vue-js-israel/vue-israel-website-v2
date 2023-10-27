<script setup>
const props = defineProps({
  tags: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
// tag list state
const expanded = ref(false);

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="flex flex-col gap-2 rounded-lg p-4 md:flex-row md:items-center">
    <!-- Button to toggle expand -->
    <button
      @click="toggleExpand"
      class="flex items-center gap-2 rounded-full border p-1.5 px-2 pr-3 font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:bg-dark-bg-dark active:shadow-inner"
      :class="{ 'border-cta-base': expanded }">
      <Icon name="mdi:tag-outline" />
      <span>Tags</span>
    </button>
    <Transition>
      <Tags v-if="expanded" :tags="tags" />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
