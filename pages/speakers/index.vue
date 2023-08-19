<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community speakers
    </p>
    <SpeakersCard v-for="speaker in sortedSpeakers" :key="speaker.speakerId" :speaker="speaker" />
  </div>
</template>

<script setup>
import speakers from '@/content/speakers.json'

const sortedSpeakers = computed(() => {
  const speakersEntries = Object.entries(speakers)
  const sortedSpeakersEntries = speakersEntries.sort(([, speakerA], [, speakerB]) => speakerA.name.localeCompare(speakerB.name));
  const speakerList = sortedSpeakersEntries.map(([speakerId, speaker]) => { return { ...speaker, speakerId } })
  return speakerList
})
</script>

<style scoped></style>
