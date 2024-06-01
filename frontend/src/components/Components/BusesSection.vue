<script setup>
import Bus from '@/components/Components/BusOption'
import BusContent from './BusContent.vue';
import {ref, defineProps} from 'vue'
defineProps({
    routes:Array
})
    const currentPage = ref(1);
    const selectedOption = ref(null);
          
    const selectOption =(option) => {
      selectedOption.value = option;
      currentPage.value = 2
    }
    // const nextPage =( )=> {
    //   currentPage.value = 2;
    // }

    const prevPage =()=> {
            window.location.reload()
    }
</script>
<template>
    <section id="busses">
          <div class="sub">
            <h1 class="sub" v-if="currentPage === 1">Available Buses</h1>
          </div>
          <div v-if="currentPage === 1" class="bus-list">
            <Bus  v-for="(option, index) in routes" :key="index" :value="option" @click="selectOption(option)" :bus="option" />
          </div>
          <div v-else-if="currentPage === 2" class="bus-content">
            <button @click="prevPage" class="infoclose close"><i class="fa-solid fa-xmark"></i></button>
            <BusContent v-if="selectedOption" :bus="selectedOption"/>
          </div>
        </section>
</template>
<style scoped>
section{
    display: block;
}
.bus-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
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
    /* width: 80%; */
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
/* Form */
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
/* border-radius: 20px; */
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
  /* flex-direction: row; */
  flex-wrap: wrap;
  gap: 5px;
}
.checkers>label{
  display: flex;
  flex-direction: row;
  gap: 2px;
}
</style>