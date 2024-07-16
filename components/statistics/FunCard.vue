<template>
  <div class="flex flex-col rounded-lg bg-dark-bg-dark p-6 text-gray-100">
    <div class="flex flex-col items-center">
      <div class="mb-2 flex items-center gap-2 font-semibold">
        <p class="text-2xl">{{ stat.emoji }}</p>
        <p class="text-3xl">{{ stat.value }}</p>
      </div>
      <p class="text-center">{{ stat.text }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  stat: {
    type: Object,
    default: () => {},
  },
});
</script>
