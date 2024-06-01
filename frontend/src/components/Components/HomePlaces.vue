<script setup>
const figures = [1,2,3,4,5,6,7]
import Figures from './HomePlacesFigure.vue'
</script>
<template>
    <section id="places">
        <h1>Places we travel to</h1>
        <h2>Travel with us to visit your dream locations!</h2>
        <ul>
            <li v-for="figure in figures" :key="figure">
                <Figures />
            </li>
        </ul>
    </section>
</template>
<style scoped>
section{
    margin: 7rem 0;
}
ul{
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-x: scroll;
    scrollbar-width: none;
    align-items: center;
}
</style>