<script setup>
import platforms from "@/content/platforms.json";

const props = defineProps({
  platformName: {
    type: String,
    default: "",
  },
});

const { platformName } = props;

const platform = platforms.find((platform) => platform.name === platformName);
</script>

<template>
  <NuxtLink
    :href="platform.url"
    target="_blank"
    :title="platform.title"
    class="flex h-8 w-8 items-center justify-center rounded-full hover:text-cta-hover sm:h-10 sm:w-10">
    <Icon :name="platform.icon" :size="platform.iconSize" />
  </NuxtLink>
</template>
