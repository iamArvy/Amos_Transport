<script setup>
import {ref} from 'vue';

const form = ref({
    bp: null,
    dest: null,
    date: null,
    time: null
})
</script>
<template>
    <form action="" method="post">
        <input type="text" name="origin" v-model="form.origin" placeholder="Origin" />
        <input type="text" name="dest" v-model="form.dest" placeholder="Destination">
        <input type="date" name="" id="">
        <input type="submit" value="Search">
    </form>
</template>

<style scoped>
 form{
    background-color: var(--accent);
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 0.5fr 0.5fr; */
    margin: 15px 0;
    /* background-color: red; */
    gap: 10px;
    border-radius: 20px;
 }
 input{
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    box-shadow:  inset 0px 0px 5px #d1d1d1;
    border: none;

 }
 input[type=submit]{
    background-color: var(--secondary);
    border: none;
    color: white;
    box-shadow: none;
    min-width: 90px;
 }
</style>