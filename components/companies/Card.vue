<template>
  <div class="mt-12 flex w-60 flex-row flex-wrap-reverse justify-center">
    <div
      class="flex w-full flex-col justify-center rounded-md bg-gray-800 px-8 text-center text-gray-100 md:w-96 lg:w-80 xl:w-64">
      <div
        class="-mt-12 flex h-24 w-24 flex-shrink-0 items-center justify-center self-center rounded-full bg-gray-500 bg-cover bg-center">
        <CompaniesLogo :domain="company.logo" :size="48" />
      </div>
      <div class="my-4 flex-1">
        <p
          class="text-xl font-semibold leading-snug"
          :class="[
            'text-4xl',
            'text-center',
            { 'text-3xl': company.company.length > 20 },
            'font-bold',
            'text-white',
          ]">
          {{ company.company }}
        </p>
        <p>{{ company.location }}</p>
      </div>
      <div class="flex items-center justify-center space-x-3 border-t-2 p-3">
        <a v-if="company.website" :href="company.website">
          <Icon name="mdi:web" width="2em" height="2rem" style="color: white" />
        </a>
        <a v-if="company.linkedin" :href="company.linkedin">
          <Icon
            name="mdi:linkedin"
            width="2rem"
            height="2rem"
            style="color: white" />
        </a>
        <a v-if="company.facebook" :href="company.facebook">
          <Icon
            name="mdi:facebook"
            width="2rem"
            height="2rem"
            style="color: white" />
        </a>
        <a v-if="company.github" :href="company.github">
          <Icon
            name="mdi:github"
            width="2rem"
            height="2rem"
            style="color: white" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  company: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
