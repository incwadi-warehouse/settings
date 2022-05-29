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
      component: () => import('../views/SettingsView.vue'),
      props: true,
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('../views/BranchView.vue'),
      props: true,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/InventoryView.vue'),
      props: true,
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('../views/ConditionView.vue'),
      props: true,
    },
    {
      path: '/format',
      name: 'format',
      component: () => import('../views/FormatView.vue'),
      props: true,
    },
    {
      path: '/genre',
      name: 'genre',
      component: () => import('../views/GenreView.vue'),
      props: true,
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/StaffView.vue'),
      props: true,
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: () => import('../views/BookmarkView.vue'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      props: true,
    },
    {
      path: '*',
      redirect: { name: 'settings' },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
