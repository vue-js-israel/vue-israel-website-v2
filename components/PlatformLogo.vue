<script setup>
import platforms from "@/content/platforms.json";

const props = defineProps({
  platformName: {
    type: String,
    default: "",
  },
});

const platform = platforms.find(
  (platform) => platform.name === props.platformName
);
</script>

<template>
  <a
    :href="platform.url"
    target="_blank"
    :title="`Vue JS Israel ${platform.label}`"
    class="flex h-8 w-8 items-center justify-center rounded-full hover:text-cta-hover sm:h-10 sm:w-10">
    <Icon :name="platform.icon" size="30" />
  </a>
</template>
