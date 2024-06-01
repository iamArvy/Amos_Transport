<script setup>
import Filter from './BookingsFilterItem.vue';
import Result from './BookingsSearchItem.vue';
import {defineProps} from 'vue';
// const results = [1,2,3,4,5,6,7,8,9]
const bp = [
    "ikeja", "ikorodu", "ita-oluwo", "odungunyan", "lekki", "ketu"
]
const ac = ["ac", "non ac"]
const dtime = ["7am", "8am", "9am", "2pm", "3pm", "4pm", "10pm", "11pm", "12pm"]
const atime = ["7am", "8am", "9am", "2pm", "3pm", "4pm", "10pm", "11pm", "12pm"]
defineProps({
    routes: Array
})
</script>
<template>
    <section id="search-results">
        <div class="filters">
            <Filter name="Boarding Point" :items="bp" />
            <Filter name="Bus Type" :items="ac" />
            <Filter name="Departure Time" :items="dtime" />
            <Filter name="Arrival Time" :items="atime"/>
        </div>
        <div class="results">
            <ul class="headers">
                <li>Bus Info</li>
                <li>Dept. Time</li>
                <li>Arr. TIme</li>
                <li>Seats</li>
                <li>Price</li>
            </ul>
            <div class="items">
                <Result v-for="route in routes" :key="route" :route="route" />
            </div>
        </div>
    </section>
</template>
<style scoped>
section{
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
}
.filters, .items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.headers{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    color: var(--primary);
    background-color: white;
    height: 50px;
    align-items: center;
    padding: 0 1rem;
    border-radius: 10px;
}
.items{
    margin-top: 1rem;
}
</style>