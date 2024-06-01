<script setup>
    // import { ref, onMounted } from 'vue';
import Layout from '@/components/Layout/AppLayout.vue';
import data from '@/assets/events.json';
import EventSection from '@/components/Components/EventsSection.vue'
import EventItem from '@/components/Components/EventItem.vue'
import Slideshow from '@/components/Components/SlideShow.vue'

    const events = data.events
    const gallery = data.gallery
    const pageData = {
    name: 'events',
    title: 'Events',
    bgImg: "/images/heroimgs/eventhero.webp",
}
</script>
<template>
    <Layout :pageData="pageData">
        <EventSection :title="events.title">
            <template #main-cont>
                <EventItem :img="events.main.img">
                    {{ events.main.head }}
                    <template #subs>
                        {{ events.main.sub }}
                    </template>
                </EventItem>
            </template>
            <template #sub-cont>
                <EventItem v-for="event in events.sub" :key="event" :img="event.img">
                    <template #subs>
                        {{ event.content }}
                    </template>
                </EventItem>
            </template>
        </EventSection>
        <br> <br>
        <EventSection :title="gallery.title">
            <template #main-cont>
                <Slideshow :info="gallery.slideshow" />
            </template>
            <template #sub-cont>
                <EventItem v-for="event in gallery.sub" :key="event" :img="event.img">
                    <template #subs>
                        {{ event.content }}
                    </template>
                </EventItem>
            </template>
        </EventSection>
    </Layout>
</template>