import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import adminpanel from '../views/adminpanel.vue'
import page2 from '../views/page2.vue'
import profil from '../views/profil.vue'
//import pageAchat from '..views/pageAchat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: adminpanel
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/profil',
      name: 'profil',
      component: profil
    }
    //{
     // path : '/pageAchat',
     // name : 'pageAchat',
     // component : pageAchat
    //}
  ]
})

export default router