<template>
	<section class="py-6">
		<div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
			<p class="p-2 text-sm font-medium tracki text-center uppercase">Speakers</p>
			<h1 class="text-4xl font-bold leadi text-center sm:text-5xl">Vue.js Israel community speakers</h1>
			<div class="flex flex-row flex-wrap-reverse justify-center gap-4 mt-8">
				<template v-for="talk in talks" :key="`${talk.talkId}-key`">
					<template v-for="speakerId in talk.speakerIds" :key="`${speakerId}-key`">
						<SpeakersSpeakerCard :speaker="speakers[speakerId]" :talk="talk"/>
					</template>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup>
import { speakers } from '@/content/speakers.json'
import { talks } from '@/content/talks.json'
useHead({
	title: "Vue.js Israel Speakers",
	meta: [{ name: "description", content: "Vus.js Israel's speakers" }],
});

</script>

<style scoped></style>
