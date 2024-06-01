<script setup>
import {ref} from 'vue';

const mySpan = ref(null);

    const changeDisplay =()=> {
      mySpan.value.style.display = 'inline';
    }
    const form = {
        name: null,
        email: null,
        message: null,
        add:null
    }
      

    const checkPayment = () => {
      const inputs = document.querySelectorAll('input');
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
          alert('Some information might be missing');
          changeDisplay();
          return;
        }
        else{
          continue
        }
      }
    };
</script>
<template>
    <form>                    
        <div class="inputs">
            <label for="name">name</label>
            <input type="text" name="name" v-model="form.name" required placeholder="Adam Smith">
        </div>
        <div class="inputs">
            <label for="email">email</label>
            <input type="email" name="email" v-model="form.email" placeholder="abc@email.com">
        </div>
        <div class="inputs">
            <label for="message">message</label>
            <input type="text" name="message" v-model="form.message" placeholder="I have something to say.....">
        </div>
        <div class="inputs">
            <label for="additional_information">additional information</label>
            <textarea name="addition_information" id="" cols="30" rows="10" v-model="form.add"></textarea>
        </div>
        <span ref="mySpan" class="fill">Please fill in the required field</span>
        <button @click="checkPayment">SEND MESSAGE</button>
</form>
</template>
<style scoped>

form{
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
label{
    color: var(--primary);
    text-align: left;
    text-transform: capitalize;
    font-weight: 700;
}
.inputs{
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
input{
    height: 40px;
    border: 2px solid var(--secondary);
    padding: 0 10px;
}
.fill{
  display: none;
}
button{
    padding: 1rem;
    background-color:var(--buttons) ;
    border: none;
}
button:hover{
    background-color: var(--secondary);
    color:white;
}
textarea{
    border: 2px solid var(--secondary);
}
</style>