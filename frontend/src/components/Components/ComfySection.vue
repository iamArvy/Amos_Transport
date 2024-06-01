<template>
    <section class="container">
        <article>
            <h2>A Bus Transport that's Affordable and Comfortable</h2>
            <p>Letius quis dui at lectus congue natoque et adipiscing curabitur molestie. Mattis magnis mollis ultricies eros tortor vivamus venenatis. Mauris iaculis amet porta lobortis dictum cubilia et ex.</p>
            <div class="cc">
                <div class="count">
                    <span class="percent">97%</span>
                    <span class="about-percentage">Customer<br>Satisfaction</span>
                </div>
                <div class="count">
                    <span class="percent">4,000+</span>
                    <span class="about-percentage">Available<br>Routes</span>
                </div>
            </div>
        </article>
        <figure>
            <img src="@/assets/comfy.jpg" alt="">
        </figure>
    </section>
</template>
<style scoped>
section{
  display: grid;
  grid-template-rows: 1fr 1fr;
  flex-direction: column;
  align-items: center;
}
figure{
  justify-self: center;
  width: 80%;
}
h2{
    font-size: 20px;
    font-weight: 600;
}
.cc{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.count{
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  text-align: center;
}
.percent{
  font-size: 50px;
  font-weight: 600;
  color: var(--buttons);
}
.about-percentage{
  font-size: 30px;
  font-weight: 400;
}
figure{
  background:linear-gradient( to right,
var(--secondary),
    var(--buttons)
  );
  flex: 1;
  min-width: 50%;
}
img{
    margin: -0.5rem -0.5rem 0.5rem 0.5rem;
    height: 100%;
    width: 100%; 
  }
@media (max-width: 375px) {
    .percent{
      font-size: 35px;
    }
    .about-percentage{
      font-size: 25px;
    }
}
@media (min-width: 768px) {
  img{
    margin: -1rem -1rem 1rem 1rem;
  }
  h2{
    font-size: 25px;
  }
  p{
    font-size: 20px;
  }
}
@media (min-width: 1024px) {
    section{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: unset;
      gap: 2rem;
    }
    figure{
      width: 100%;
    }
    
  h2{
    font-size: 30px;
  }
  p{
    font-size: 20px;
  }
}

</style>