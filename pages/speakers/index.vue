<script setup>
import speakers from "@/content/speakers.json";

const getSpeakerIdFromUrlParam = () => {
  const { speakerId } = useRoute().query;
  return speakerId;
};

const filteredAndSortedSpeakers = computed(() => {
  const selectedSpeakerId = getSpeakerIdFromUrlParam();
  if (speakers[selectedSpeakerId]) {
    const speaker = speakers[selectedSpeakerId];
    const speakerId = selectedSpeakerId;
    return [{ ...speaker, speakerId }];
  }
  const speakersEntries = Object.entries(speakers);
  const sortedSpeakersEntries = speakersEntries.sort(
    ([, speakerA], [, speakerB]) => speakerA.name.localeCompare(speakerB.name)
  );
  const speakerList = sortedSpeakersEntries.map(([speakerId, speaker]) => {
    return { ...speaker, speakerId };
  });
  return speakerList;
});
</script>

<template>
  <div>
    <SpeakersBanner></SpeakersBanner>
    <div
      class="container mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10">
      <p class="text-md p-2 text-center font-medium uppercase">
        Community speakers
      </p>
      <SpeakersCard
        v-for="speaker in filteredAndSortedSpeakers"
        :key="speaker.speakerId"
        :speaker="speaker" />
    </div>
    <SpeakersBanner></SpeakersBanner>
  </div>
</template>

<style scoped></style>
