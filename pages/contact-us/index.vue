<script setup>
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({});

const validateForm = () => {
  errors.value = {};

  if (!formData.value.name.trim()) {
    errors.value.name = "Name is required";
  }

  if (!formData.value.email.trim()) {
    errors.value.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = "Invalid email format";
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = "Subject is required";
  }

  if (!formData.value.message.trim()) {
    errors.value.message = "Message is required";
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    e.target.submit();
  }
};
</script>

<template>
  <section class="container mx-auto py-20">
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
      <div class="py-6 md:px-6 md:py-0">
        <h1 class="text-4xl font-bold">Get in touch</h1>
        <p class="pb-4 pt-2">Fill in the form to start a conversation</p>
        <div class="space-y-4">
          <p class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="mr-2 h-5 w-5 sm:mr-6">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>vuejs.israel@gmail.com</span>
          </p>
        </div>
      </div>
      <form
        action="https://form.taxi/s/xwprvus4"
        method="POST"
        class="flex flex-col space-y-6 py-6 md:px-6 md:py-0"
        @submit="handleSubmit">
        <label class="block">
          <span class="mb-1">Full name *</span>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            placeholder="Evan You"
            required
            class="block w-full rounded-md p-1 shadow-sm dark:bg-gray-800"
            :class="{ 'border-2 border-red-500': errors.name }" />
          <span v-if="errors.name" class="mt-1 block text-sm text-red-500">{{
            errors.name
          }}</span>
        </label>
        <label class="block">
          <span class="mb-1">Email *</span>
          <input
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="abcd@gmail.com"
            required
            class="block w-full rounded-md p-1 shadow-sm dark:bg-gray-800"
            :class="{ 'border-2 border-red-500': errors.email }" />
          <span v-if="errors.email" class="mt-1 block text-sm text-red-500">{{
            errors.email
          }}</span>
        </label>
        <label class="block">
          <span class="mb-1">Subject *</span>
          <input
            v-model="formData.subject"
            type="text"
            name="subject"
            placeholder="Last meetup was great"
            required
            class="block w-full rounded-md p-1 shadow-sm dark:bg-gray-800"
            :class="{ 'border-2 border-red-500': errors.subject }" />
          <span v-if="errors.subject" class="mt-1 block text-sm text-red-500">{{
            errors.subject
          }}</span>
        </label>
        <label class="block">
          <span class="mb-1">Message *</span>
          <textarea
            v-model="formData.message"
            name="message"
            required
            rows="3"
            class="block w-full rounded-md p-1 dark:bg-gray-800"
            :class="{ 'border-2 border-red-500': errors.message }"></textarea>
          <span v-if="errors.message" class="mt-1 block text-sm text-red-500">{{
            errors.message
          }}</span>
        </label>

        <input
          type="hidden"
          name="_next"
          value="https://www.vuejsisrael.com/contact-us/thanks" />
        <button
          type="submit"
          class="self-center rounded border border-cta-base px-8 py-3 text-lg hover:border-cta-hover">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
