<template>
  <div
    class="flex max-w-lg flex-col space-y-6 overflow-hidden rounded-lg bg-dark-bg-dark p-6 text-dark-text-lightest shadow-md">
    <div class="flex space-x-4">
      <NuxtImg
        provider="cloudinary"
        class="rounded-full"
        :src="speaker.image"
        :alt="`${speaker.name} profile picture`"
        width="64px"
        heigh="64px"
        fetchFormat="auto"
        quality="auto"
        loading="lazy"
        densities="x1 x2" />
      <div class="flex flex-col space-y-1">
        <span href="#" class="text-sm font-semibold">{{ speaker.name }} </span>
        <span class="text-xs dark:text-gray-400">{{ speaker.title }}</span>
      </div>
    </div>
    <div class="flex-1">
      <NuxtImg
        provider="cloudinary"
        :src="talk.talkPoster.src"
        :alt="`Vue.js Israel speaker - ${speaker.name}`"
        fetchFormat="auto"
        quality="auto"
        loading="lazy"
        width="464px"
        height="464px"
        densities="x1 x2" />

      <NuxtLink :to="`/events/${talk.eventId}`">
        <h2
          class="mb-1 mt-5 text-xl font-semibold hover:text-cta-hover hover:underline">
          {{ currentEvent.eventTitle }}
        </h2>
      </NuxtLink>
      <h2 class="mb-1 text-lg font-semibold">{{ talk.talkTitle }}</h2>
      <p class="text-sm dark:text-gray-400">{{ talk.talkDescription }}</p>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="space-x-2">
        <a
          v-for="socialLink in speaker.socialLinks"
          :key="socialLink"
          :href="socialLink"
          target="_blank">
          <Icon
            :name="socialIcon(socialLink)"
            size="22"
            class="hover:text-cta-hover" />
        </a>
      </div>
      <div class="flex space-x-2 text-sm">
        <a
          v-for="(video, index) in videoLinks"
          :key="index"
          :href="video"
          target="_blank">
          <Icon name="mdi:youtube" size="22" class="hover:text-cta-hover" />
        </a>
        <a
          v-if="talk.slides.link"
          :href="talk.slides.link"
          target="_blank"
          :title="talk.slides.title">
          <Icon
            name="mdi:presentation"
            size="22"
            class="hover:text-cta-hover" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialIcon } from "@/utils/urlUtils";
import events from "@/content/events.json";

const props = defineProps({
  speaker: {
    type: Object,
    require: true,
    default: () => {},
  },
  talk: {
    type: Object,
    require: true,
    default: () => {},
  },
  event: {
    type: Object,
    require: true,
    default: () => {},
  },
});
const currentEvent = computed(() => {
  const { eventId } = props.talk;
  return events[eventId];
});
const videoLinks = computed(() => {
  const { videos } = props.talk;
  return videos.filter((video) => video && video.trim() !== "");
});
</script>

<style scoped></style>
