<script setup>
import { speakers } from "@/content/speakers.json";
import { talks } from "@/content/talks.json";

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const isFiltered = ref(false)

const selectedTags = computed(() => {
  const { query } = useRoute();
  const { tags } = query;
  return tags?.split(",") ?? [];
});

const filteredTalks = computed(() => {
  if (selectedTags.value.length > 0) {
    isFiltered.value = true
    return talks.filter((talk) => {
      return talk.speakerIds.find((speakerId) => {
        return selectedTags.value.includes(speakerId)
      })
    })
  } else {
    isFiltered.value = false
    return talks
  }
})

const displayFilteredSpeakers = (speakerId) => {
  return isFiltered.value ? selectedTags.value.includes(speakerId) : true
}

const getSpeaker = (speakerId) => {
  return speakers.find((speaker) => speaker.speakerId === speakerId);
}

const speakersTag = computed(() => {
  const speakersList = {}
  speakers.forEach((speaker) => {
    speakersList[speaker.speakerId] = speaker.name
  })
  return speakersList
})

</script>

<template>
  <div class="container mx-auto space-y-16 ">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <p class="p-2 text-md font-medium tracki text-center uppercase">Talks</p>
      <div class="w-full">
        <TagsController :tags="speakersTag" />
      </div>
      <section class="my-5">
        <div class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
          <template v-for="talk in filteredTalks" :key="talk.talkId">
            <template v-for="speakerId in talk.speakerIds" :key="speakerId">
              <TalksCard v-if="displayFilteredSpeakers(speakerId)" :speaker="getSpeaker(speakerId)" :talk="talk" />
            </template>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
