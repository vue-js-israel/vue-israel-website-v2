<template>
  <div>
    <Banner
      ctaUrl="https://github.com/vue-js-israel/vue-israel-website-v2"
      ctaText="Create a Pull Request">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Does your company use Vue.js?
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Add your company</span>
        <span class="text-lg font-bold">Today!</span>
      </div>
    </Banner>
    <div
      class="container mx-auto items-center justify-center px-4 py-6 sm:p-10">
      <p class="text-md p-2 text-center font-medium uppercase">
        Israeli Companies that use Vue.js
      </p>
      <section class="container my-5 flex items-center justify-center">
        <label
          for="toggle-tabs"
          class="inline-flex cursor-pointer items-center rounded-md p-2 text-gray-100">
          <input
            id="toggle-tabs"
            v-model="activeTab"
            type="checkbox"
            class="peer hidden" />
          <span
            class="rounded-l-md bg-green-500 px-4 py-2 peer-checked:bg-gray-700"
            >Card View</span
          >
          <span
            class="rounded-r-md bg-gray-700 px-4 py-2 peer-checked:bg-green-500"
            >Table View</span
          >
        </label>
      </section>
      <section v-if="activeTab" class="my-5">
        <CompaniesTable :companiesData="companies" />
      </section>
      <div v-else class="flex justify-center">
        <div
          class="my-5 inline-grid grid-cols-1 gap-20 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="company in companies" :key="company.id">
            <CompaniesCard :company="company" />
          </template>
        </div>
      </div>
    </div>
    <Banner
      ctaUrl="https://github.com/vue-js-israel/vue-israel-website-v2"
      ctaText="Create a Pull Request">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Does your company use Vue.js?
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Add your company</span>
        <span class="text-lg font-bold">Today!</span>
      </div>
    </Banner>
  </div>
</template>

<script setup>
import { ref } from "vue";
import companies from "@/content/companies.json";
const activeTab = ref(true);
</script>

<style scoped></style>
