<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconSize: {
    type: String,
    default: "30",
  },
});
</script>

<template>
  <NuxtLink
    :href="url"
    target="_blank"
    :title="title"
    class="flex h-8 w-8 items-center justify-center rounded-full hover:text-cta-hover sm:h-10 sm:w-10">
    <Icon :name="icon" :size="iconSize" />
  </NuxtLink>
</template>
