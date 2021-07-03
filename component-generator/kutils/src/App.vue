<template>
  <div class="container mx-auto h-full flex">
    <Menu/>
    <div class="flex w-10/12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './common/Menu.vue'

export default {
  name: 'App',
  components:{Menu}
  
}
    Menu
</script>

<style>

</style>
