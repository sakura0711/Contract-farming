import { createRouter, createWebHistory } from 'vue-router'

// # home Page ------------------------------------ 
import HomeView from '@/views/HomeView.vue'

// # about Page -----------------------------------
import AboutView from '@/views/AboutView.vue'

// # add contract Page ------------------------------------
import AddContract from '@/views/AddContract.vue'
import addLand from '@/components/addContract/addLand.vue';
import addFarmer from '@/components/addContract/addFarmer.vue';

// # category manage Page ------------------------------------
import CategoryManage from '@/views/CategoryManage.vue'

// # contract manage Page ------------------------------------
import ContractManage from '@/views/ContractManage.vue'

// # info manage Page ------------------------------------
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
      component: AddContract,
      children: [
        {
          path: 'addLand',
          component: addLand,
        },
        {
          path: 'addFarmer',
          component: addFarmer,
        }
      ],
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

// fixed : 垃圾 GPT :<
// // ERROR 只有 NavBar 成功刷新，RouterView 無法刷新
// // 重新整理時，導向固定頁面(HomeView)
// router.beforeEach((to, from, next) => {
//   // 檢查是否是重新整理頁面
//   if (to.path === from.path) {
//     // 將路由導向到固定路徑
//     router.replace({ path: '/' })
//   } else {
//     // 繼續前往原始路徑
//     next();
//   }
// });


// 默認導出值
export default router
