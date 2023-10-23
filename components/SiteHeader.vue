<script setup>

const menuToggle = ref(false)

const openMenu = () => {
  menuToggle.value = true
  document.body.style.overflow = 'hidden';
}
const closeMenu = () => {
  menuToggle.value = false
  document.body.style.overflow = 'auto';
}
</script>

<template>
  <header
    class="max-h-24 min-h-fit p-4 bg-dark-bg-dark text-dark-text-lightest border-light-bg-lighter dark:border-dark-bg-dark border-b-2">
    <div v-if="menuToggle"
      class="md:hidden absolute top-0 left-0 right-0 bottom-0 z-50 w-full opacity-95 dark:bg-dark-bg-darker bg-white py-7 px-4 flex justify-between">
      <ul class="flex flex-col gap-10 justify-center text-3xl">
        <li>
          <NuxtLink @click="closeMenu" class="flex items-center border-b-2 px-4 dark:border-transparent link"
            to="/events">Events
          </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="closeMenu" class="flex items-center border-b-2 px-4 dark:border-transparent link"
            to="/speakers">Speakers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="closeMenu" class="flex items-center border-b-2 px-4 dark:border-transparent link" to="/talks">
            Talks
          </NuxtLink>
        </li>
        <li>
          <NuxtLink @click="closeMenu" class="flex items-center border-b-2 px-4 dark:border-transparent link"
            to="/contact-us">Contact Us
          </NuxtLink>
        </li>
      </ul>
      <button @click="closeMenu" class="flex justify-end p-4 md:hidden">
        <Icon name="mdi:close" size="60" />
      </button>
    </div>
    <div class="container mx-auto flex h-16 justify-between">
      <NuxtLink to="/" aria-label="Back to homepage" class="flex items-center p-2">
        <NuxtImg src="/logo/Vue.js-Israel-community-logo.svg" alt="Vue.js Israel Community Logo" width="32px"
          height="28px" />
        Vue.js Israel Community
      </NuxtLink>
      <ul class="hidden items-stretch space-x-3 md:flex">
        <li class="flex">
          <NuxtLink class="-mb-1 flex items-center border-b-2 px-4 border-transparent link" to="/events">Events
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="-mb-1 flex items-center border-b-2 px-4 border-transparent link" to="/speakers">Speakers
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="-mb-1 flex items-center border-b-2 px-4 border-transparent link" to="/talks">Talks
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink class="-mb-1 flex items-center border-b-2 px-4 border-transparent link" to="/contact-us">Contact Us
          </NuxtLink>
        </li>
      </ul>
      <button @click.prevent="openMenu" aria-label="menu button" class="flex justify-end p-4 md:hidden">
        <Icon name="mdi:menu" size="30" />
      </button>
    </div>
  </header>
</template>

<style scoped>
a.router-link-active.link {
  font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active.link {
  @apply border-cta-base text-cta-base;
}

a:hover {
  @apply text-cta-hover;
}
</style>
