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
    <Banner
      title="Calling all speakers!"
      sub-title="Share your insights at ours"
      sub-title-bold="next event"
      cta-link="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      cta-text-content="Apply Now!"></Banner>
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
    <Banner
      title="Calling all speakers!"
      sub-title="Share your insights at ours"
      sub-title-bold="next event"
      cta-link="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      cta-text-content="Apply Now!"></Banner>
  </div>
</template>

<style scoped></style>
