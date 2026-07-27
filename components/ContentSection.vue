<template>
  <div>
    <hr class="my-6" />
    <a :id="id" class="text-2xl font-medium" :href="`#${id}`">{{ title }}</a>
    <slot :contents="contents">
      <div v-if="type === 'markdown'" class="mt-6">
        <MarkdownContent
          v-for="line in contents"
          :key="line"
          :value="line"
          class="my-2" />
      </div>
      <div v-else class="mt-6 flex flex-col gap-2">
        <a
          v-for="content in contents"
          :key="content"
          :href="content"
          target="_blank"
          class="underline">
          {{ content }}
        </a>
        <p v-if="contents.length === 0">Coming soon!</p>
      </div>
    </slot>
    <slot name="extra" />
  </div>
</template>
<script setup>
const props = defineProps({
  contents: {
    type: Array,
    required: true,
    default: () => [],
  },
  id: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
  type: {
    type: String,
    default: () => "",
  },
});
</script>
