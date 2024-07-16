<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center rounded-lg p-4 py-6 sm:p-10 md:max-w-6xl">
    <table
      class="w-full max-w-3xl whitespace-nowrap p-6 text-left text-xs text-white sm:text-sm md:text-base">
      <thead>
        <tr class="bg-gray-800 font-normal">
          <th class="w-32 px-3 py-2 md:w-72">Company Name</th>
          <th class="px-3 py-2">City</th>
          <th class="px-3 py-2">Links</th>
        </tr>
      </thead>
      <tbody class="border-b border-gray-600 bg-gray-700 font-light">
        <tr
          v-for="{ logo, company, location, links } in companiesData"
          :key="company">
          <td class="flex w-32 items-center gap-2 px-3 py-2 md:w-72">
            <div
              class="relative flex h-8 w-8 items-center justify-center overflow-hidden border border-gray-300 bg-white">
              <CompaniesLogo :domain="logo" :size="24"></CompaniesLogo>
            </div>
            <span class="ml-2 whitespace-break-spaces">{{ company }}</span>
          </td>

          <td class="px-3 py-2">
            <p>{{ location }}</p>
          </td>

          <td
            class="grid grid-cols-2 grid-rows-2 place-content-center px-3 py-2 md:grid-cols-4 md:grid-rows-1 md:place-content-start">
            <NuxtLink
              v-for="companyLink in links"
              :key="companyLink.url"
              :to="companyLink.url"
              class="flex items-center justify-center md:justify-start">
              <Icon
                :name="`mdi:${companyLink.name}`"
                width="2rem"
                height="2rem"
                style="color: white"
                class="h-8 w-8 text-blue-500 dark:text-blue-300" />
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { companiesData } = defineProps({
  companiesData: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
