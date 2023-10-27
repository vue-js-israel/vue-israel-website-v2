<script setup>
import events from "@/content/events.json";
import speakers from "@/content/speakers.json";
import talks from "@/content/talks.json";
import { addURLSuffix } from "@/components/utils/urlUtils";

onMounted(() => {
  const eventTitleUrl = event.eventTitle
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

const talkList = Object.entries(talks).map(([talkId, talk]) => {
  return { ...talk, talkId };
});
const event = { ...events[eventId.value], eventId: eventId.value };

const tableOfContentLinks = Object.entries(event.sections).map(
  ([sectionId, section]) => {
    return { id: sectionId, depth: 2, text: section.sectionTitle };
  }
);

const speakerTalk = (speakerId) => {
  return talkList.find((talk) => {
    return talk.speakerIds.find((id) => {
      return id === speakerId;
    });
  });
};

const singleSpeakerTitle = (speakerId) => {
  const speaker = speakers[speakerId];
  return `${speaker.name} - ${speakerTalk(speakerId).talkTitle} - ${
    speaker.company
  }`;
};

// returns a costume sting that chains the speaker names first then the talk title and then the speaker companies
const multipleSpeakerTitle = (speakerIds) => {
  const filteredSpeakersEntry = Object.entries(speakers).filter(([speakerId]) =>
    speakerIds.includes(speakerId)
  );
  const filteredSpeakers = filteredSpeakersEntry.map(([speakerId, speaker]) => {
    return { ...speaker, speakerId };
  });

  const speakerNames = filteredSpeakers.map((speaker) => speaker.name);
  const speakerCompanies = filteredSpeakers.map((speaker) => speaker.company);
  const uniqueCompanies = [...new Set(speakerCompanies)];

  const speakerNamesString = speakerNames.join(" & ");
  const speakersTalk = speakerTalk(speakerIds[0]).talkTitle;
  const speakerCompaniesString = uniqueCompanies.join(" / ");

  return `${speakerNamesString} - ${speakersTalk} - ${speakerCompaniesString}`;
};

// set the meta
useHead({
  title: `Vue.js Israel | ${event.metaData.title}`,
  meta: [{ name: "description", content: event.metaData.description }],
});
</script>

<template>
  <main id="main">
    <section class="grid grid-cols-10">
      <aside
        class="col-span-full px-4 pt-8 md:col-start-8 md:col-end-10 md:pt-12">
        <TableOfContent :links="tableOfContentLinks" />
      </aside>
      <article
        class="col-span-full m-auto w-full max-w-3xl px-4 md:col-span-7 md:col-start-1 md:row-start-1 md:p-4">
        <header class="m-5"></header>

        <NuxtImg
          provider="cloudinary"
          :src="event.eventPoster.src"
          :alt="event.eventPoster.alt"
          quality="auto"
          fetchFormat="auto"
          loading="lazy"
          width="1352"
          height="720"
          sizes="696px md:521px"
          densities="x1 x2" />
        <h1 class="my-8 text-4xl font-bold">{{ event.eventTitle }}</h1>
        <tags :tags="event.eventTags" />
        <MarkdownContent
          v-for="line in event.mainContent.value"
          :key="line"
          :value="line"
          class="my-6 text-lg" />

        <div
          v-for="(
            { sectionContent, sectionTitle }, sectionId
          ) in event.sections"
          :key="sectionId">
          <a
            :id="sectionId"
            class="text-2xl font-medium"
            :href="`#${sectionId}`"
            >{{ sectionTitle }}</a
          >

          <div v-if="sectionId === 'photos'">
            LINK OF Photos // OR // Embedded Player (Youtube?)
          </div>

          <ul v-else-if="sectionId === 'speakers'" class="mt-12">
            <li v-for="speakerId in sectionContent.value" :key="speakerId">
              <NuxtLink
                :to="{ path: '/speakers', query: { speakerId: speakerId } }"
                >{{
                  `${speakers[speakerId].name} -
                              ${speakers[speakerId].company}`
                }}</NuxtLink
              >
            </li>
          </ul>

          <div v-else-if="sectionId === 'videos'" class="mt-12">
            LINK OF VIDEOS // OR // Embedded Player (Youtube?)
          </div>

          <div v-else-if="sectionContent.type === 'markdown'" class="mt-12">
            <MarkdownContent
              v-for="line in sectionContent.value"
              :key="line"
              :value="line"
              class="my-2" />
            <div v-if="sectionId === 'venue'">
              <p>👉 <strong>Date</strong>: {{ event.eventDate }}</p>
            </div>
          </div>

          <div v-else-if="sectionId === 'agenda'" class="mt-12">
            <p
              v-for="{ timeSlot, title, speakerIds } in sectionContent.value"
              :key="title">
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
          </div>

          <hr class="mb-12 mt-2" />
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped></style>
