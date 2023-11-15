<script setup></script>

<template>
  <div class="container mx-auto flex flex-col justify-center">
    <div class="mx-auto max-w-md rounded-lg bg-dark-bg-darker p-7">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4">
            <path d="M44 24V9H4v30h20m7-3l5 4l8-10" />
            <path d="m4 9l20 15L44 9" />
          </g>
        </svg>
        <h1 class="text-4xl">Thanks!</h1>
      </div>
      <div class="text-2xl">
        <p>The form was submitted successfully.</p>
        <NuxtLink
          class="text-cta-base hover:text-cta-hover"
          to="https://www.vuejsisrael.com/"
          >Back to homepage</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
