<template>
  <div
    class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-dark-bg-dark text-dark-text-lightest">
    <div class="flex space-x-4">
      <img :src="speaker.image" :alt="`profile picture of ${speaker.name}`"
        class="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500">
      <div class="flex flex-col space-y-1">
        <span href="#" class="text-sm font-semibold">{{ speaker.name }} </span>
        <span class="text-xs dark:text-gray-400">{{ speaker.title }}</span>
      </div>
    </div>
    <div>
      <img :src="talk.talkPoster.src" :alt="talk.talkPoster.alt" class="object-cover w-full mb-4 dark:bg-gray-500">

      <NuxtLink :to="`/events/${talk.eventId}`">
        <h2 class="mb-1 text-xl font-semibold hover:text-cta-hover hover:underline">{{ currentEvent.eventTitle }}</h2>
      </NuxtLink>
      <h2 class="mb-1 text-lg font-semibold">{{ talk.talkTitle }}</h2>
      <p class="text-sm dark:text-gray-400">{{ talk.talkDescription }}</p>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="space-x-2">
        <a v-for="socialLink in speaker.socialLinks" :key="socialLink" :href="socialLink" target="_blank">
          <Icon :name="socialIcon(socialLink)" size="22" class="hover:text-cta-hover" />
        </a>
      </div>
      <div class="flex space-x-2 text-sm">
        <a v-for="video in talk.videos" :href="video" target="_blank">
          <Icon name="mdi:youtube" size="22" class="hover:text-cta-hover" />
        </a>
        <a :href="talk.slides.link" target="_blank" :title="talk.slides.title">
          <Icon name="mdi:presentation" size="22" class="hover:text-cta-hover" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialIcon } from "@/components/utils/urlUtils";
import events from '@/content/events.json'

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
const currentEvent = computed(() => {
  const { eventId } = props.talk
  return events[eventId]
})
</script>

<style scoped></style>
