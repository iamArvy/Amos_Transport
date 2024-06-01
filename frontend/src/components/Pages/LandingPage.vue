<script setup>
import Layout from '@/components/Layout/AppLayout.vue';
import Hero from '@/components/Components/HeroComp.vue';
import Search from '@/components/Components/HomeSearch.vue';
import How from '@/components/Components/HomeHow.vue'
import Testimonials from '@/components/Components/HomeReviews.vue'
import Places from '@/components/Components/HomePlaces.vue'
</script>
<template>
  <Layout>
    <div v-if="!loading">
      <Hero />
      <Search />
      <How />
      <Testimonials />
      <Places />
      <!-- <Buses /> -->
    </div>
    <div v-else class="load">
      <!-- <div class="ppp">
          <img class="loader" src="../assets/icon.png" alt="">
      </div> -->
  </div>
  </Layout>
</template>
<style scoped>

</style>