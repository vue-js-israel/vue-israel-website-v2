<script setup>
import markdownParser from "@nuxt/content/transformers/markdown";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const getParsedMarkdown = async (markdown) => {
  return await markdownParser.parse("", markdown);
};

const markdown = await getParsedMarkdown(props.value);
</script>

<template>
  <ContentRenderer :value="markdown">
    <ContentRendererMarkdown :value="markdown" v-bind="$attrs"/>
  </ContentRenderer>
</template>

<style scoped></style>
