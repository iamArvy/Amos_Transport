<script setup>
import {defineProps} from 'vue';
defineProps({
    title: String
})
</script>
<template>
    <section :id="title">
            <h3>{{ title }}</h3>
            <div class="wrapper">
                <div class="main-cont">
                    <slot name="main-cont" />
                </div>
                <div class="sub-cont">
                    <slot name="sub-cont" />
                </div>
            </div>
        </section>
</template>
<style scoped>
h3{
    text-transform: uppercase;
    text-align: left;
    color: black;
}
section{
    padding: 15px;
    height: 61vh;
    display: block;
    color: white;
}
.wrapper{
    min-height: 100%;
    flex: 1;
    display: grid;
    gap: 10px;
    grid-template-columns: 1.5fr 1fr;
}
.main-cont{
    display: flex;
    flex: 1;
}
.sub-cont{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns:1fr 1fr ;
    gap: 10px;
}
</style>