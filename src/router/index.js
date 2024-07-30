import AllUsers from '@/views/AllUsers.vue'
import Auth from '@/views/Auth/Auth.vue'
import Registration from '@/views/Auth/Registration.vue'
import BuildPage from '@/views/BuildPage.vue'
import MainPage from '@/views/MainPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/auth/registration',
    component: Registration
  },
  {
    path: '/build/:name',
    component: BuildPage
  },
  {
    path: '/users',
    component: AllUsers
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       component: App
//     },
//     {
//       path: '/auth',
//       name: 'auth',
//       component: Auth
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//     }
//   ]
// })

export default router
