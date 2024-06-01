<script setup>
import {defineProps} from 'vue'
defineProps({
    name: String,
    items: Array
})
</script>
<template>
    <article>
        <h1>{{ name }}</h1>
        <div class="items" >
            <label for="" v-for="item in items" :key="item">
                <input type="checkbox" :name="item" id="">
                {{ item }}
            </label>
        </div>
    </article>
</template>

<style scoped>
h1{
    color: var(--primary);
    font-weight: 600;
}
article{
    background-color: white;
    min-height: 150px;
    padding: 1rem;
}
label{
    color: var(--text);
    text-transform: capitalize;
}
.items{
    display: flex;
    flex-direction: column;
}
article{
    border-radius: 10px;
}
</style>