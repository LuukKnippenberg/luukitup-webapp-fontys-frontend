import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Projecten',
    name: 'Projecten',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/Projecten/Project/:projectId',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account/Login.vue')
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/CMS/Blog',
    name: 'Blog CMS',
    component: () => import(/* webpackChunkName: "about" */ '../views/CMS/Blog.vue')
  },
  {
    path: '/CMS/Projecten',
    name: 'Projects CMS',
    component: () => import(/* webpackChunkName: "about" */ '../views/CMS/Projects.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  /*
  routes: [
    { 
      path: '/:catchAll(.*)', 
      component: NotFoundComponent,
      name: 'NotFound'
    }
  ]
  */
})

export default router
