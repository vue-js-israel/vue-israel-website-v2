<!-- ./components/SiteHeader.vue -->

<template>
  <header class="p-4 dark:bg-gray-800 dark:text-gray-100 max-h-24">
    <div class="container flex justify-between h-16 mx-auto">
      <NuxtLink to="/" aria-label="Back to homepage" class="flex items-center p-2">
        <img class="mr-2 w-8" src="/logo/Vue.js-Israel-community-logo.svg" alt="Vue.js Israel Community Logo" />
        Vue.js Israel Community
      </NuxtLink>
      <ul class="items-stretch hidden space-x-3 md:flex">
        <li class="flex">
          <NuxtLink class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" to="/events">Events</NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" to="/speakers">Speakers
          </NuxtLink>
        </li>
      </ul>
      <!-- <button class="flex justify-end p-4 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button> -->
    </div>
  </header>
</template>

<style scoped>

a.router-link-active {
  font-weight: bold;
  
}

/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active {
  @apply  text-violet-400 border-violet-400
}

a:hover {
  @apply text-violet-400
}

</style>
