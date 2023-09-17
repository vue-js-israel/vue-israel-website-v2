<script setup>
import speakers from '@/content/speakers.json'

const getSpeakerIdFromUrlParam = () => {
  const { speakerId } = useRoute().query;
  return speakerId;
}

const filteredSpeakers = computed(() => {
  const selectedSpeakerId = getSpeakerIdFromUrlParam();
  return speakers[selectedSpeakerId] ? { [selectedSpeakerId]: speakers[selectedSpeakerId] } : speakers;
})
</script>

<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community speakers
    </p>
    <SpeakersCard v-for="(speaker, speakerId) in filteredSpeakers" :key="speakerId"
      :speaker="{ ...speaker, speakerId }" />
  </div>
</template>
<style scoped></style>
