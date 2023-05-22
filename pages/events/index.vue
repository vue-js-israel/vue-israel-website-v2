<template>
    <NuxtLayout/>
    <div class="max-w-7xl m-auto">
        <EventsEventCard :events="events"></EventsEventCard>
    </div>
</template>

<script setup>



const contentQuery = await queryContent('events').find()
const events = contentQuery.map((content) => {
    const { _path, title, location, date } = content;
    console.log("👾 ~ file: index.vue:14 ~ events ~ content:", content)
    return {
        fileName: _path.split('/')[2],
        title,
        location,
        date
    }
})

</script>

<style scoped></style>