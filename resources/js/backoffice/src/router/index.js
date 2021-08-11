import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        // {
        //     path:'/',
        //     component: () => import('@back/layout/index.vue'),
        //     meta:{ requiresAuth:true },
        //     children:[
        //     ]
        // },
        {
            path:'/admin',
            component: () => import('@back/pages/appointment/index.vue'),
            meta:{ requiresAuth:true },
            name:'dashboard'
        },
        {
            path:'/admin/appointment/waiting',
            component: () => import('@back/pages/appointment/index.vue'),
            meta:{ requiresAuth:true },
            name:'waiting'
        },
        {
          path:'/admin/appointment/approved',
          component: () => import('@back/pages/appointment/approve.vue'),
          meta:{ requiresAuth:true },
          name:'approved'
        },
        {
          path:'/admin/course/ongoing',
          component: () => import('@back/pages/appointment/approve.vue'),
          meta:{ requiresAuth:true },
          name:'ongoing'
        },
        {
            path:'/admin/course/incoming',
            component: () => import('@back/pages/appointment/index.vue'),
            meta:{ requiresAuth:true },
            name:'incoming'
        },
        {
            path:'/admin/course/removed',
            component: () => import('@back/pages/appointment/index.vue'),
            meta:{ requiresAuth:true },
            name:'removed'
        },
        {
            path:'/admin/userlist',
            component: () => import('@back/pages/user/index.vue'),
            meta:{ requiresAuth:true },
            name:'userlist'
        },
        {
            path:'/admin/login',
            component: () => import('@back/layout/login.vue'),
            name:'login'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/admin/api/checkuser`).then(({data})=>{
        if (to.matched.some(record => record.meta.requiresAuth)) {
          // this route requires auth, check if logged in
          // if not, redirect to login page.
          if (!data) {
            next({
              name: 'login',
              query: { redirect: to.fullPath }
            })
          } else {
            next()
          }
        } else {
          next() // make sure to always call next()!
        }
    })
  })

export default router