<script setup>
const { path } = useRoute();
// const { data } = await useAsyncData(`content-${path}`, async () => {
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  const event = queryContent().where({ _path: path }).findOne();

  return {
    event: await event,
  };
});

const toc = [
  {
    "id": "photos",
    "depth": 2,
    "text": "📷 Photos"
  },
  {
    "id": "speakers",
    "depth": 2,
    "text": "📢 Speakers"
  },
  {
    "id": "the-full-playlist",
    "depth": 2,
    "text": "📹The full playlist"
  },
  {
    "id": "agenda",
    "depth": 2,
    "text": "📆 Agenda"
  },
  {
    "id": "the-venue",
    "depth": 2,
    "text": "🏢 The venue"
  },
  {
    "id": "sponsors",
    "depth": 2,
    "text": "❤️ Sponsors"
  }
]

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

// set the meta
useHead({
  title: `Vue.js Israel | ${data.value.event.title}`,
  meta: [
    { name: "description", content: data.value.event.description },
  ],
});
</script>

<template>
  <main id="main">
    <section class="grid grid-cols-10">
      <aside class="px-4 pt-8 col-span-full md:col-start-8 md:col-end-10 md:pt-12">
        <TableOfContent :links="toc" />
      </aside>
      <article
        class="prose col-span-full m-auto w-full max-w-3xl px-4 md:col-span-7 md:col-start-1 md:row-start-1 md:p-4">
        <header class="m-5"></header>

        <img :src="data.event.eventPoster.src" :alt="data.event.eventPoster.alt" />
        <h1 class="my-8 text-4xl font-bold">{{ data.event.title }}</h1>
        <EventTags :tags="data.event.eventTags" />
        <MarkdownContent :value="data.event.mainContent" class="my-6 text-lg" />

        <div class="mt-12">
          <a id="photos" class="text-2xl font-medium" href="#photos">📷 Photos</a>
          <hr class="md:mb-12 mb-6" />
          <p><a :href="data.event.photos.link" class="text-lg">Event Photos</a></p>
        </div>

        <div class="mt-12">
          <a id="speakers" class="text-2xl font-medium" href="#speakers">📢 Speakers</a>
          <hr class="md:mb-12 mb-6" />
          <ul>
            <li v-for="speaker in eventSpeakers" :key="speaker.id">
              <a :href="data.event.speakers[speaker.id].speakerPageLink" class="text-lg">{{ `${speaker.name} -
                              ${speaker.company}` }}</a>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <a id="the-full-playlist" class="text-2xl font-medium" href="#the-full-playlist">📹The full playlist</a>
          <hr class="md:mb-12 mb-6" />
        </div>

        <div class="mt-12">
          <a id="agenda" class="text-2xl font-medium" href="#agenda">📆 Agenda</a>
          <hr class="md:mb-12 mb-6" />
          <MarkdownContent v-for="line in data.event.agenda" :key="line" :value="line" class="my-2" />
        </div>

        <div class="mt-12">
          <a id="the-venue" class="text-2xl font-medium" href="#the-venue">🏢 The venue</a>
          <hr class="md:mb-12 mb-6" />
          <MarkdownContent v-for="line in data.event.venue" :key="line" :value="line" class="my-2" />
          <p>👉 <strong>Date</strong>: {{ data.event.date }}</p>
        </div>

        <div class="mt-12">
          <a id="sponsors" class="text-2xl font-medium" href="#sponsors">❤️ Sponsors</a>
          <hr class="md:mb-12 mb-6" />
          <MarkdownContent v-for="line in data.event.sponsors" :key="line" :value="line" class="my-2" />
        </div>

      </article>
    </section>
  </main>
</template>

<style scoped></style>
