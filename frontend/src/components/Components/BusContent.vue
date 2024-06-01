<script setup>
import {defineProps} from 'vue';
defineProps({
    businfo: Object,
})
</script>
<template>
    <div class="cont">
    <BusInfo :info="businfo" />
    <Booking />
    </div>
</template>
