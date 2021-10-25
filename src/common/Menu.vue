<template>
    <div class="flex w-96 border-r fixed top-0 left-0 h-screen p-4 font-mono flex flex-col">
      <h1 class="font-bold text-2xl"> K-Utils </h1>
      <hr>
      <ul class="list-inside list-disc bg-rose-200 space-y-2 mt-4 cursor-pointer ">
        <li>
          <router-link to="/home">Başlamadan önce</router-link>
        </li>
        <li>
          <router-link to="/badge" >Badge</router-link >
        </li>
        <li>
          <router-link to="/alert">Alerts</router-link >
        </li>
        <li>
          <router-link to="/button">Buttons</router-link >
        </li>
        <li>
          <router-link to="/pagination">Paginations  </router-link > 
        </li>
      </ul>
      <a href="https://github.com/firatkaya1/k-utils" target="_blank" class="mt-auto flex flex-row justify-center space-x-4 hover:text-blue-600 cursor-pointer ">
        <img src="@/assets/github.svg" class="h-6 w-6 rounded-full" alt="" >
        <div class="font-bold font-mono text-lg ">Github</div>
      </a>
    </div>
</template>

<script>
export default {
  name:'Menu'
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