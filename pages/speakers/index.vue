<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community speakers
    </p>
    <SpeakersSpeakerCard v-for="[speakerId,speaker] in Object.entries(speakers)" :key="speakerId" :speaker="speaker"></SpeakersSpeakerCard>
  </div>
</template>

<script setup>
import { speakers } from '@/content/speakers.json'
</script>

<style scoped></style>
