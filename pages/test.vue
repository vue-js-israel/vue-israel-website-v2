<script setup>
// const { path } = useRoute();
const path = '/events/data-mangement-with-vue-test';
// const { data } = await useAsyncData(`content-${path}`, async () => {
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  const event = await queryContent().where({ _path: path }).findOne();
  
  
  return {
    event
  };
});

console.log("👾 ~ file: test.vue:9 ~ const{data}=awaituseAsyncData ~ event:", data.value.event)

</script>

<template>
  <main>
    <section class="max-w-7xl m-auto p-4 flex flex-col justify-around">
      <header class="m-5"></header>

      <img class="w-96" :src="data.event.eventPoster.src" :alt="data.event.eventPoster.alt">
      <h1 class="font-bold text-4xl my-8">{{ data.event.title }}</h1>
      <EventTags :tags="data.event.eventTags"/>
      <MarkdownContent :value="data.event.mainParagraph" class="text-lg my-6"/>
      <a class="text-2xl font-medium" href="#photos">📷 Photos</a>
      <hr/>
      <a class="text-2xl font-medium" href="#speakers">📢 Speakers</a>
      <hr/>
      <a class="text-2xl font-medium" href="#the-full-playlist">📹The full playlist</a>
      <hr/>
      <a class="text-2xl font-medium" href="#agenda">📆 Agenda</a>
      <hr/>
      <MarkdownContent v-for="(line, index) in data.event.agenda" :key="index" :value="line" class="my-2"/>

    </section>
  </main>
</template>


<style scoped></style>