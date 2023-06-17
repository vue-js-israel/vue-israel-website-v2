<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["tagClick"]);

// tag list state
const expanded = ref(false);

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

const onTagClickHandler = (tagIndex) => {
  emit("tagClick", tagIndex);
};
</script>

<template>
  <div class="flex flex-col gap-2 rounded-lg p-4 md:flex-row md:items-center">
    <!-- Button to toggle expand -->
    <button
      @click="toggleExpand"
      class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1.5 px-2 pr-3 font-semibold transition-all hover:-translate-y-0.5 focus:bg-slate-100 active:translate-y-0.5 active:shadow-inner"
    >
      <Icon name="mdi:tag-outline" />
      <span>Tags</span>
    </button>
    <ul
      class="grid max-h-0 select-none grid-cols-3 gap-2 overflow-hidden transition-all md:max-h-max md:max-w-0 md:grid-cols-4 md:py-2"
      :class="{ 'max-h-max py-2 md:max-w-full md:py-2': expanded }"
    >
      <!-- list out tags with links -->
      <li
        v-for="(tag, index) in tags"
        :key="`${tag}-${index}`"
        @click="onTagClickHandler(index)"
        class="rounded-md bg-slate-100 p-2 py-1 text-center text-sm text-slate-700 transition-all hover:-translate-y-0.5"
        :class="{ 'bg-slate-400': tag.selected }"
      >
        <a>{{ tag.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
