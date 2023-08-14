<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Community speakers
    </p>
    <SpeakersCard v-for="(speaker,speakerId) in speakers" :key="speakerId" :speaker="{...speaker,speakerId}"></SpeakersCard>
  </div>
</template>

<script setup>
import  speakers  from '@/content/speakers.json'
</script>

<style scoped></style>
