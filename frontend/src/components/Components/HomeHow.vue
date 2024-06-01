<template>
    <section class="how">
      <h1>4 Steps to booking a Ride</h1>
      <h2>Follow these four simple steps to book a ride</h2>
      <ul>
        <li number="1">
          <h3>Select your route</h3>
          <p>Select the route that suits your needs.</p>
        </li>
        <li number="2">
          <h3>Enter your Booking Information</h3>
          <p>Fill in your Name, Your Phone number and select your preffered seats.</p>
        </li>
        <li number="3">
          <h3>Confirm your payment</h3>
          <p>Confirm your payment for the bus and try to have a copy of your Transaction ID.</p>
        </li>
        <li number="4">
          <h3>Submit your Transaction ID</h3>
          <p>Submit your transaction ID at the counter of the bus station and you will be directed to your bus.</p>
        </li>
      </ul>
    </section>
</template>
<style scoped>
section{
  text-align: center;
  margin: 7rem 0;
}
h1{
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: var(--primary);
}
h2{
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
}
ul{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 3rem;
}
li{
  padding: 2rem;
  background: var(--primary);
  position: relative;
}
li::before{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  content: attr(number);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 40%;
  background-color: var(--secondary);
}
h3{
  font-size: 13px;
}
p{
  font-size: 10px;
}
</style>