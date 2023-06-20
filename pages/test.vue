<script setup>
// const { path } = useRoute();
const path = "/events/data-mangement-with-vue-test";
// const { data } = await useAsyncData(`content-${path}`, async () => {
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  const event = await queryContent().where({ _path: path }).findOne();

  return {
    event,
  };
});

console.log(
  "👾 ~ file: test.vue:9 ~ const{data}=awaituseAsyncData ~ event:",
  data.value.event
);

import { getSpeakersList } from "@/components/utils/commonUtils";
const speakers = await getSpeakersList();

//Returns the speakers main information of the current event from the speakers-json
const eventSpeakers = speakers
  .map((speaker) => {
    const speakerId = Object.keys(data.value.event.speakers).find(
      (speakerId) => speakerId === speaker.id
    );
    return speakerId ? speaker : undefined;
  })
  .filter((eventSpeaker) => eventSpeaker !== undefined);
</script>

<template>
  <main>
    <section class="m-auto flex max-w-7xl flex-col justify-around p-4">
      <header class="m-5"></header>

      <img
        class="w-96"
        :src="data.event.eventPoster.src"
        :alt="data.event.eventPoster.alt"
      />
      <h1 class="my-8 text-4xl font-bold">{{ data.event.title }}</h1>
      <EventTags :tags="data.event.eventTags" />
      <MarkdownContent :value="data.event.mainParagraph" class="my-6 text-lg" />
      <a class="mb-6 mt-12 text-2xl font-medium" href="#photos">📷 Photos</a>
      <hr />
      <p><a :href="data.event.photos.link">Event Photos</a></p>
      <a class="mb-6 mt-12 text-2xl font-medium" href="#speakers"
        >📢 Speakers</a
      >
      <hr />
      <ul>
        <li v-for="speaker in eventSpeakers" :key="speaker.id">
          <a :href="data.event.speakers[speaker.id].speakerPageLink">{{ `${speaker.name} - ${speaker.company}` }}</a>
          
        </li>
      </ul>
      <a class="mb-6 mt-12 text-2xl font-medium" href="#the-full-playlist"
        >📹The full playlist</a
      >
      <hr />
      <a class="mb-6 mt-12 text-2xl font-medium" href="#agenda">📆 Agenda</a>
      <hr />
      <MarkdownContent
        v-for="line in data.event.agenda"
        :key="line"
        :value="line"
        class="my-2"
      />
      <a class="mb-6 mt-12 text-2xl font-medium" href="#the-venue"
        >🏢 The venue</a
      >
      <hr />
      <MarkdownContent
        v-for="line in data.event.venue"
        :key="line"
        :value="line"
        class="my-2"
      />
      <p>👉 <strong>Date</strong>: {{ data.event.date }}</p>
      <a class="mb-6 mt-12 text-2xl font-medium" href="#️-sponsors"
        >❤️ Sponsors</a
      >
      <hr />
      <MarkdownContent
        v-for="line in data.event.sponsors"
        :key="line"
        :value="line"
        class="my-2"
      />
    </section>
  </main>
</template>

<style scoped></style>
