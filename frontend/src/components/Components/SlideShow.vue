<script setup>
import {defineProps, ref, onMounted, computed} from 'vue';
import EventItem from '@/components/Components/EventItem.vue'
   const slides = defineProps({
        info:Array
    })
    var currentIndex = ref(0)
    const startSlideShow = () =>{
        setInterval(()=>{
            currentIndex.value = (currentIndex.value + 1) % slides.info.length
            console.log(currentImage)
        }, 15000)
    }
    onMounted(()=>{
        startSlideShow();
    })
    const currentImage = computed(()=>slides.info[currentIndex.value].img)
    const currentContent = computed(()=>slides.info[currentIndex.value].content)

</script>
<template>
    <div class="wrapper">
        <EventItem :img="currentImage" class="content">
            {{ currentContent }}
        </EventItem>
    </div>
</template>
<style scoped>
@keyframes fade{
    0%{
        opacity: 0;
    }100%{
        opacity: 1;
    }
}
.wrapper{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    flex: 1 ;
    /* animation: fade 0.5s ease-out forwards; */
    /* background-color: red; */

}
.content{
    animation: fade 0.5s ease-out forwards;
}
.test{
    flex: 1;
}
</style>