<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10"
  >
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community talks
    </p>
    <div class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
      <template v-for="talk in talks" :key="`${talk.talkId}-key`">
        <template
          v-for="speakerId in talk.speakerIds"
          :key="`${speakerId}-key`"
        >
          <SpeakersSpeakerCard :speaker="speakers[speakerId]" :talk="talk" />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { speakers } from "@/content/speakers.json";
import { talks } from "@/content/talks.json";
useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});
</script>

<style scoped></style>
