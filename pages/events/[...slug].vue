<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  let event = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    event: await event,
    surround: await surround,
  };
});

// destructure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title: `Vue.js Israel | ${data.value.event.title}`,
  meta: [
    { name: "description", content: data.value.event.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.event.img}`,
    },
  ],
});
</script>

<template>
  <main id="main" class="event-main">
    <section class="event-section">
      <aside class="aside">
        <TableOfContent :links="data.event.body.toc.links" />
      </aside>
      <article class="event">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.event">
          <!-- render rich text from document -->
          <ContentRendererMarkdown :value="data.event" />
          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>
    <!-- PrevNext Component -->
  </main>
</template>

<style scoped>


.event-header {
  @apply m-auto my-10 flex max-w-screen-xl flex-col flex-wrap content-center justify-center;
}

.event-header .heading {
  @apply text-4xl font-extrabold;
}

.event-header .img-container {
  @apply w-fit;
}

.event-section {
  @apply grid grid-cols-10;
}

.event-section .event {
  @apply prose col-span-full m-auto w-full max-w-3xl px-4 md:col-span-7 md:col-start-1 md:row-start-1 md:p-4;
}

.aside {
  @apply px-4 pt-8 col-span-full md:col-start-8 md:col-end-10 md:pt-12;
}

.aside .toc {
  @apply sticky top-20;
}</style>
