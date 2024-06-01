<script setup>
    import Review from '@/components/Components/HomeReviewsItem.vue'
</script>
<template>
    <section>
      <h1>Top Reviews</h1>
      <h2>See what our customers are saying</h2>
      <div class="reviews">
        <Review customer="Adedire" img="/images/testimonials/dire.jpg">
            I received a package today from Amos Transports and was very happy with the service. It took less than 4 days from Ghana to Lagos, Nigeria and the quality of packaging (important for this destination) was exceptional. Well done 'Bob'!
        </Review>
        <Review customer="Saka Idris" img="/images/testimonials/saka.jpeg">
            I travelled with Amos Transports from Abuja to Aba, the journey was smooth and convenient even the driver was well-behaved, funny thing is that the price was very affordable.
        </Review>
        <Review customer="Adigun Shola" img="/images/testimonials/papa.jpg">
            Took a tour around Abeokuta some weeks ago, it was a nice event, well spaced and educatoinal, I'm really looking forward to another tour Event from you guys.
        </Review>
      </div>
    </section>
</template>
<style scoped>

/* h2{
  text-align: center;
  font-size: 2.8rem;
  font-weight: 400;
  color: #555;
} */

.reviews {
    display: grid;
    /* flex-direction: row; */
    grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* font-size: 1.4rem; */
  /* padding: 1rem; */
  /* width: 100%; */
}
@media (max-width: 850px) {
    .reviews{
        /* grid-template-columns: 1fr; */
        flex-direction: column;
    }
}
@media(max-width: 400px){
  h2{
    font-size: 25px;
  }
}
</style>