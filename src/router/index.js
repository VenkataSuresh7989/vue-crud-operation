import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
