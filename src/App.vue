<template>
  <div class="container mx-auto h-full flex">
    <div class="w-2/12 relative">
      <Menu/>
    </div>
    <div class="flex w-10/12">
      <router-view></router-view>
    </div>
    <NotificationList/>
  </div>
</template>

<script>
import Menu from './common/Menu.vue'
import NotificationList from './common/NotificationList.vue'

export default {
  name: 'App',
  components:{Menu, NotificationList}
  
}
    Menu
</script>

<style>

</style>
