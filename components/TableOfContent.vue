<script setup>
defineProps(["links"]);

</script>
<template>
  <nav class="rounded-lg border border-slate-200 dark:border-dark-text-light hover:border-cta-hover bg-light-bg-lightest dark:bg-dark-bg-dark p-4 overflow-auto sticky top-20">
    <header class="mb-2 border-b border-slate-200 dark:border-dark-text-light pb-2">
      <h3 class="text-xl font-bold">Table of contents</h3>
    </header>
    <ul class="flex flex-col gap-2 px-2">
      <!-- render each link with depth class -->
      <li v-for="link of links" :key="link.id" :class="`toc-link _${link.depth}`">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

.toc-link {
  @apply text-light-text-dark dark:text-dark-text-lighter;
}

.toc-link._3 {
  @apply pl-3;
}

.toc-link._4 {
  @apply pl-6;
}

.toc-link._undefined {
  @apply pl-8;
}
</style>
