<script setup>
import speakers from "@/content/speakers.json";
import talks from "@/content/talks.json";

useHead({
  title: "Vue.js Israel Speakers",
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const talkList = computed(() => {
  return Object.entries(talks).map(([talkId, talk]) => { return { ...talk, talkId } })
})


</script>

<template>
  <div class="container mx-auto space-y-16 ">
    <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
      <p class="p-2 text-md font-medium tracki text-center uppercase">Talks</p>
      <section class="my-5">
        <div class="mt-8 flex flex-row flex-wrap-reverse justify-center gap-4">
          <template v-for="talk in talkList" :key="talk.talkId">
            <template v-for="speakerId in talk.speakerIds" :key="speakerId">
              <TalksCard :speaker="speakers[speakerId]" :talk="talk" />
            </template>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
