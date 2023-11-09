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
      ctaUrl="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      ctaText="Apply Now!">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Calling all speakers!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Share your insights at ours</span>
        <span class="text-lg font-bold">next event</span>
      </div>
    </Banner>
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
      ctaUrl="https://docs.google.com/forms/d/e/1FAIpQLSeM_lZF_C1IJso9_85_WYU6Mhu6hrB6KgBMFwhqnmBwO7pfgQ/viewform"
      ctaText="Apply Now!">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Calling all speakers!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Share your insights at ours</span>
        <span class="text-lg font-bold">next event</span>
      </div>
    </Banner>
  </div>
</template>

<style scoped></style>
