<template>
  <main class="max-w-6xl m-auto flex flex-col py-4 px-4 md:px-0">
    <div class="flex flex-col justify-center items-center">
      <img :src="currentSpeaker.image" :alt="`${currentSpeaker.name}-profile-image`" class="w-72 rounded-full">
      <h1 class="text-4xl font-bold m-7">{{ currentSpeaker.name }}</h1>
      <div class="flex items-center gap-2">
        <p class="flex items-center">
          <Icon name="mdi:briefcase-outline" size="35" /><span class="text-2xl">{{
            currentSpeaker.company
          }}</span>
        </p>
        <a :href="currentSpeaker.socialULR" class="flex items-center">
          <Icon name="mdi:linkedin" size="35" /><span class="text-2xl">Linkedin</span>
        </a>
      </div>
    </div>
    <div>
      <div>
        <h3 class="text-xl font-bold my-5">Speaker's Talks:</h3>
        <div class="px-5 grid md:grid-cols-3 gap-2">
          <NuxtLink class="shadow-md p-3 rounded-xl" v-for="event in speakerTalks" :key="event"
            :to="`/events/${event.link}`">
            {{ event.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="hasVideos">
      <h3 class="text-xl font-bold my-5">Videos:</h3>
      <div class="px-5 grid md:grid-cols-3 grid-cols-1 gap-2">
        <iframe v-for="video in currentSpeaker.video" :key="video" :src="video" class="w-full h-48"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
    <div v-if="hasSlides">
      <h3 class="text-xl font-bold my-5">Slides:</h3>
      <div class="px-5 grid md:grid-cols-3 gap-2">
        <a class="shadow-md p-3 rounded-xl" v-for="slide in currentSpeaker.slides" :key="slide" :href="slide.link">
          {{ slide.title }}
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { getStructuredSpeakerData } from '@/components/utils/commonUtils'

const { speaker } = useRoute().params
const speakerName = ref(speaker[0].split('-').join(' '));

const speakers = await getStructuredSpeakerData();
const currentSpeaker = speakers.find((speaker) => speaker.name === speakerName.value);

useHead({
  title: `${currentSpeaker.name} | Vue.js Israel`,
  meta: [
    { name: "description", content: "Vus.js Israel's speakers" },
  ],
});

const hasSlides = computed(() => {
  /**
   * In case that slides aren't declared in the md file,
   * the slides array will initialized with value of undefined
   */
  if (currentSpeaker.slides[0]) {
    return currentSpeaker?.slides?.length > 0
  }
  return false;
})

const hasVideos = computed(() => {
  /**
   * In case that Videos aren't declared in the md file,
   * the Video array will initialized with value of undefined
   */
  if (currentSpeaker.video[0]) {
    return currentSpeaker?.video?.length > 0
  }
  return false;
})


const speakerTalks = computed(() => {
  return currentSpeaker.event.map((event) => {
    return {
      title: event,
      link: event.split(' ').map(word => word.toLowerCase()).join('-')
    }
  });
})

</script>

<style scoped></style>
