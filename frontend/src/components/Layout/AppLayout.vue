<script setup>
import { defineProps } from 'vue';
import HeaderBar from '@/components/Components/HeaderBar.vue';
// import Hero from '../Components/HeroComp.vue';
import FooterBar from '@/components/Components/FooterBar.vue';
defineProps({
    bg: String,
    pagename: String
})
</script>
<template>
    <HeaderBar class="full-width" />
    <!-- <section class="hero">
        <Hero :page-name="pagename"  />
    </section> -->
    <main>
        <slot />
    </main>
    <FooterBar />
</template>
<style>
/* section:not(:first-child)>h1{
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: var(--primary);
} */

:root {
    --headerheight: 60px;
    --gradient: linear-gradient( to right,
    var(--secondary),
        var(--primary)
    );
    --padding-inline: 3rem;
    }
    main{
        margin-top: var(--headerheight);
        color: var(--text);
        padding: 2rem 0;
    }
    main, .full-width{
        --content-max-width: 1128px;
        display: grid;
        grid-template-columns:[full-width-start] minmax(var(--padding-inline), 1fr)[content-start] min(100% - (var(--padding-inline) * 2), var(--content-max-width)) [content-end] minmax(var(--padding-inline), 1fr) [full-width-end];
        /* grid-template-columns:[full-width-start] 1fr [content-start] 1fr [content-end] minmax(var(--padding-inline), 1fr)  [full-width-end]; */
        width: 100dvw;
    }
    main>:not(.full-width), .full-width>:not(.full-width){
        grid-column: content;
    }
    main>.full-width{
        grid-column: full-width;
        display: grid;        
        grid-template-columns: inherit;
    }
    @media (max-width: 1023px) {
        :root{
            --padding-inline: 1rem;
        }
    }
</style>