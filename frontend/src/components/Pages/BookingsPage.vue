<script setup>
import Layout from '@/components/Layout/AppLayout.vue'
// import How from '@/components/Components/HomeHow.vue'
import Buses from '@/components/Components/BusesSection.vue'
import Search from '@/components/Components/HomeSearch.vue'
import Results from '@/components/Components/BookingsSearchResult.vue'
import {defineProps} from 'vue'
const props = defineProps({
    routes: Array,
    title: String,
    bgImg: String
})
const pageData = {
    name: props.title,
    title: props.title,
    bgImg: props.bgImg,
}
</script>
<template>
    <Layout :pageData="pageData">
        <Search />
        <Results :routes="props.routes"/>
        <Buses :routes="props.routes" />
        <!-- <section class="form how">
        <div class="forms">
          <div class="sub">
            <h1 class="sub" v-if="currentPage === 1">Available Buses</h1>
          </div>
          <div v-if="currentPage === 1" class="testclass">
            <BusContent />
            <div class="testing" v-for="(option, index) in routes" :key="index" :value="option" @click="selectOption(option)">
                <img :src="option.image" alt="Image" class="busimg">
                <div class="testbody">
                    <h3 class="titems">{{ option.route }}</h3>
                    <span class="titems">₦{{ option.price }}.00</span>
                    <span class="titems">{{ option.time }}</span>
                </div>
                
            </div>
          </div>
          <div v-else-if="currentPage === 2" class="carinfo">
            <button @click="prevPage" class="infoclose close"><i class="fa-solid fa-xmark"></i></button>
              <div v-if="selectedOption">
                <div class="businfos">
                    <span class="smallsub">BUS INFORMATION -- {{ selectedOption.route }}</span>                    <div class="businfo-container">
                        <img :src="selectedOption.image" alt="Image" class="busimg">
                        <div class="businfo">
                            <h1 class="busname">AMOSBUS205</h1>
                            <div class="perks" >
                                <h5>Perks</h5>
                                <div class="perk" v-for="(option, index) in selectedOption.perks" :key="index" :value="option">
                                    <span class="perk">{{ option.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sec">
                <div class="buslayout">
                    <span class="smallsub">BUS LAYOUT</span>
                    <div class="buslayout-container">
                        <img class="imglay" src="@/assets/buslayout.png" alt="">
                    </div>
                </div>
                <div class="bookinginfo">
                    <span class="smallsub">BOOKINGS INFORMATION</span>
                    <div class="buslayout-container">
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
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
    </section> -->
    <!-- <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <button @click="closeModal" class="modclose close"><i class="fa-solid fa-xmark"></i></button>
        <template v-if="isLoading">
            <h3>Please Wait</h3>
            <i class="fa-solid fa-spinner spinner"></i>
        </template>

        <template v-else>
            <h3>Transaction Complete</h3>
            <span class="transaction-id">ID: {{ generateTransactionId() }}</span>
            <span class="note">Please do not forget to save a copy of the Transaction ID above before you go.</span>
        </template>
      </div>
    </div> -->
    </Layout>
</template>



<!-- <style scoped>

.close{
    font-size: 40px;
    background-color: unset;
    border: unset;
    
}
.close:hover{
    cursor: pointer;
}
.infoclose{
    margin-bottom: 0.5rem;
    margin-left:80%;
}
.modclose{
    margin-left:90%;
}
.busname{
    color: var(--primary);
    font-weight: 600;
}
label{
    color: var(--primary);
    font-weight: 600;
}
.imglay{
    height: 400px;
}
.buslayout{
    width: 30%;
}
.sec{
    display: flex;
    flex-direction: row;
}
/* spinner */

.spinner {
  animation: spin 1s infinite linear;
  font-size: 50px;
  text-align: center;
  display: block;
  margin-top: 1rem;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


input, select{
  padding: 0.5rem;
  font-size: 20px;
  width: 100%;
  border: 2px solid var(--primary);
  border-top: unset;
  border-left: unset;
  border-right: unset;
  background-color: rgb(240, 240, 240);
}
input:focus{
    outline: none;
}
.line{
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content:space-between;
}
form{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.forms{
  display: flex;
  flex-direction:column;
  background: white;
box-shadow:  7px 7px 14px #d9d9d9,
             -7px -7px 14px #ffffff;
max-width: 90%;
min-height:50vh;
margin: 0 0 0 5%;
padding: 2rem;
gap: 2rem;
}
.forms>h1{
  text-align: left;
}
.head, .body{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.thead, .titems{
  width: 25%;
}
.body:nth-child(odd){
    background-color: rgb(245, 245, 245);

  }
.body:nth-child(even):hover{
    background-color: rgb(245, 245, 245);
  }
.body:hover{
  cursor: pointer;
}
.body{
  padding: 5px;
}
.businfo-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.busimg, .businfo{
  width: 48%;
}
.businfo{
  text-align: left;
  padding: 2rem;
}
.perks{
  display: flex;
  flex-direction: column;

}
.input{
  display: flex;
  flex-direction: column;
  width: 48%;
}
.checkers{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.checkers>label{
  display: flex;
  flex-direction: row;
  gap: 2px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
    border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  min-height: 300px;
  min-width: 500px;
}
button.submit{
    height: 40px;
    width: 80%;
    margin-top: 2rem;
    background-color: var(--buttons);
    border: none;
    border-radius: 10px;
    transition: ease-in-out 0.3s;
    font-size: 25px;
    font-weight:600;
}
button.submit:hover{
    background-color: var(--secondary);
    color: white;
    transition: ease-in-out 0.3s;
}
.modal h3, .transaction-id{
    font-size: 40px;
    text-align: center;
}
.transaction-id{
    display: block;
    margin-bottom: 1rem;
}
.note{
    color: red;
}
</style> -->
