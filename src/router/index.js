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
    { // 首頁
      path: '/',
      name: 'home',
      component: HomeView
    },
    { // 種類管理
      path: '/categoryManage',
      name: 'CategoryManage',
      component: CategoryManage
    },
    { // 資料管理
      path: '/infoManage',
      name: 'InfoManage',
      component: InfoManage
    },
    { // 新增合約
      path: '/addContract',
      name: 'AddContract',
      component: AddContract
    },
    { // 契約管理
      path: '/contractManage',
      name: 'ContractManage',
      component: ContractManage
    },
    { // 更多資訊
      path: '/aboutView',
      name: 'AboutView',
      component: AboutView
    },
  ],
})

// 切換到不同的 router 後觸發
router.afterEach((to) => {
  // 關閉漢堡選單
  const navbar = document.querySelector('.navbar-collapse')
  navbar.classList.remove('show')
})

// ERROR 只有 NavBar 成功刷新，RouterView 無法刷新
// 重新整理時，導向固定頁面(HomeView)
router.beforeEach((to, from, next) => {
  // 檢查是否是重新整理頁面
  if (to.path === from.path) {
    // 將路由導向到固定路徑
    router.push('/');
  } else {
    // 繼續前往原始路徑
    next();
  }
});

export default router
