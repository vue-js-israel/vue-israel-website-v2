<script setup>
import speakers from "@/content/speakers.json";
import talks from "@/content/talks.json";
import events from '@/content/events.json'

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const getSpeakerId = () => {
  const { query } = useRoute();
  const { speakerId } = query;
  return speakerId
};

const getSortedTalkList = () => {
  const talkList = Object.entries(talks).map(([talkId, talk]) => { return { ...talk, talkId } })
  const sortedTalksByDate = talkList.sort((talkA, talkB) => {
    return new Date(talkB.talkDate) - new Date(talkA.talkDate)
  })
  return sortedTalksByDate
}

const talkList = getSortedTalkList();
const selectedSpeakerId = getSpeakerId();

const filteredEventsTalksSpeakers = computed(() => {
  const talkAndSpeakerList = talkList.map((talk) => {
    return talk.speakerIds.map((speakerId) => { return { talk, event: events[talk.eventId], speaker: { ...speakers[speakerId], speakerId } } });
  })
  const flattenSpeakerList = talkAndSpeakerList.reduce((flattened, innerArray) => flattened.concat(innerArray), []);

  if (selectedSpeakerId !== undefined) {
    return flattenSpeakerList.filter(({ speaker }) => speaker.speakerId === selectedSpeakerId)
  }

  return flattenSpeakerList;
})

</script>

<template>
  <div class="container mx-auto space-y-16 ">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <p class="p-2 text-md font-medium tracki text-center uppercase">Talks</p>
      <section class="my-5">
        <div class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
          <TalksCard v-for="{ talk, speaker, event } in filteredEventsTalksSpeakers" :speaker="speaker" :talk="talk"
            :event="event" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
