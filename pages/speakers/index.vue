<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community speakers
    </p>
    <TalksTalkCard v-for="talk in talks" :key="talk.talkId" :talk="talk"></TalksTalkCard>
  </div>
</template>

<script setup>
import { talks } from '@/content/talks.json'
console.log("👾 ~ file: index.vue:7 ~ talks:", talks)
</script>

<style scoped></style>
