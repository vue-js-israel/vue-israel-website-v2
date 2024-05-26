<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center rounded-lg p-4 py-6 sm:p-10 md:max-w-6xl">
    <table
      class="w-full whitespace-nowrap p-6 text-left text-xs text-white sm:text-sm md:text-base">
      <colgroup>
        <col v-for="(column, index) in columns" :key="index" />
      </colgroup>
      <thead>
        <tr class="bg-gray-800">
          <th class="p-3">A-Z</th>
          <th v-for="(column, index) in columns" :key="index" class="p-3">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="border-b border-gray-600 bg-gray-700">
        <template v-for="(group, letter) in sortedData" :key="letter">
          <template v-for="(item, itemIndex) in group" :key="itemIndex">
            <tr>
              <td
                v-if="itemIndex === 0"
                class="px-3 text-xl font-medium text-white dark:text-gray-400 md:text-2xl"
                :rowspan="group.length">
                {{ letter }}
              </td>
              <td
                v-for="(column, colIndex) in columns"
                :key="colIndex"
                class="px-3 py-2">
                <template v-if="column.key === 'link'">
                  <div class="mt-4 flex items-center space-x-4">
                    <template v-if="item.linkedin">
                      <a :href="item.linkedin">
                        <Icon
                          name="mdi:linkedin"
                          width="2rem"
                          height="2rem"
                          style="color: white"
                          class="h-8 w-8 text-blue-500 dark:text-blue-300" />
                      </a>
                    </template>
                    <template v-if="item.website">
                      <a :href="item.website">
                        <Icon
                          name="mdi:web"
                          width="2em"
                          height="2rem"
                          style="color: white" />
                      </a>
                    </template>
                  </div>
                </template>
                <template v-if="column.key === 'company'">
                  <div class="flex items-center">
                    <CompaniesLogo
                      :domain="item['logo']"
                      :size="24"></CompaniesLogo>
                    <span class="ml-2">{{ item[column.key] }}</span>
                  </div>
                </template>
                <template v-else>
                  <p>{{ item[column.key] }}</p>
                </template>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const columns = [
  { key: "company", label: "Company Name", filterable: true },
  { key: "location", label: "Location", filterable: true },
  { key: "link", label: "" },
];

const sortedData = props.data.reduce((acc, item) => {
  const firstLetter = item.company[0].toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(item);
  return acc;
}, {});
</script>
