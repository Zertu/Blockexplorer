import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/block/:id', component: () => import('../views/ExploreBlock.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  base: window.blocklet ? window.blocklet.prefix : window.env.apiPrefix,
  routes
})

export default router
