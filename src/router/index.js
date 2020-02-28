import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import vContactList from '../components/contacts/v-contact-list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: vContactList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
