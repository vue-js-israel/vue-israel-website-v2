<script setup>
import speakers from "@/content/speakers.json";
import { addURLSuffix } from "@/utils/urlUtils";

onMounted(() => {
  const eventTitleUrl = event.eventTitle
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
  addURLSuffix(eventTitleUrl);
});

const { event } = useEventFromRoute();

const eventId = computed(() => {
  const route = useRoute();
  return route.params.slug?.[0] || route.params.slug;
});

const tableOfContentLinks = Object.entries(event.sections).map(
  ([sectionId, section]) => {
    return { id: sectionId, depth: 2, text: section.sectionTitle };
  }
);

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
        <NuxtImg
          class="mt-5"
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
        <tags :tags="event.eventTags" :isClickable="false" />
        <MarkdownContent
          v-for="line in event.mainContent.value"
          :key="line"
          :value="line"
          class="my-6 text-lg" />
        <ContentSection
          :id="'photos'"
          :contents="event.sections.photos.sectionContent.value"
          :title="event.sections.photos.sectionTitle" />
        <ContentSection
          id="speakers"
          :contents="event.sections.speakers.sectionContent.value"
          :title="event.sections.speakers.sectionTitle">
          <template #default="{ contents }">
            <ul class="mt-6">
              <li v-for="speakerId in contents" :key="speakerId" class="py-1">
                <NuxtLink
                  :to="{ path: '/speakers', query: { speakerId } }"
                  class="underline"
                  >{{
                    `${speakers[speakerId].name} -
                                ${speakers[speakerId].company}`
                  }}</NuxtLink
                >
              </li>
            </ul>
          </template>
        </ContentSection>
        <ContentSection
          id="videos"
          :contents="event.sections.videos.sectionContent.value"
          :title="event.sections.videos.sectionTitle" />
        <ContentSection
          id="agenda"
          :title="event.sections.agenda.sectionTitle"
          :contents="event.sections.agenda.sectionContent.value">
          <template #default="{ contents }">
            <Agenda :agenda="contents" :eventId="eventId" />
          </template>
        </ContentSection>
        <ContentSection
          :id="'venue'"
          :contents="event.sections.venue.sectionContent.value"
          :type="event.sections.venue.sectionContent.type"
          :title="event.sections.venue.sectionTitle">
          <template #extra>
            <p>👉 <strong>Date</strong>: {{ event.date }}</p>
          </template>
        </ContentSection>
      </article>
    </section>
  </main>
</template>

<style scoped></style>
