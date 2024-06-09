<script setup >
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
        <!-- <div class="inputs"> -->
            <input type="text" name="origin" v-model="form.origin" placeholder="Origin" />
            <input type="text" name="dest" v-model="form.dest" placeholder="Destination">
            <input type="time" name="" id="" placeholder="Time">
        <!-- </div> -->
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
    margin: 15px 0;
    gap: 10px;
    border-radius: 20px;
    padding: 10px;
 }
 input{
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    box-shadow:  inset 0px 0px 5px #d1d1d1;
    border: none;

 }
 input[type=text]{
    width: 40%;
    min-width: 130px;
 }
 input[type=date]{
    max-width:200px;
    min-width: 100px;
 }
 input[type=submit]{
    background-color: var(--secondary);
    border: none;
    color: white;
    box-shadow: none;
    min-width: 90px;
 }
 .inputs{
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
   display: flex;
   gap: 20px;
 }
 @media (max-width: 768px) {
   form{
      overflow-x: auto;
   }
 }
</style>