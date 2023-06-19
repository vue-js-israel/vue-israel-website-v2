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
    <section class="max-w-7xl h-96 bg-green-100 m-auto p-4 flex flex-col justify-around">
      <header class="m-5"></header>


      <MarkdownContent v-for="(line, index) in data.event.agenda" :key="index" :value="line" />
      <MarkdownContent :value="data.event.mainParagraph" />

    </section>
  </main>
</template>


<style scoped></style>