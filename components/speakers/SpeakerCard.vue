<template>
  <NuxtLink :to="`/speakers/${speakerNameParam}`">
    <div class="flex flex-col items-center justify-center bg-white">
      <img :src="speaker.image" :alt="`profile picture of ${speaker.name}`"
        class="md:h-36 h-64 rounded-3xl object-contain" />
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
  return props.speaker.name.split(" ").join("-");
});
</script>

<style scoped></style>
