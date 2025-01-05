<script setup>
useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vus.js Israel's events" }],
});

const { events, tags } = useEvents();
</script>

<template>
  <div>
    <Banner ctaUrl="/contact-us" ctaText="Host the Event">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Host the Next Talk!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Showcase Your</span>
        <span class="text-lg font-bold">Innovation and Expertise</span>
      </div>
    </Banner>
    <div class="container mx-auto space-y-16">
      <div
        class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
        <p class="text-md p-2 text-center font-medium uppercase">Events</p>
        <div class="w-full">
          <TagsController :tags="tags" />
        </div>
        <section class="my-5">
          <EventsCard
            v-for="event in events"
            :key="event.eventId"
            :event="event" />
        </section>
      </div>
    </div>
    <Banner ctaUrl="#" ctaText="Host the Event">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        Host the Next Talk!
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Showcase Your</span>
        <span class="text-lg font-bold">Innovation and Expertise</span>
      </div>
    </Banner>
  </div>
</template>

<style scoped></style>
