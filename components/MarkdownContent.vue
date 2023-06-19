<script setup>
import markdownParser from "@nuxt/content/transformers/markdown";

const props = defineProps({
    value: {
        type: String,
        required: true,
    }
})

const getParsedMarkdown = async (markdown) => {
    return await markdownParser.parse("", markdown);
};

const markdown = await getParsedMarkdown(props.value);

</script>

<template>
    <Suspense>
        <ContentRenderer :value="markdown">
            <ContentRendererMarkdown :value="markdown" />
        </ContentRenderer>
    </Suspense>
</template>

<style scoped></style>