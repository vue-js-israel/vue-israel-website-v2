<script setup>
// get current route slug
const {
  params: { slug },
} = useRoute();

// get array of filters by generating array from separating slug`,`
const filter = slug.join()
// set meta for page
useHead({
  title: `All articles with ${slug}`,
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles with {{ filter }}</h1>
        <p class="text-lg font-medium">
          Vue.JS Israel Official Events
        </p>
      </div>
    </header>
    <section class="page-section">
      <!-- Render list of all articles in ./content/events using `path` -->
      <!-- Provide only defined field the `:query` prop -->
      <ContentList
        path="/events"
        :query="{
          only: ['title', 'description', 'date', 'location', 'tags', '_path'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="event-list">
            <li v-for="event in list" :key="event._path" class="event-item">
              <EventsEventCard :event="event" />
            </li>
          </ul>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped>
.event-list {
  @apply m-auto my-3 flex max-w-md flex-col gap-3;
}
</style>
