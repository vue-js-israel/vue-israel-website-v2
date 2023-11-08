<script setup>
import speakers from "@/content/speakers.json";
import talks from "@/content/talks.json";
import events from "@/content/events.json";

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const getSpeakerIdFromUrlParam = () => {
  const { speakerId } = useRoute().query;
  return speakerId;
};

const getSortedTalkList = () => {
  const talkList = Object.entries(talks).map(([talkId, talk]) => {
    return { ...talk, talkId };
  });

  const sortedTalksByDate = talkList.sort((talkA, talkB) => {
    return new Date(talkA.talkDate) - new Date(talkB.talkDate);
  });
  return sortedTalksByDate;
};

const talkList = getSortedTalkList();
const selectedSpeakerId = getSpeakerIdFromUrlParam();

const filteredEventsTalksSpeakers = computed(() => {
  const talkAndSpeakerList = talkList.map((talk) => {
    return talk.speakerIds.map((speakerId) => {
      return {
        talk,
        event: events[talk.eventId],
        speaker: { ...speakers[speakerId], speakerId },
      };
    });
  });
  const flattenSpeakerList = talkAndSpeakerList.reduce(
    (flattened, innerArray) => flattened.concat(innerArray),
    []
  );

  if (selectedSpeakerId !== undefined) {
    return flattenSpeakerList.filter(
      ({ speaker }) => speaker.speakerId === selectedSpeakerId
    );
  }

  return flattenSpeakerList;
});
</script>

<template>
  <div>
    <Banner
      title="Step into the Spotlight!"
      sub-title="Share your knowledge"
      sub-title-bold="with the community!"
      cta-link="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      cta-text-content="Attend Now!"></Banner>
    <div class="container mx-auto space-y-16">
      <div
        class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
        <p class="text-md p-2 text-center font-medium uppercase">Talks</p>
        <section class="my-5">
          <div
            class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
            <TalksCard
              v-for="(
                { talk, speaker, event }, index
              ) in filteredEventsTalksSpeakers"
              :key="index"
              :speaker="speaker"
              :talk="talk"
              :event="event" />
          </div>
        </section>
      </div>
    </div>
    <Banner
      title="Step into the Spotlight!"
      sub-title="Share your knowledge"
      sub-title-bold="with the community!"
      cta-link="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      cta-text-content="Attend Now!"></Banner>
  </div>
</template>

<style scoped></style>
