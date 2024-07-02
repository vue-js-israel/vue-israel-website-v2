<template>
  <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
				<div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
          <div class="self-center flex items-center justify-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500">

            <CompaniesLogo :domain="company.logo" :size="48"  />
          </div>
					<div class="flex-1 my-4">
						<p 
            class="text-xl font-semibold leading-snug" :class="[
          'text-4xl',
          'text-center',
          { 'text-3xl': company.company.length > 20 },
          'font-bold',
          'text-white',
        ]"> {{ company.company }}</p>
						<p> {{company.location}}</p>
					</div>
					<div class="flex items-center justify-center p-3 space-x-3 border-t-2">
						<a  v-if="company.website" :href="company.website">
        <Icon name="mdi:web" width="2em" height="2rem" style="color: white" />
      </a>
      <a  v-if="company.linkedin" :href="company.linkedin">
        <Icon
          name="mdi:linkedin"
          width="2rem"
          height="2rem"
          style="color: white" />
      </a>
      <a  v-if="company.facebook" :href="company.facebook">
        <Icon
          name="mdi:facebook"
          width="2rem"
          height="2rem"
          style="color: white" />
      </a>
      <a  v-if="company.github" :href="company.github">
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
