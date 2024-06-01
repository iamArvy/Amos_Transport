<script setup>
import {ref, watch} from 'vue'
const isModalOpen = ref(false);
    const isLoading = ref(false);
        // const cusname = ref('');
    // const phonenumber = ref('')

//     const openModal = () => {
//   if (selectedSeats.value.length === 0) {
//     alert('Please select your seats');
//   } else {
//     if (cusname.value === '') {
//       alert('Please enter your name');
//     } else if (phonenumber.value.length !== 11 || isNaN(phonenumber.value)) {
//       alert('Please enter a valid phone number');
//       phonenumber.value = ''; // Reset the phone number input value
//     } else {
//       isModalOpen.value = true;
//     }
//   }
// };
    // const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const selectedSeats = ref([]);
    const registeredSeats = ref([]);

    watch(selectedSeats, (newSeats, oldSeats) => {
      if (newSeats.length > oldSeats.length) {
        const diff = newSeats.filter(seat => !oldSeats.includes(seat));
        registeredSeats.value.push(...diff);
      } else {
        const diff = oldSeats.filter(seat => !newSeats.includes(seat));
        registeredSeats.value = registeredSeats.value.filter(seat => !diff.includes(seat));
      }
    });
    // const closeModal = () => {
    //     if (confirm("Please ensure to copy your transaction ID before you go, press CANCEL if you haven't done that, press OK to continue")) {
    //         window.location.reload();
    //   }
    // };
    // const generateTransactionId = () => {
    //   const numbers = [];
    //   for (let i = 0; i < 3; i++) {
    //     let randomNumber = Math.floor(Math.random() * 900) + 100;
    //     numbers.push(randomNumber);
    //   }
    //   return numbers.join('-');
    // };
    watch(isModalOpen, (newValue) => {
      if (newValue) {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 2000);
      }
    });
        // const route= ref('')
    // const totPrice = selectedOption.value.price;
    // const totPrice = computed(() => {
    //   if (selectedOption.value && selectedSeats.value) {
    //     return "\u20A6" + selectedOption.value.price * selectedSeats.value.length + ".00";
    //   } else {
    //     return 0;
    //   }
    // });
</script>
<template>
     <div class="bookinginfo">
        <span class="smallsub">BOOKINGS INFORMATION</span>
        <form class="bookings-form">
            <div class="line">
                <div class="input smallie">
                    <label for="name">Name:</label>
                    <input type="text" required v-model="cusname">
                </div>
                <div class="input smallie">
                    <label for="phone">Phone number:</label>
                    <input type="tel" name="" id="" required v-model="phonenumber">
                </div>
            </div>
            <div class="line">
              <div class="input">
                <label for="">Select Preffered Seat</label>
                <div class="checkers" >
                  <label v-for="seat in seats" :key="seat" :for="'seat-' + seat">
                      <input v-if="selectedOption" type="checkbox" :id="'seat-' + seat" :value="seat" v-model="selectedSeats">
                      {{ seat }}
                  </label>
                </div>
              </div>
              <div class="input">
                    <label for="seats">Total Seats</label>
                    <input type="text" v-model="selectedSeats.length" disabled>
                </div>
            </div>

            <div class="line">
                <div class="input">
                    <label for="totprice">Total Price</label>
                    <input typ="text" v-model="totPrice" disabled>
                </div>
            </div>
            <button @click="openModal" submit class="submit">Proceed</button>
        </form>
    </div>
</template>