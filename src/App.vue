<template>
  <div class="container mx-auto h-full flex">
    <Menu/>
    <div class="flex w-full lg:w-10/12 mt-24 lg:mt-0">
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
