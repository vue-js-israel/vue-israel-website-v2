<!-- ./components/SiteHeader.vue -->

<template>
    <header class="site-header">
      <div class="wrapper">
        <NuxtLink to="/" class="no-underline flex">
            <img class="w-8 mr-2" src="/logo/logo.svg" alt="Vue.js Israel Community Logo"> Vue.js Israel Community
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
    @apply sticky top-0 w-full p-4 bg-emerald-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
  }
  
  .site-header > .wrapper {
    @apply flex items-center justify-between max-w-6xl m-auto;
  }
  
  .site-logo {
    @apply font-black text-lg;
  }
  </style>