<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let event = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    event: await event,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title: `Vue Israel | ${data.value.event.title}`,
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
  <NuxtLayout />
  <main id="main" class="event-main">
    <header v-if="data.event" class="event-header">
      <div class="img-container">
        <img
          :src="`/${data.event.img}`"
          :alt="data.event.title"
          class="max-h-80 rounded-2xl"
        />
      </div>
      <h1 class="heading">{{ data.event.title }}</h1>
      <p class="supporting">{{ data.event.description }}</p>
      <ul class="tag-container">
        <li
          class="tag"
          v-for="(tag, n) in data.event.tags"
          :key="`tag-key-${tag}-${n}`"
        >
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr />
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
/* :deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6),
:deep(p),
:deep(a),
:deep(ul),
:deep(li),
:deep(ol),
:deep(img),
:deep(hr) {
  margin: 0px;
} */

.event-header {
  @apply m-auto my-10 flex max-w-screen-xl flex-col flex-wrap content-center justify-center;
}
.event-header .heading {
  @apply text-4xl font-extrabold;
}
.event-header .img-container {
  @apply w-fit;
}
.event-header .tag-container {
  @apply my-2 flex gap-1;
}
.event-header .tag-container .tag {
  @apply rounded-md bg-gray-200 p-0.5 text-xs;
}
.event-section {
  @apply grid grid-cols-8;
}
.event-section .event {
  @apply prose col-span-full m-auto w-full max-w-3xl p-4 md:col-span-6 md:col-start-1 md:row-start-1;
}
.aside {
  @apply row-start-1 pt-14;
}
.aside .toc {
  @apply sticky top-20;
}
</style>
