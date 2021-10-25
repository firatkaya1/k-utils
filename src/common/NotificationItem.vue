<template>
  <div :class="{'destroy':isDelete}">
    <div class="flex flex-row border h-auto px-2 py-4 rounded  bg-green-200 mt-4" style="width: 24rem;" >
        <div @click="deleteNotification(notification.id)">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="deleteNotification(notification.id)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <p class="text-justify px-4 mr-auto text-green-700 font-mono my-auto">
            {{notification.message}}
        </p>
        <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "NotificationItem",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDelete: false,
    };
  },
  methods: mapMutations("notification", ["deleteNotification"]),
  mounted() {
    setTimeout(() => {
      this.isDelete = true;
      setTimeout(() => {
      this.deleteNotification(this.notification.id);
    }, 950);
    }, 5000);
  },
};
</script>

<style lang="postcss" scoped>
.destroy {
  animation: pulse 1s;
  animation-iteration-count: 1
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility:hidden;
  }
}
.notification {
  @apply flex flex-row border rounded-xl shadow-2xl w-96 h-auto mt-4;
}
.primary {
  @apply bg-blue-500 text-white cursor-pointer hover:bg-blue-700 transition duration-300;
}
.light {
  @apply bg-white cursor-pointer hover:bg-gray-100 transition duration-300;
}
.danger {
  @apply bg-red-600 text-white cursor-pointer hover:bg-red-700 transition duration-300;
}
.warning {
  @apply bg-yellow-400 text-black cursor-pointer hover:bg-yellow-500 transition duration-300;
}
.success {
  @apply bg-green-400 text-black cursor-pointer hover:bg-green-500 transition duration-300;
}
</style>