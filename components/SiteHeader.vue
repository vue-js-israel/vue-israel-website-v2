<script setup>
const menuToggle = ref(false);

const openMenu = () => {
  menuToggle.value = true;
  document.body.style.overflow = "hidden";
};
const closeMenu = () => {
  menuToggle.value = false;
  document.body.style.overflow = "auto";
};
</script>

<template>
  <header
    class="sticky top-0 max-h-24 min-h-fit border-b-2 border-light-bg-lighter bg-dark-bg-dark p-4 text-dark-text-lightest dark:border-dark-bg-dark">
    <div class="container mx-auto flex h-16 justify-between">
      <NuxtLink
        to="/"
        aria-label="Back to homepage"
        class="flex items-center p-2">
        <NuxtImg
          src="/logo/Vue.js-Israel-community-logo.svg"
          alt="Vue.js Israel Community Logo"
          width="32px"
          height="28px" />
        Vue.js Israel Community
      </NuxtLink>
      <ul class="hidden items-stretch space-x-3 md:flex">
        <li class="flex">
          <NuxtLink
            class="link -mb-1 flex items-center border-b-2 border-transparent px-4"
            to="/events"
            >Events
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            class="link -mb-1 flex items-center border-b-2 border-transparent px-4"
            to="/speakers"
            >Speakers
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            class="link -mb-1 flex items-center border-b-2 border-transparent px-4"
            to="/talks"
            >Talks
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            class="link -mb-1 flex items-center border-b-2 border-transparent px-4"
            to="/contact-us"
            >Contact Us
          </NuxtLink>
        </li>
      </ul>
      <button
        class="flex justify-end p-4 md:hidden"
        aria-label="menu button"
        @click.prevent="openMenu">
        <Icon name="mdi:menu" size="30" />
      </button>
    </div>
  </header>
  <div
    v-if="menuToggle"
    class="sticky top-0 flex h-screen flex-col bg-white px-4 py-7 opacity-95 dark:bg-dark-bg-darker md:hidden">
    <div class="flex grow justify-between">
      <ul class="flex flex-col justify-center gap-10 text-3xl">
        <li>
          <NuxtLink
            class="link flex items-center border-b-2 px-4 dark:border-transparent"
            to="/events"
            @click="closeMenu"
            >Events
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="link flex items-center border-b-2 px-4 dark:border-transparent"
            to="/speakers"
            @click="closeMenu"
            >Speakers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="link flex items-center border-b-2 px-4 dark:border-transparent"
            to="/talks"
            @click="closeMenu">
            Talks
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="link flex items-center border-b-2 px-4 dark:border-transparent"
            to="/contact-us"
            @click="closeMenu"
            >Contact Us
          </NuxtLink>
        </li>
      </ul>
      <button class="flex justify-end p-4 md:hidden" @click="closeMenu">
        <Icon name="mdi:close" size="60" />
      </button>
    </div>
    <div class="self-center"><ThemeToggler /></div>
  </div>
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
