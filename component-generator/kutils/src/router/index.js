import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Badge from '../views/Badge.vue'


const routes = [
    {
      path:'/',
      component:Home,
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/badge',
      component:Badge,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/",
    }
  ]
  
const router = createRouter({
linkActiveClass: "active",
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router;