<template>
  <div>{{ speakerName }}</div>
</template>

<script setup>
const {speaker} = useRoute().params
const speakerName = ref(speaker.split('-').join(' '));
</script>

<style scoped></style>
