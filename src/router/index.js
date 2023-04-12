import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AddContract from '@/views/AddContract.vue'
import CategoryManage from '@/views/CategoryManage.vue'
import ContractManage from '@/views/ContractManage.vue'
import InfoManage from '@/views/InfoManage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AddContract',
      name: 'AddContract',
      component: AddContract
    },
    {
      path: '/CategoryManage',
      name: 'CategoryManage',
      component: CategoryManage
    },
    {
      path: '/ContractManage',
      name: 'ContractManage',
      component: ContractManage
    },
    {
      path: '/InfoManage',
      name: 'InfoManage',
      component: InfoManage
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
  ]
})

// 切換到不同的 router 後觸發
router.afterEach((to) => {
  // 關閉漢堡選單
  const navbar = document.querySelector('.navbar-collapse')
  navbar.classList.remove('show')
})

export default router
