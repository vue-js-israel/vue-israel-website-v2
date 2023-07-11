<template>
	<section class="py-6">
		<div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
			<p class="p-2 text-sm font-medium tracki text-center uppercase">Speakers</p>
			<h1 class="text-4xl font-bold leadi text-center sm:text-5xl">Vue.js Israel community speakers</h1>
			<div class="flex flex-row flex-wrap-reverse justify-center mt-8">
				<SpeakersSpeakerCard v-for="(speaker, index) in speakersList" :key="`${speaker.name}-${index}-key`"
					:speaker="speaker" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { speakers } from '@/content/speakers.json'

useHead({
	title: "Vue.js Israel Speakers",
	meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

const speakersList = computed(() => {
	const speakersList = Object.entries(speakers).map(([id, speaker]) => {
		return { id, ...speaker };
	});
	
	return speakersList
})
</script>

<style scoped></style>
