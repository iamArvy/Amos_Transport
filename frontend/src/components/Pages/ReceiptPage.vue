<template>
    <div class="popup">
      <div class="popup-content">
        <span>Hi</span>
        <p>Name: {{ $route.query.name }}</p>
    <p>Name: {{ $route.query.station}}</p>
        <!-- Display form data -->
        <!-- <h1>Name: {{ formData.name }} </h1>
        <h1>Email: {{ formData.email }} </h1>
        <h1>Phone: {{ formData.phone }}</h1>
        <h1>Boarding State: {{ formData.boardingState.label }}</h1>
        <h1>Boarding City: {{ formData.selectedCity.label }}</h1>
        <h1>Destination: {{ formData.selectedRoutes.value }}</h1>
        <h1>Number of Seats: {{ formData.numSeats }}</h1>
        <h1>Total Price: {{ formData.totalPrice }}</h1> -->
  
        <!-- Close button -->
        <!-- <button @click="closePopup">Close</button> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
    console.log(this.$route.query);
  },
  //   props: {
  //   fullName: String,
  //   email: String,
  //   phone: String,
  //   // Add more prop definitions as needed
  // },
  };
  </script>