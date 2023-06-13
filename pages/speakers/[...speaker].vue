<template>
  <main class="m-auto flex max-w-6xl flex-col px-4 py-4 md:px-0">
    <div class="flex flex-col items-center justify-center">
      <img
        :src="speaker.image"
        :alt="`${speaker.name}-profile-image`"
        class="w-72 rounded-full"
      />
      <h1 class="m-7 text-4xl font-bold">{{ speaker.name }}</h1>
      <div class="flex items-center gap-2">
        <p class="flex items-center">
          <Icon name="mdi:briefcase-outline" size="35" /><span
            class="text-2xl"
            >{{ speaker.company }}</span
          >
        </p>
        <div v-for="socialLink in speaker.socialLinks" :key="socialLink">
          <a :href="socialLink" class="flex items-center">
            <Icon :name="socialIcon(socialLink)" size="35" />
          </a>
        </div>
      </div>
    </div>
    <div
      v-for="{
        link,
        title,
        videos,
        slides,
        talkTitle,
        talkDescription,
        poster,
      } in speaker.events"
      :key="title"
      class="mt-8"
    >
      <div class="w-md grid p-2">
        <img
          :src="poster"
          :alt="`${speaker.name} Event Poster`"
          class="h-96 justify-self-center"
        />
      </div>
      <div class="grid max-w-md grid-cols-[1fr_2fr] p-2">
        <h3 class="text-xl font-bold">Event:</h3>
        <NuxtLink class="" :to="`/events/${link}`">
          {{ title }}
        </NuxtLink>
        <h3 class="text-xl font-bold">Topic:</h3>
        <p>{{ talkTitle }}</p>
        <h3 class="text-xl font-bold">Description:</h3>
        <p>{{ talkDescription }}</p>
        <h3 v-if="slides" class="text-xl font-bold">Event Slides:</h3>
        <NuxtLink v-if="slides" class="" :to="slides"> Link </NuxtLink>
      </div>
      <div class="grid grid-cols-[1fr_7fr] p-2">
        <h3 v-if="videos" class="text-xl font-bold">Event Video:</h3>
        <div class="grid grid-cols-3 gap-2">
          <iframe
            v-for="video in videos"
            :key="video"
            :src="video"
            class="w-full"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <hr />
    </div>
  </main>
</template>

<script setup>
import {
  getSpeakerData,
  getSpeakerDataFromEvents,
} from "@/components/utils/commonUtils";

const [id] = useRoute().params.speaker;

const speaker = {
  ...(await getSpeakerData(id)),
  events: await getSpeakerDataFromEvents(id),
};

console.log("😊", speaker);

useHead({
  title: `${speaker.name} | Vue.js Israel`,
  meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const socialIcon = (socialLink) => {
  const socialName = socialLink.split(".")[1];
  return `mdi:${socialName}`;
};
</script>

<style scoped></style>
