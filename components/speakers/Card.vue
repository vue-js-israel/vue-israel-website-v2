<script setup>
import { socialIcon } from "@/components/utils/urlUtils";

defineProps({
  speaker: {
    require: true,
    default: {},
  },
});
</script>

<template>
  <NuxtLink
    :to="{ path: '/talks', query: { speakerId: speaker.speakerId } }"
    class="container rounded-lg md:max-w-6xl mx-auto flex flex-col items-center justify-center p-4 py-6 sm:p-10"
  >
    <div
      class="group mx-auto block max-w-sm gap-3 hover:no-underline focus:no-underline bg-dark-bg-dark text-dark-text-lightest lg:max-w-full lg:grid lg:grid-cols-12"
    >
      <div class="lg:col-span-3">
        <NuxtImg
          provider="cloudinary"
          :src="speaker.image"
          :alt="`${speaker.name} profile picture`"
          fetchFormat="auto"
          quality="auto"
          loading="lazy"
        />
      </div>

      <div class="space-y-2 p-6 lg:col-span-9">
        <h3
          class="text-2xl font-semibold group-hover:underline group-focus:underline sm:text-4xl"
        >
          {{ speaker.name }}
        </h3>
        <span class="text-xl dark:text-gray-400">{{ speaker.title }}</span>
        <p>
          {{ speaker.company }}
        </p>
        <div class="space-x-2">
          <a
            v-for="socialLink in speaker.socialLinks"
            :key="socialLink"
            :href="socialLink"
          >
            <Icon
              :name="socialIcon(socialLink)"
              size="22"
              class="hover:text-cta-hover"
            />
          </a>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
