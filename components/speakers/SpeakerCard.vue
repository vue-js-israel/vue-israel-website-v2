<template>
  <NuxtLink :to="`/speakers/${speaker.id}`">
    <div class="flex flex-col items-center justify-center bg-white">
      <img
        :src="speaker.image"
        :alt="`profile picture of ${speaker.name}`"
        class="h-64 rounded-3xl object-contain md:h-36"
      />
      <h1 class="text-lg font-medium text-gray-500">
        {{ speaker.name }}
      </h1>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  speaker: {
    type: Object,
    require: true,
  },
});

const speakerNameParam = computed(() => {
  return props.speaker.name
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
});
</script>

<style scoped></style>
