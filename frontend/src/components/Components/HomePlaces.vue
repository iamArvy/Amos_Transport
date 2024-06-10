<script setup>
const figures = [1,2,3,4,5,6,7]
import Layout from '../Layout/SectionLayout.vue';
import Figures from './HomePlacesFigure.vue';
</script>
<template>
    <Layout id="places">
        <template #header>Places we travel to</template>
        <template #desc>Travel with us to visit your dream locations!</template>
        <ul>
            <li v-for="figure in figures" :key="figure">
                <Figures />
            </li>
        </ul>
    </Layout>
</template>
<style scoped>
ul{
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
    align-items: center;
}
@media (max-width: 768px) {
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>