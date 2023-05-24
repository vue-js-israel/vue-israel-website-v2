<script setup>
useHead({
  title: "All articles",
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>

<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">Events</h1>
        <p class="text-lg font-medium">event of Vus.JS Israel</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList
        path="/events"
        :query="{
          only: ['title', 'description', 'date', 'location', 'tags', '_path'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="event-list">
            <li v-for="event in list" :key="event._path" class="event">
              <EventsEventCard :event="event" />
            </li>
          </ul>
        </template>

        <!-- slot to display message when no content is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped>

.page-section{
  @apply max-w-xl m-auto;
}
.event-list {
  @apply m-auto my-3 flex max-w-md flex-col gap-3;
}
</style>
