<script setup>
import {defineProps} from 'vue';
defineProps({
    bus:Object
})
</script>
<template>
     <div class="bus-item" >
        <img :src="bus.image" alt="Image" class="busimg">
        <div class="testbody">
            <h3 class="titems">{{ bus.route }}</h3>
            <span class="titems">₦{{ bus.price }}.00</span>
            <span class="titems">{{ bus.time }}</span>
        </div>
    </div>
</template>

<style scoped>
.bus-item{
    width: 29%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow:  7px 7px 14px #d9d9d9,
             -7px -7px 14px #ffffff;
             padding: 1rem;
    align-content: center;
    margin-bottom: 1rem;
      background: #ffffff;

}
img{
    width:100%;
    max-height: 60%;
}
span{
    font-weight: 500;
    text-align: left;
    display: block;
}
h3{
    color: var(--primary);
    font-weight: 600;
    text-align: left;
    width: 100%;
}
</style>