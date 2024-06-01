<script setup>
import defineProps from 'vue';
defineProps({
    route:Object
})
</script>
<template>
    <article>
        <div class="info">
            <h1>Bus Name</h1>
            <p class="address">!3, PZ Estate, NON AC</p>
            <p><span class="label">Route:</span> {{ route.route }}</p>
            <p><span class="label">Boarding Points: </span> </p>

        </div>
        <span>{{route.time}}</span>
        <span>12 PM</span>
        <span>28</span>
        <div class="price">
            <span>₦{{route.price}}</span>
            <button>Book</button>
        </div>
    </article>
</template>

<style scoped>
article{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;

}

</style>