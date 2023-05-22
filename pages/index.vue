<template>
  <NuxtLayout />
  <main >
    <section class="max-w-7xl h-96 bg-green-100 m-auto p-4 flex flex-col justify-around">
      <header class="m-5">
        <h1 class="text-center text-5xl text-green-800">Vue.JS Israel Official Website V2</h1>
      </header>
      <div class="text-green-800">
        <p class="text-2xl my-3">Something great is about to happen!</p>
        <p>Vue.JS Israel is getting a new WEBSITE!</p>
        <p>Meanwhile you are more then welcome to visit our <a href="https://www.vuejsisrael.com/" class="text-green-400 hover:underline">Vue.JS Israel Official
            Website</a></p>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "VueJS Israel",
  meta: [{ name: "description", content: "VueJS Israel The Official Website" }],
});
</script>

<style scoped></style>