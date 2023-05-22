<template>
    <NuxtLink v-for="event in events" :to="`/events/${event.fileName}`">
        <div class="bg-white rounded-lg shadow-md p-6 m-auto my-3 max-w-md">
            <h3 class="text-sm font-medium text-gray-500">{{ formattedDate(event.date) }}</h3>
            <h2 class="text-xl font-bold mb-2 text-gray-600">{{ event.title }}</h2>
            <div class="flex items-center">
                <Icon name="mdi:map-marker-outline" />
                <p>{{ event.location }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    events: {
        type: Array,
        require: true,
    }
})

const formattedDate = (date) => {
    const formattedDate = new Date(date);

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        hour12: true,
        minute: "numeric",
        timeZoneName: "shortGeneric",
        timeZone: "Asia/Jerusalem"
    };

    return formattedDate.toLocaleString("en-IL", options).toUpperCase();
}
</script>

<style scoped></style>