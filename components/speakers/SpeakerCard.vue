<template>
  <div
    class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
    <div class="flex space-x-4">
      <img :src="speaker.image" :alt="`profile picture of ${speaker.name}`"
        class="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500">
      <div class="flex flex-col space-y-1">
        <span rel="noopener noreferrer" href="#" class="text-sm font-semibold">{{ speaker.name }} </span>
        <span class="text-xs dark:text-gray-400">{{ speaker.title }}</span>
      </div>
    </div>
    <div>
      <img :src="talk.talkPoster.src" :alt="talk.talkPoster.alt"
        class="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500">
      
      <NuxtLink class="" :to="`/events/${talk.eventId}`">
          <h1 class="mb-1 text-xl font-semibold">{{ currentEvent.eventTitle }}</h1>
        </NuxtLink>
      <h2 class="mb-1 text-lg font-semibold">{{ talk.talkTitle }}</h2>
      <p class="text-sm dark:text-gray-400">{{ talk.talkDescription }}</p>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="space-x-2">
        <a v-for="socialLink in speaker.socialLinks" :key="socialLink" @click.stop :href="socialLink">
          <Icon :name="socialIcon(socialLink)" size="22" />
        </a>
      </div>
      <div class="flex space-x-2 text-sm">
        <a v-for="video in talk.videos" :href="video">
          <Icon name="mdi:youtube" size="22" />
        </a>
        <a v-for="slide in talk.slides" :href="slide">
          <Icon name="mdi:presentation" size="22" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialIcon } from "@/components/utils/urlUtils";
import {events} from '@/content/events.json'

const props = defineProps({
  speaker: {
    type: Object,
    require: true,
  },
  talk: {
    type: Object,
    require: true,
  },
});
const currentEvent = computed(()=>{
  const {eventId} = props.talk
  return events.find(event=>event.eventId === eventId);
})
</script>

<style scoped></style>
