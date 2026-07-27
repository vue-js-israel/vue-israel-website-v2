<script setup>
useHead({
  title: "Vue.js Israel Events",
  meta: [{ name: "description", content: "Vue.js Israel's events" }],
});

const { events, tags } = useEvents();

const bannerContent = {
  title: "Host the Next Talk!",
  subtitle: "Innovation and Expertise",
  ctaUrl: "/contact-us",
  ctaText: "Host the Event",
};
</script>

<template>
  <div>
    <Banner :ctaUrl="bannerContent.ctaUrl" :ctaText="bannerContent.ctaText">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        {{ bannerContent.title }}
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Showcase Your</span>
        <span class="text-lg font-bold">{{ bannerContent.subtitle }}</span>
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
    <Banner :ctaUrl="bannerContent.ctaUrl" :ctaText="bannerContent.ctaText">
      <h2 class="text-center text-5xl font-bold md:text-4xl">
        {{ bannerContent.title }}
      </h2>
      <div class="space-x-2 py-2 text-center lg:py-0">
        <span>Showcase Your</span>
        <span class="text-lg font-bold">{{ bannerContent.subtitle }}</span>
      </div>
    </Banner>
  </div>
</template>

<style scoped></style>
