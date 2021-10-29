import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Badge from '../views/Badge.vue'
import Alert from '../views/Alert.vue'
import Button from '../views/Button.vue'
import Pagination from '../views/Pagination.vue'
import Chips from '../views/Chips.vue'
import Navbar from '../views/Navbar.vue'
import Progress from '../views/Progress.vue'

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
      path:'/alert',
      component:Alert,
    },
    {
      path:'/button',
      component:Button,
    },
    {
      path:'/pagination',
      component:Pagination,
    },
    {
      path:'/chips',
      component:Chips,
    },
    {
      path:'/navbar',
      component:Navbar,
    },
    {
      path:'/progress',
      component:Progress,
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