<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center rounded-lg p-4 py-6 sm:p-10 md:max-w-6xl">
    <table
      class="w-full whitespace-nowrap p-6 text-left text-xs text-white sm:text-sm md:text-base">
      <thead>
        <tr class="flex flex-row items-center bg-gray-800 p-2 font-normal">
          <th class="w-1/3">Company Name</th>
          <th class="w-1/3 text-center">City</th>
          <th class="w-1/3 text-end">Links</th>
        </tr>
      </thead>
      <tbody class="border-b border-gray-800 bg-gray-700 font-light">
        <tr
          v-for="{ logo, company, location, links } in companiesData"
          :key="company"
          class="flex flex-row items-center border-b border-gray-800 p-2">
          <td class="flex w-1/3 items-center gap-2">
            <div class="rounded-md bg-white p-1">
              <CompaniesLogo :domain="logo" :size="24"></CompaniesLogo>
            </div>
            <span class="whitespace-break-spaces">{{ company }}</span>
          </td>

          <td class="w-1/3 text-center">
            <p>{{ location }}</p>
          </td>

          <td
            dir="rtl"
            class="grid w-1/3 grid-cols-2 justify-end gap-y-4 text-start md:grid-cols-4">
            <NuxtLink
              v-for="companyLink in links"
              :key="companyLink.url"
              :to="companyLink.url">
              <Icon
                :name="`mdi:${companyLink.name}`"
                :size="'40'"
                class="hover:text-cta-hover" />
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
