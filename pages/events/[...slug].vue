<script setup>
import { events } from "@/content/events.json";
import { speakers } from "@/content/speakers.json";
import { talks } from "@/content/talks.json"
import { addURLSuffix } from "@/components/utils/urlUtils";
import EventTags from "@/components/events/EventTags.vue";

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

const toc = event.value.sections.map((section) => {
  return { id: section.sectionId, depth: 2, text: section.sectionTitle };
});

const eventSpeakers = computed(() => {
  const speakerSection = event.value.sections.find(
    ({ sectionId }) => sectionId === "speakers"
  );
  const eventSpeakerIds = speakerSection.sectionContent.value;

  return eventSpeakerIds.map((id) => {
    return { id, ...speakers[id] };
  });
});

const speakerTalk = speakerId => {
  return talks.find((talk) => {
    return talk.speakerIds.find((id) => {
      return id === speakerId;
    })
  })
}

const singleSpeakerTitle = (speakerId) => {
  return `${speakers[speakerId].name} - ${speakerTalk(speakerId).talkTitle} - ${speakers[speakerId].company}`
}

// returns a costume sting that chains the speaker names first then the talk title and then the speaker companies
const multipleSpeakerTitle = (speakerIds) => {
  const speakerNames = speakerIds.map((id) => speakers[id].name);
  const speakerCompanies = speakerIds.map((id) => speakers[id].company);
  const uniqueCompanies = [...new Set(speakerCompanies)]

  const speakerNamesString = speakerNames.join(' & ');
  const speakersTalk = speakerTalk(speakerIds[0]).talkTitle
  const speakerCompaniesString = uniqueCompanies.join(' / ');

  return `${speakerNamesString} - ${speakersTalk} - ${speakerCompaniesString}`;
}

// set the meta
useHead({
  title: `Vue.js Israel | ${event.value.metaData.title}`,
  meta: [{ name: "description", content: event.value.metaData.description }],
});
</script>

<template>
  <main id="main">
    <section class="grid grid-cols-10">
      <aside class="col-span-full px-4 pt-8 md:col-start-8 md:col-end-10 md:pt-12">
        <TableOfContent :links="toc" />
      </aside>
      <article
        class="col-span-full m-auto w-full max-w-3xl px-4 md:col-span-7 md:col-start-1 md:row-start-1 md:p-4">
        <header class="m-5"></header>

        <img :src="event.eventPoster.src" :alt="event.eventPoster.alt" />
        <h1 class="my-8 text-4xl font-bold">{{ event.eventTitle }}</h1>
        <EventTags :tags="event.eventTags" />
        <MarkdownContent v-for="line in event.mainContent.value" :key="line" :value="line" class="my-6 text-lg" />

        <div v-for="{ sectionId, sectionContent, sectionTitle } in event.sections" :key="sectionId">
          <a :id="sectionId" class="text-2xl font-medium" :href="`#${sectionId}`">{{ sectionTitle }}</a>

          <div v-if="sectionId === 'photos'">
            LINK OF Photos // OR // Embedded Player (Youtube?)
          </div>

          <ul v-else-if="sectionId === 'speakers'">
            <li v-for="speakerId in sectionContent.value" :key="speakerId">
              <!-- <a :href="`/speakers/${speakerId}`">{{ `${speakers[speakerId].name} - ${speakers[speakerId].company}` }}</a> -->
              <div>{{ `${speakers[speakerId].name} - ${speakers[speakerId].company}` }}</div>
            </li>
          </ul>

          <div v-else-if="sectionId === 'videos'">
            LINK OF VIDEOS // OR // Embedded Player (Youtube?)
          </div>

          <div v-else-if="sectionContent.type === 'markdown'" class="mt-12">
            <MarkdownContent v-for="line in sectionContent.value" :key="line" :value="line" class="my-2" />
            <div v-if="sectionId === 'venue'">
              <p>👉 <strong>Date</strong>: {{ event.eventDate }}</p>
            </div>
          </div>

          <template v-else-if="sectionId === 'agenda'">
            <p v-for="{ timeSlot, title, speakerIds } in sectionContent.value" :key="title">
              <strong>{{ `${timeSlot ?? ""} ` }}</strong>
              <span v-if="speakerIds">
                <span v-if="speakerIds.length === 1">
                  {{ singleSpeakerTitle(speakerIds[0]) }}
                </span>
                <span v-else>
                  {{ multipleSpeakerTitle(speakerIds) }}
                </span>
              </span>
              <span v-else>
                {{ title }}
              </span>
            </p>
          </template>

          <hr class="mt-2 mb-12" />
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped></style>
