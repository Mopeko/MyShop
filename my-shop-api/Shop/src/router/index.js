import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import adminpanel from '../views/adminpanel.vue'

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
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/profil',
      name: 'profil',
      component: profil
    },
    {
      path : '/pageAchat',
      name : 'pageAchat',
      component : pageAchat
      },
      {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

export default router