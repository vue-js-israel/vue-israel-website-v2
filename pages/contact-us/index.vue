<script setup></script>

<template>
    <section class="container mx-auto py-20">
        <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
                <h1 class="text-4xl font-bold">Get in touch</h1>
                <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
                <div class="space-y-4">
                    <p class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>vuejs.israel@gmail.com</span>
                    </p>
                </div>
            </div>
            <form action="https://formsubmit.co/vuejs.israel@gmail.com" method="POST"
                class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <label class="block">
                    <span class="mb-1">Full name *</span>
                    <input type="text" name="name" placeholder="Evan You" required
                        class="p-1 block w-full rounded-md shadow-sm  dark:bg-gray-800">
                </label>
                <label class="block">
                    <span class="mb-1">Email *</span>
                    <input type="email" name="email" placeholder="abcd@gmail.com" required
                        class="p-1 block w-full rounded-md shadow-sm  dark:bg-gray-800">
                </label>
                <label class="block">
                    <span class="mb-1">Subject *</span>
                    <input type="text" name="subject" placeholder="Last meetup was great" required
                        class="p-1 block w-full rounded-md shadow-sm  dark:bg-gray-800">
                </label>
                <label class="block">
                    <span class="mb-1">Message *</span>
                    <textarea name="message" required rows="3"
                        class="p-1 block w-full rounded-md  dark:bg-gray-800"></textarea>
                </label>
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_next" value="http://localhost:3000/contact-us/thanks">
                <button type="submit"
                    class="self-center px-8 py-3 text-lg rounded border border-cta-base hover:border-cta-hover">Submit</button>
            </form>
        </div>
    </section>
</template>


<style scoped></style>