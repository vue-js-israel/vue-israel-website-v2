<template>
  <main class="py-5">
    <header class="flex justify-center">
      <div>
        <h1 class="text-5xl font-extrabold">Speakers</h1>
        <p class="text-lg font-medium">Vue.js Israel community speakers</p>
      </div>
    </header>
    <section class="m-auto py-2 md:max-w-xl max-w-sm grid md:grid-cols-3 grid-cols-1 gap-4">
      <div v-for="(speaker, index) in speakers" :key="`${speaker.name}-${index}-key`">
        <SpeakersSpeakerCard :speaker="speaker" />
      </div>
    </section>
  </main>
</template>

<script setup>

useHead({
  title: "Vue.js Israel Speakers",
  meta: [
    { name: "description", content: "Vus.js Israel's speakers" },
  ],
});

const { data } = await useAsyncData(() => queryContent("speakers").find());
const [speakerListJson] = data.value
const speakers = Object.entries(speakerListJson.speakers).map(([id, speaker]) => {
  return {id,...speaker}
})
</script>

<style scoped></style>
