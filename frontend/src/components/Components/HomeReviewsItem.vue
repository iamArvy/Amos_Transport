<script setup>
    import {defineProps} from 'vue';
    import Stars from './FiveStars.vue';
    defineProps({
        customer: String,
        img: String
    })
</script>
<template>
    <article class="review">
        <figure>
            <img :src="img" :alt="customer" />
            <figcaption>{{customer}}</figcaption>
        </figure>
          <Stars />
          <p class="review-text">
            <slot />
          </p>
    </article>
</template>
<style scoped>
.review-text {
  margin: 1rem 0;
  color: #444;
}
article {
  text-align: center;
  padding: 1rem;
  /* width: 400px; */
  flex: 1 1 1;
}

img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin: auto;
}
figcaption{
  color: var(--text);

}
@media (max-width: 400px) {
  img{
    width: 80px;
    height: 80px;
  }
  figcaption{
    font-size: 18px;
  }
  p{
    font-size: 10px;
  }
}
</style>