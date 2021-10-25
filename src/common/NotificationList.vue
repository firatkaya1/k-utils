<template>
  <div class="fixed z-50 right-10 top-10 overflow-y-scrolling">
      <div v-for="notification in notifications" :key="notification">
        <NotificationItem :notification="notification" />
      </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
import NotificationItem from './NotificationItem.vue';
export default {
  components: { NotificationItem },
    name:"NotificationList",
    methods:{
      ...mapGetters('notification',['getNotifications'])
    },
    computed:{
      notifications(){
        return this.getNotifications()
      }
    }
}
</script>