<template>
  <div class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
    <p class="text-md tracki p-2 text-center font-medium uppercase">
      Talks
    </p>
    <div class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
      <template v-for="talk in filteredTalks" :key="talk.talkId">
        <template v-for="speakerId in talk.speakerIds" :key="speakerId">
          <TalksCard v-if="displayFilteredSpeakers(speakerId)" :speaker="getSpeaker(speakerId)" :talk="talk" />
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

const { query } = useRoute();
const { sid } = query;

const isFiltered = ref(false)

const filteredTalks = computed(() => {
  const filteredTalks = talks.filter((talk) => {
    return talk.speakerIds.includes(sid);
  })
  if (filteredTalks.length > 0) {
    isFiltered.value = true
    return filteredTalks
  } else {
    isFiltered.value = false
    return talks
  }
})

const displayFilteredSpeakers = (speakerId) => {
  return isFiltered.value ? speakerId === sid : true
}

const getSpeaker = (speakerId) => {
  return speakers.find((speaker) => speaker.speakerId === speakerId);
}

</script>

<style scoped></style>
