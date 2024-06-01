<script setup>
import {defineProps} from 'vue';
defineProps({
    bus: Object,
})
</script>
<template>
    <div class="businfos">
        <h4 class="smallsub">BUS INFORMATION -- {{ bus.route }}</h4> 
        <div class="businfo-container">
            <img :src="bus.image" alt="Image" class="busimg">
            <div class="businfo">
                <h1 class="busname">AMOSBUS205</h1>
                <div class="perks" >
                    <h5>Perks</h5>
                    <div class="perk" v-for="(option, index) in bus.perks" :key="index" :value="option">
                        <span class="perk">{{ option.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>