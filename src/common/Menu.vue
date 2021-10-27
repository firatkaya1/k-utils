<template>
    <div class="w-full h-16 lg:h-full bg-white lg:w-2/12 fixed lg:relative">
      <div class="flex w-full lg:w-96 lg:border-r fixed top-0 left-0 h-screen font-mono flex flex-col ">
        <h1 class="font-bold text-2xl flex flex-row p-4"> <img src="@/assets/K.png" class="w-6 h-6" alt="logo">-Utils </h1>
        <hr>
        <ul class="list-inside list-disc bg-rose-200 space-y-2 lg:mt-4 cursor-pointer  lg:block p-4 bg-white border-b lg:border-b-0  h-96" :class="{'hidden':!isMenuOpen}">
          <li>
            <router-link to="/home">Başlamadan önce</router-link>
          </li>
          <li>
            <router-link to="/badge" >Badge</router-link>
          </li>
          <li>
            <router-link to="/alert">Alerts</router-link>
          </li>
          <li>
            <router-link to="/button">Buttons</router-link>
          </li>
          <li>
            <router-link to="/pagination">Paginations</router-link> 
          </li>
          <li>
            <router-link to="/chips">Chips</router-link> 
          </li>
          <li>
            <router-link to="/navbar">Navbar</router-link> 
          </li>
          <a href="https://github.com/firatkaya1/k-utils" target="_blank" class="mt-auto flex flex-row  space-x-4 hover:text-blue-600 cursor-pointer lg:hidden">
              <img src="@/assets/github.svg" class="h-6 w-6 rounded-full" alt="" >
              <div class="font-bold font-mono text-lg ">Github</div>
            </a>
        </ul>
        <a href="https://github.com/firatkaya1/k-utils" target="_blank" class="mt-auto flex flex-row justify-center space-x-4 hover:text-blue-600 cursor-pointer hidden lg:flex">
          <img src="@/assets/github.svg" class="h-6 w-6 rounded-full" alt="" >
          <div class="font-bold font-mono text-lg ">Github</div>
        </a>
      </div>

      <div @click="openMenu()" class="absolute z-50 right-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 float-right mt-4 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isMenuOpen" >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 float-right mt-4 text-green-500 lg:hidden" viewBox="0 0 20 20" fill="currentColor" v-if="isMenuOpen">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
</template>

<script>
export default {
  name:'Menu',
  data(){
    return {
      isMenuOpen:false
    }
  },
  methods:{
    openMenu(){
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style lang="postcss" scoped>
.active {
  @apply text-blue-500
}
li {
  @apply hover:text-blue-500 transition duration-300
}
</style>