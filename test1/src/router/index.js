import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const ruku=()=>import('../views/ruku.vue')
const Test=()=>import('../views/test.vue')
const chuku=()=>import('../views/chuku.vue')
const OrderInput=()=>import('../views/OrderInput.vue')
const OrderQuery=()=>import('../views/OrderQuery.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: 'ruku',
          name: 'ruku',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: ruku
        },
        {
          path: 'test',
          name: 'test',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: Test
        },
        {
          path: 'chuku',
          name: 'chuku',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: chuku
        },
        {
          path:'orderQuery',
          name:'orderQuery',
          component:OrderQuery
        },
        {
          path:'orderInput',
          name:'orderInput',
          component:OrderInput
        }


      ]
      
    },
   
  ]
})

export default router
