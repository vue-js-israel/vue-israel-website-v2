<template>
  <main class="py-5">
    <header class="flex justify-center">
      <div>
        <h1 class="text-5xl font-extrabold">Speakers</h1>
        <p class="text-lg font-medium">Vue.js Israel community speakers</p>
      </div>
    </header>
    <section class="m-auto grid max-w-sm grid-cols-1 gap-4 py-2 md:max-w-xl md:grid-cols-3">
      <div v-for="(speaker, index) in speakers" :key="`${speaker.name}-${index}-key`">
        <SpeakersSpeakerCard :speaker="speaker" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { speakers } from '@/content/speakers.json'

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const getSpeakersList = () => {
  return Object.entries(speakers).map(([id, speaker]) => {
    return { id, ...speaker };
  });
}
</script>

<style scoped></style>
