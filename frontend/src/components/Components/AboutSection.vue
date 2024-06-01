<template>
    <div class="container">
      <div class="summary">
        <div class="sumleft">
          <span class="smallsub">Who we are</span>
          <h1 class="sub">Enjoy the journey - travel with us</h1>
          <!-- <button><router-link to="/contact">Know more...</router-link></button> -->
        </div>
        <div class="sumright">
          <p>
            Since 1998 till date we have had thousands of movement around Nigeria, your comfort and convenience is our main priority. AMOS Transports started operations in the year 1998. Since then it has grown to be one of the foremost road transport company in Nigeria. In fact it is reputed to be arguably the most technologically driven road transport company in the country. Amos Motors recently rebranded, we launched our Cross Country travels in the year 2020 and our website to enable easy booking.
          </p>
        </div>
      </div>
      <br>
      <div class="aboutimg">
        <img src="@/assets/people.jpeg" alt="">
        <img src="@/assets/people1.jpg" alt="">
        <img src="@/assets/people2.jpg" alt="">
      </div>
    </div>
</template>
<style scoped>
/* About */

.container{
    height: 100%;
    width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  gap: 2rem;
}
.summary{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.sumleft{
  display: flex;
  flex-direction: column;
  text-align: right;
  min-width: 30%
}
.smallsub{
  text-transform:uppercase;
  font-weight: 500;
}
.aboutimg{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.aboutimg>img{
  width: 100%;
}
@media (max-width: 450px) {
    
}
</style>