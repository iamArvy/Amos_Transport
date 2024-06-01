<script setup>
import Layout from '@/components/Layout/AppLayout.vue'
import About from '@/components/Components/AboutSection.vue'

const pageData = {
    name: 'about',
    title: 'About Us',
    bgImg: "/images/heroimgs/eventhero.webp",
}
</script>
<template>
    <Layout :pageData="pageData">
        <About />
        <!-- <section class="choose">
            <div class="contain">
                <span class="smallsub">why choose us</span>
            <h1 class="sub">Riding with us, your satisfaction is guaranteed!</h1>
            <p></p>
            <div class="whys">
                <div class="why">
                    <i class="fa-solid fa-check-double fa-xl"></i>
                    <h5>Safety & Security</h5>
                </div>
                <div class="why">
                    <i class="fa-solid fa-check-double fa-xl"></i>
                    <h5>Professional Drivers</h5>
                </div>
                <div class="why">
                    <i class="fa-solid fa-check-double fa-xl"></i>
                    <h5>Good Maintenance</h5>
                </div>
                <div class="why">
                    <i class="fa-solid fa-check-double fa-xl"></i>
                    <h5>Reliability</h5>
                </div>
            </div>
            </div>
        </section> -->
    </Layout>
</template>
<style scoped>
section{
    max-width: 1100px;
}
/* .hero{
  background: linear-gradient(
  rgba(20, 108, 148, 0.7),
  rgba(20, 108, 148, 0.7)
  ),
  url("../assets/bus-fleet.jpg");
} */
</style>