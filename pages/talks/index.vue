<script setup>
import speakers from "@/content/speakers.json";
import talks from "@/content/talks.json";
import events from "@/content/events.json";

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const route = useRoute();

const getSpeakerIdFromUrlParam = () => {
  const { speakerId } = route.query;
  return speakerId;
};

const selectedSpeakerId = getSpeakerIdFromUrlParam();
if (selectedSpeakerId && !speakers[selectedSpeakerId]) {
  navigateTo("/talks", { replace: true });
}

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

const filteredEventsTalksSpeakers = computed(() => {
  const talkAndSpeakerList = talkList.map((talk) => {
    return talk.speakerIds
      .map((speakerId) => {
        const speaker = speakers[speakerId];
        if (!speaker) {
          return null;
        }
        return {
          talk,
          event: events[talk.eventId],
          speaker: { ...speaker, speakerId },
        };
      })
      .filter(Boolean);
  });
  const flattenSpeakerList = talkAndSpeakerList.reduce(
    (flattened, innerArray) => flattened.concat(innerArray),
    []
  );

  if (selectedSpeakerId !== undefined && speakers[selectedSpeakerId]) {
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
      ctaUrl="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      ctaText="Attend Now!">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Step into the Spotlight!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Share your knowledge</span>
        <span class="text-lg font-bold">with the community!</span>
      </div>
    </Banner>
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
      ctaUrl="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      ctaText="Attend Now!">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Step into the Spotlight!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Share your knowledge</span>
        <span class="text-lg font-bold">with the community!</span>
      </div>
    </Banner>
  </div>
</template>

<style scoped></style>
