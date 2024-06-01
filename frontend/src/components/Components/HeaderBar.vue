<script setup>

// import { ref } from 'vue';

// const isDropdownVisible = ref(false);

// const showDropdown =() => {
//   isDropdownVisible.value = true;
// }

// const hideDropdown =()=> {
//   isDropdownVisible.value = false;
// }
</script>
<template>
  <header>
    <div class="content">
      <img src="@/assets/logo.png" alt="" class="logo" style="width: 100px;">
      <nav>
        <ul>
          <li> <router-link to="/" class="mynavs" active-class="activity"><button>Home</button></router-link></li>
          <li> <router-link to="/bookings" class="mynavs" active-class="activity"><button>Book</button></router-link></li>
          <li> <router-link to="/about" class="mynavs" active-class="activity"><button>About</button></router-link></li>
          <li> <router-link to="/contact" class="mynavs" active-class="activity"><button>Contact</button></router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header{
  position: fixed;
  top: 0;
  min-height: 100px;
  background-color: var(--primary);
  z-index: 999;
}
.content{
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
nav>ul{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
nav button{
  min-width: 100px;
  min-height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  transition: ease-in-out 0.2s;
}
nav button:hover{
  background-color: var(--secondary);
}
.activity>button{
  background-color: var(--secondary)
}
</style>