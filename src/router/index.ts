import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/folio/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/folio/about',
    name: 'About',
    component: About,
    // beforeEnter: protectedRoute,
  },
  {
    path: '/folio/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/folio/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
