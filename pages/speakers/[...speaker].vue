<script setup>
import { speakers } from '@/content/speakers.json'
import { events } from '@/content/events.json'
import { talks } from '@/content/talks.json'
import { addURLSuffix, socialIcon } from "@/components/utils/urlUtils";

const [speakerId] = useRoute().params.speaker;
const speaker = speakers[speakerId];

onMounted(() => {
  const speakerNameUrl = speaker.name
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
  addURLSuffix(speakerNameUrl);
});

useHead({
  title: `Vue.js Israel | ${speaker.name}`,
  meta: [{ name: "description", content: "Vus.js Israel community speaker" }],
});

const speakerTalk = computed(() => {
  return talks.map((talk) => {
    const currentTalk = talk.speakerIds.find((id) => {
      return id === speakerId;
    })
    if (!currentTalk) {
      return;
    }

    const event = events.find((event) => {
      return event.eventId === talk.eventId
    })
    return { ...talk, ...event };
  }).filter(talk => talk !== undefined)
})
</script>

<template>
  <main class="m-auto flex max-w-6xl flex-col px-4 py-4 md:px-0">
    <div class="flex flex-col items-center justify-center">
      <img :src="speaker.image" :alt="`${speaker.name}-profile-image`" class="w-72 rounded-full" />
      <div class="my-4 text-center">
        <h1 class="text-4xl font-bold">{{ speaker.name }}</h1>
        <h1 class="text-xl">{{ speaker.title }}</h1>
      </div>
      <div class="flex items-center gap-2">
        <p class="flex items-center">
          <Icon name="mdi:briefcase-outline" size="35" /><span class="text-xl">{{ speaker.company }}</span>
        </p>
        <div v-for="socialLink in speaker.socialLinks" :key="socialLink">
          <a :href="socialLink" class="flex items-center">
            <Icon :name="socialIcon(socialLink)" size="35" />
          </a>
        </div>
      </div>
    </div>
    <div v-for="{
      eventId,
      eventTitle,
      eventDate,
      videos,
      slides,
      talkTitle,
      talkDescription,
      talkPoster,
    } in 
     speakerTalk" :key="`${eventId}-${eventTitle}`" class="mt-8">
      <div class="w-md grid p-2">
        <img :src="talkPoster.src" :alt="talkPoster.alt" class="md:h-96 md:w-auto w-screen justify-self-center" />
      </div>
      <div class="grid max-w-md md:grid-cols-[1fr_2fr] grid-cols-1 p-2">
        <h3 class="text-xl font-bold">Event:</h3>
        <NuxtLink class="" :to="`/events/${eventId}`">
          {{ eventTitle }}
        </NuxtLink>
        <h3 class="text-xl font-bold">Date:</h3>
        <p>{{ eventDate }}</p>
        <h3 class="text-xl font-bold">Topic:</h3>
        <p>{{ talkTitle }}</p>
        <h3 class="text-xl font-bold">Description:</h3>
        <p>{{ talkDescription }}</p>
        <h3 v-if="slides" class="text-xl font-bold">Event Slides:</h3>
        <NuxtLink v-if="slides" class="" :to="slides.link"> Link </NuxtLink>
      </div>
      <div class="grid md:grid-cols-[1fr_2fr] grid-cols-1 p-2">
        <h3 v-if="videos" class="text-xl font-bold">Event Video:</h3>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-2">
          <iframe v-for="video in videos" :key="video" :src="video" class="w-full" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
      <hr />
    </div>
  </main>
</template>

<style scoped></style>
