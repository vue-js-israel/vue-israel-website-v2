<script setup>

const props = defineProps({
  tags: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(['tagClick'])

// tag list state
const expanded = ref(false);

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

const onTagClickHandler = (tagIndex) => {
  emit('tagClick',tagIndex);
}
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
      <li v-for="(tag, index) in tags" :key="`${tag}-${index}`" @click="onTagClickHandler(index)" class="tag"
        :class="{ selected: tag.selected }">
        <a>{{ tag.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tag-list {
  @apply flex items-center gap-2 p-2 rounded-lg;
}
.event-tags {
  @apply py-1;
  @apply grid grid-cols-4 transition-all max-w-0 overflow-hidden gap-2;
  @apply select-none;
  /* @apply transition-all max-w-0 max-h-10 overflow-hidden flex flex-row justify-center content-center; */
}
.event-tags .tag {
  @apply rounded-md bg-slate-100 p-2 py-1 text-sm text-slate-700;
  @apply !py-0.5 transition-all hover:-translate-y-0.5;
  @apply text-center;
}
.event-tags .tag.selected {
  @apply bg-slate-400;
}

.event-tags.expanded {
  @apply max-w-full;
}
</style>