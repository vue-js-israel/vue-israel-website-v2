<template>
  <div class="flex gap-1 my-2">
    <span class="rounded-md bg-gray-200 p-1 text-xs" v-for="(tag, n) in $slots.default()[0].props.id.split('-')" :key="`tag-key-${tag}-${n}`">
      {{ tag }}
    </span>
  </div>
</template>

<script setup></script>

<style scoped>
</style>
