<script setup>
import Layout from '@/components/Layout/AppLayout.vue'
import Form from '@/components/Components/ContactForm.vue'
import Details from '@/components/Components/ContactDetails.vue'
const pageData = {
    name: 'contact',
    title: 'Contact Us',
    bgImg: "/images/heroimgs/contactevent.jpg",
}
</script>
<template>
  <Layout :pageData="pageData">
    <section id="contact-content">
      <Form />
      <Details/>
    </section>
  </Layout>
        
</template>


<style scoped>
#contact-content{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>