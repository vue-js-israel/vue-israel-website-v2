<template>
  <main class="py-5">
    <header class="flex justify-center">
      <div>
        <h1 class="text-5xl font-extrabold">Speakers</h1>
        <p class="text-lg font-medium">Speakers of Vus.JS Israel</p>
      </div>
    </header>
    <section class="m-auto py-2 md:max-w-xl max-w-sm grid md:grid-cols-2 grid-cols-1 gap-4">
        <div v-for="(speaker,index) in uniqueSpeakers" :key="`${speaker.name}-${index}-key`">
            <SpeakersSpeakerCard :speaker="speaker"/>
        </div>
    </section>
  </main>
</template>

<script setup>
const { data } = await useAsyncData(() =>
  queryContent("events").only(["speakers"]).find()
);

const removeDuplicates = (arr) => {
  const uniqueSpeakerURL = new Set();
  const result = [];

  for (const obj of arr) {
    if (!uniqueSpeakerURL.has(obj.socialULR)) {
      uniqueSpeakerURL.add(obj.socialULR);
      result.push(obj);
    }
  }

  return result;
};

const mergeSpeakerArrays = (arr) => {
  return arr
    .flatMap((obj) => obj.speakers)
    .reduce(
      (mergedArray, currentArray) => mergedArray.concat(currentArray),
      []
    );
};

const mergedSpeakers = mergeSpeakerArrays(data.value);
const uniqueSpeakers = removeDuplicates(mergedSpeakers);
</script>

<style scoped></style>
