import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'settings',
      component: () => import('../views/SettingsView'),
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('../views/BranchView'),
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/InventoryView'),
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('../views/ConditionView'),
    },
    {
      path: '/format',
      name: 'format',
      component: () => import('../views/FormatView'),
    },
    {
      path: '/genre',
      name: 'genre',
      component: () => import('../views/GenreView'),
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/StaffView'),
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: () => import('../views/BookmarkView'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView'),
    },
    {
      path: '*',
      redirect: { name: 'settings', params: { is404: true } },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
