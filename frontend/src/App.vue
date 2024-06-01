<template>
  <router-view />
</template>

<script setup>

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/* .page{
  border: 2px solid var(--buttons);
  padding: 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
} */
/* General */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@keyframes move {
0% {
  transform: translateX(-150%);
}
20% {
  transform: translateX(-40%);
}
80% {
  transform: translateX(140%);
}
100% {
  transform: translateX(-150%);
}
}
.loader{
  width: 5vw;
  position: absolute;
  top: 40vh;
  transform: translateY(-50%);
  animation: move  2s linear infinite;
  z-index: 1;
  left: 48vw;
}
/* :root {
  --primary: #146C94;
  --secondary: #19A7CE;
  --buttons: #FFAE02;
  --gradient: linear-gradient( to right,
var(--secondary),
    var(--primary)
  );
} */
  @import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root{
    --primary: #3F51B5;
    --secondary: #FF9800;
    --accent: #4CAF50;
    --bg: #F5F5F5;
    --text: #333333;
}
/* html, body {
  height: 100%;
  margin: 0;
} */
h2{
  font-size: calc(1.325rem + 0.9vw);
}
h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
h4{
  font-size: calc(1.275rem + 0.3vw);
}
h5{
  font-size: 1.25rem;
}
h6{
  font-size: 1rem;
}
</style>
