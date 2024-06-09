<script setup>
import {defineProps} from 'vue';
    defineProps({
        pageName: String,
        bg: String,
        home: Boolean
    })
</script>
<template>
    <section>
      <h1>Experience Great & Enjoyable Trip Today</h1>
      <p>Experience your most Enjoyable moment with our service, here to cater for you and your loved ones.</p>
      <button>Explore</button>
    </section>
</template>
<style scoped>
section{
  /* background: ; */
  background: linear-gradient(
  rgba(0, 0, 0, 0.7),
  rgba(20, 108, 148, 0.7)
  ),
  url("@/assets/scania-bus.jpg");
  padding: 0 5rem;
  color: white;
  background-size: cover;
  background-position: center;
  /* margin: 15px 0; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  height: 70dvh;
  height: 600px;
  gap: 15px;
}
h1{
  font-size: 28px;
  max-width: 200px;
  font-weight: 600;
}
p{
  max-width: 180px;
  font-size: 12px;
}
button{
  background: var(--accent);
  color: white;
  padding: 10px 2rem;
  border: none;
  border-radius: 10px;
}
@media (max-width: 1023px) {
  section{
    align-items: center;
    padding: unset;
    text-align: center;
  }
  h1{
    max-width: 400px;
  }
  p{
    max-width: 300px;
  }
}
</style>