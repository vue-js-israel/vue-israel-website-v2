<script setup>
import { events } from "@/content/events.json";
import { addURLSuffix } from "@/components/utils/urlUtils";
import { speakers } from "@/content/speakers.json";

onMounted(() => {
  const eventTitleUrl = event.value.eventTitle
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
  addURLSuffix(eventTitleUrl);
});

const eventId = computed(() => {
  const { path } = useRoute();
  const [, , eventId] = path.split("/");
  return eventId;
});

const event = computed(() => {
  return events.find((event) => event.eventId === eventId.value);
});
console.log("👾 ~ file: [...slug].vue:19 ~ event ~ event:", event.value);

const toc = event.value.sections.map((section) => {
  return { id: section.sectionId, depth: 2, text: section.sectionTitle };
});

const eventSpeakers = computed(() => {
  const speakerSection = event.value.sections.find(
    ({ sectionId }) => sectionId === "speakers"
  );
  const eventSpeakerIds = speakerSection.sectionContent.value;

  return eventSpeakerIds.map((id) => {
    return {id,...speakers[id]};
  });
});

// Returns the speakers main information of the current event from the speakers-json
// const eventSpeakers = speakers
//   .map((speaker) => {
//     const speakerId = Object.keys(eventSpeaker).find(
//       (speakerId) => speakerId === speaker.id
//     );
//     return speakerId ? speaker : undefined;
//   })
//   .filter((eventSpeaker) => eventSpeaker !== undefined);

//   console.log("📢",eventSpeakers);

// set the meta
useHead({
  title: `Vue.js Israel | ${event.value.metaData.title}`,
  meta: [{ name: "description", content: event.value.metaData.description }],
});
</script>

<template>
  <main id="main">
    <section class="grid grid-cols-10">
      <aside
        class="col-span-full px-4 pt-8 md:col-start-8 md:col-end-10 md:pt-12"
      >
        <TableOfContent :links="toc" />
      </aside>
      <article
        class="prose col-span-full m-auto w-full max-w-3xl px-4 md:col-span-7 md:col-start-1 md:row-start-1 md:p-4"
      >
        <header class="m-5"></header>

        <img :src="event.eventPoster.src" :alt="event.eventPoster.alt" />
        <h1 class="my-8 text-4xl font-bold">{{ event.eventTitle }}</h1>
        <EventTags :tags="event.eventTags" />
        <MarkdownContent
          v-for="line in event.mainContent.value"
          :key="line"
          :value="line"
          class="my-6 text-lg"
        />

        <div
          v-for="{ sectionId, sectionContent, sectionTitle } in event.sections"
          :key="sectionId"
        >
          <a
            :id="sectionId"
            class="text-2xl font-medium"
            :href="`#${sectionId}`"
            >{{ sectionTitle }}</a
          >
          <hr class="mb-6 md:mb-12" />

          <div v-if="sectionContent.type === 'markdown'" class="mt-12">
            <MarkdownContent
              v-for="line in sectionContent.value"
              :key="line"
              :value="line"
              class="my-2"
            />
            <div v-if="sectionId === 'venue'">
              <p>👉 <strong>Date</strong>: {{ event.eventDate }}</p>
            </div>
          </div>

          <p
            v-else-if="sectionId === 'agenda'"
            v-for="{ timeSlot, title, speakerIds } in sectionContent.value"
            :key="title"
          >
            <strong>{{ `${timeSlot ?? ""} ` }}</strong>
            <span v-if="speakerIds">
              <span v-for="speakerId in speakerIds" :key="speakerId">
                {{ speakers[speakerId].name }}
              </span>
            </span>
            <span v-else>
              {{ title }}
            </span>
          </p>

          <div v-else-if="sectionId === 'speakers'">

          </div>
        </div>

        <!-- <div class="mt-12">
          <a id="photos" class="text-2xl font-medium" href="#photos">📷 Photos</a>
          <hr class="md:mb-12 mb-6" />
          <p><a :href="data.event.photos.link" class="text-lg">Event Photos</a></p>
        </div> -->

        <!-- <div class="mt-12">
          <a id="speakers" class="text-2xl font-medium" href="#speakers">📢 Speakers</a>
          <hr class="md:mb-12 mb-6" />
          <ul>
            <li v-for="speaker in eventSpeakers" :key="speaker.id">
              <a :href="data.event.speakers[speaker.id].speakerPageLink" class="text-lg">{{ `${speaker.name} -
                              ${speaker.company}` }}</a>
            </li>
          </ul>
        </div> -->

        <!-- <div class="mt-12">
          <a id="the-full-playlist" class="text-2xl font-medium" href="#the-full-playlist">📹The full playlist</a>
          <hr class="md:mb-12 mb-6" />
        </div> -->

        <!-- <div class="mt-12">
          <a id="the-venue" class="text-2xl font-medium" href="#the-venue">🏢 The venue</a>
          <hr class="md:mb-12 mb-6" />
          <MarkdownContent v-for="line in data.event.venue" :key="line" :value="line" class="my-2" />
          <p>👉 <strong>Date</strong>: {{ data.event.date }}</p>
        </div> -->
      </article>
    </section>
  </main>
</template>

<style scoped></style>
