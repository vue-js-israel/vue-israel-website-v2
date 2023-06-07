<template>
  <NuxtLink :to="`speakers/${speakerNameParam}`">
    <div
      class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md"
    >
      <img
        :src="speaker.image"
        :alt="`profile picture of ${speaker.name}`"
        class="h-48 w-48 rounded-3xl object-contain"
      />
      <h1 class="text-lg font-medium text-gray-500">
        {{ speaker.name }}
      </h1>
      <div class="flex items-center gap-2">
        <p class="flex items-center">
          <Icon name="mdi:briefcase-outline" /><span>{{
            speaker.company
          }}</span>
        </p>
        <a :href="speaker.socialULR" class="flex items-center">
          <Icon name="mdi:linkedin" /><span>Linkedin</span></a
        >
      </div>
      <h3 class="text-sm font-medium text-gray-500">
        {{ speaker.video }}
      </h3>
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
