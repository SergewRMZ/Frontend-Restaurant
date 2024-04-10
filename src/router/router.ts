import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'; 

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/home',
    name: 'home',
    component: () => import (/* webpackChunkName: "Home" */ '@/modules/shared/pages/Home.vue')
  },

  {
    path: '/users',
    name: 'users',
    component: () => import (/* webpackChunkName: "UsersLayout" */ '@/modules/users/layouts/UserLayout.vue'),
    
    // En las rutas hijas no se pone el path absoluto
    children: [
      {
        path: 'register',
        name: 'register-user',
        component: () => import (/* webpackChunkName: "Register" */ '@/modules/users/pages/Register.vue')
      },
    
      {
        path: 'login',
        name: 'login-user',
        component: () => import (/* webpackChunkName: "Login" */ '@/modules/users/pages/Login.vue')
      },
    ]
  },

  {
    path: '/:pathMatch(.*)*', 
    redirect: 'home' 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;