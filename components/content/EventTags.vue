<template>
  <div class="tag-container">
    <span class="tag" v-for="(tag, n) in $slots.default()[0].props.id.split('-')" :key="`tag-key-${tag}-${n}`">
      {{ tag }}
    </span>
  
  </div>
</template>

<script setup>
</script>

<style scoped>
.tag-container {
  @apply flex gap-1 my-2;
}

.tag-container .tag {
  @apply rounded-md bg-gray-200 p-1 text-xs;
}
</style>
