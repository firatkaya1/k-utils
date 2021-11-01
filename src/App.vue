<template>
  <div class="lg:flex">
    <Menu/>
    <div class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
      <router-view></router-view>
    </div>
    <NotificationList/>
    <CodeViewer/>
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
