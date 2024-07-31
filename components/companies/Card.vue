<template>
  <div class="mt-12 flex w-60 flex-row flex-wrap-reverse justify-center">
    <div
      class="flex w-full flex-col justify-center rounded-md bg-gray-800 px-8 text-center text-gray-100 md:w-96 lg:w-80 xl:w-64">
      <div
        class="-mt-12 flex h-24 w-24 flex-shrink-0 items-center justify-center self-center rounded-full bg-white bg-cover bg-center">
        <CompaniesLogo :domain="company.companyLogo" :size="48" />
      </div>
      <div class="my-4 flex-1">
        <p
          class="text-xl font-semibold leading-snug"
          :class="[
            'text-4xl',
            'text-center',
            { 'text-3xl': company.companyName.length > 20 },
            'font-bold',
            'text-white',
          ]">
          {{ company.companyName }}
        </p>
        <p>{{ company.companyCity }}</p>
      </div>
      <div class="flex items-center justify-center space-x-3 border-t-2 p-3">
        <NuxtLink :to="company.companyWebsite">
          <Icon :name="'mdi:web'" :size="'32'" class="hover:text-cta-hover" />
        </NuxtLink>
        <NuxtLink
          v-for="companyLink in company.companySocialLinks"
          :key="companyLink.url"
          :to="companyLink.url">
          <Icon
            :name="`${companyLink.socialMediaType}`"
            width="2em"
            height="2rem"
            class="hover:text-cta-hover" />
        </NuxtLink>
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
