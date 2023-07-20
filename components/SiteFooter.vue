<script></script>
<template>
    <footer class="h-60 min-h-fit bg-dark-bg-dark text-dark-text-lightest border-t-light-bg-lighter dark:border-t-dark-bg-dark border-t-2">
        <div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
            <ul
                class="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                <li class="flex">
                    <NuxtLink class="flex items-center px-4 -mb-1  hover:text-cta-hover" to="/events">Events
                    </NuxtLink>
                </li>
                <li class="flex">
                    <NuxtLink class="flex items-center px-4 -mb-1  hover:text-cta-hover" to="/speakers">
                        Speakers
                    </NuxtLink>
                </li>
            </ul>
            <div class="flex flex-col justify-center pt-6 lg:pt-0">
                <div class="flex gap-6 justify-center space-x-4">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/officalVuejsIsrael/" target="_blank"
                        title="Vue.js Israel Facebook Page"
                        class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10   hover:text-cta-hover">
                        <Icon name="mdi:facebook" size="30"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.twitter.com/@VueJSIsrael" target="_blank"
                        title="Vue.js Israel Twitter"
                        class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  hover:text-cta-hover">
                        <Icon name="mdi:twitter" size="30"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.meetup.com/vue-js/" target="_blank"
                        title="Vue.js Israel Meetup group"
                        class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10   hover:text-cta-hover">
                        <Icon name="mdi:meetup" size="30"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/vuejsisrael/" target="_blank"
                        title="Vue.js Israel Instagram"
                        class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10   hover:text-cta-hover">
                        <Icon name="mdi:instagram" size="30"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.youtube.com/@vuejsisrael/" target="_blank"
                        title="Vue.js Israel YouTube Channel"
                        class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10   hover:text-cta-hover">
                        <Icon name="mdi:youtube" size="30"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="py-6 text-sm text-center dark:text-gray-400">
            <p class="text-xl font-bold">
                Official Vue.js Israel Community
            </p>
            <span>Built with 💚 by <a href="#" target="_blank" rel="noopener noreferrer">Alex Nechayev</a> & <a
                    href="https://dimshik.com" target="_blank" rel="noopener noreferrer">Dima Vishnevetsky</a></span>
        </div>
    </footer>
</template>
<style scoped></style>