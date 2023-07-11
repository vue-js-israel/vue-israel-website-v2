<template>
  <NuxtLink :to="`/speakers/${speaker.id}`"
    class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-light-second text-dark-second">
    <img alt="" class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500 bg-slate-300"
      :src="speaker.image" :alt="`profile picture of ${speaker.name}`">
    <div class="flex-1 my-4">
      <p class="text-xl font-semibold leadi">{{ speaker.name }}</p>
      <p>{{ speaker.title }}</p>
    </div>
    <div class="flex items-center justify-center p-3 space-x-3 border-t-2 border-t-slate-400">
      <a v-for="socialLink in speaker.socialLinks" :key="socialLink" rel="noopener noreferrer" @click.stop :href="socialLink" class="text-gray-900 hover:text-violet-400">
        <Icon :name="socialIcon(socialLink)" size="30" />
      </a>
    </div>
  </NuxtLink>
</template>

<script setup>
import { socialIcon } from "@/components/utils/urlUtils";

const props = defineProps({
  speaker: {
    type: Object,
    require: true,
  },
});
</script>

<style scoped></style>
