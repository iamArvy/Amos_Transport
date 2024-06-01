<script setup>
import {defineProps} from 'vue';
defineProps({
    img: String
})
</script>
<template>
    <div class="container"  :style="{background: `linear-gradient(to bottom,  rgba(255, 255, 255, 0.2),  rgba(19, 19, 19, 0.8)),url(${img}) center center / cover no-repeat`}">
        <div class="content">
            <h1><slot /></h1>
            <h5><slot name="subs" /></h5>
        </div>
    </div>
</template>
<style scoped>
 .container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    text-align: left;
    flex: 1;
}
h5{
    font-size: 15px;
}
</style>