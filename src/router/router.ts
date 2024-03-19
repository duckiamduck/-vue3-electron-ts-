import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import Menu from '../view/menu.vue'

const routes:RouteRecordRaw[]=[
  {
    path:'/',
    name:'Menu',
    component:Menu,
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: '系统首页',
            permiss: '1',
        },
        component: () => import('@/view/dashborad/index.vue'),
    },
      {
          path:'user',
          name:'user',
          meta:{
            title:'个人中心',
          },
          component:()=>import('@/view/user/index.vue')
      }
      ,
      {
        path:'ps',
        name:'ps'
        ,
        meta:{
          title:'ps'
        },
        component:()=>import('@/view/Ps/index.vue')
      }
      ,
      {
        path:'ps2',
        name:'ps2'
        ,
        meta:{
          title:'ps2'
        },
        component:()=>import('@/view/PS2/index.vue')
      }
      ,
      {
        path:'gimini',
        name:'gimini'
        ,
        meta:{
          title:'gimini'
        },
        component:()=>import('@/view/Gimini/index.vue')
      },
      {
        path:'/apifox',
        name:'apifox',
        meta:{
          title:'apifox'
        },
        component:()=>import('@/view/api/index.vue')
      },
      {
        path:'/backgroundpic',
        name:'backgroundpic',
        meta:{
          title:'background'
        },
        component:()=>import('@/view/BackgroundPic/index.vue')
      }
    ]
  }
  ,

 ,
  {
    path:'/login',
    name:'Login',
    meta:{
      title:'登录'
    },
    component:()=>import('@/view/login/login.vue')
  }
] 





const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  Nprogress.start();
  const role = localStorage.getItem('ms_username');
  const permiss = usePermissStore();
  if (!role && to.path !== '/login') {
      next('/login');
  } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
      // 如果没有权限，则进入403

  } else {
      next();
  }
});

router.afterEach(() => {
  Nprogress.done()
})
export default router;
