<!-- ./components/SiteHeader.vue -->

<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="flex no-underline">
        <img
          class="mr-2 w-8"
          src="/logo/Vue.js-Israel-community-logo.svg"
          alt="Vue.js Israel Community Logo"
        />
        Vue.js Israel Community
      </NuxtLink>

      <nav class="site-nav">
        <ul class="links">
          <li class="link">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 z-20 w-full border-b-2 border-white border-opacity-30 bg-emerald-100 bg-opacity-40 p-4 backdrop-blur-lg;
}

.site-header > .wrapper {
  @apply m-auto flex max-w-6xl items-center justify-between;
}

.site-logo {
  @apply text-lg font-black;
}
</style>
