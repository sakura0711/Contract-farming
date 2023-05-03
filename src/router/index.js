import { createRouter, createWebHistory } from 'vue-router'

// # home Page ------------------------------------ 
import HomeView from '@/views/HomeView.vue'

// # about Page -----------------------------------
import AboutView from '@/views/AboutView.vue'

// # category manage Page ------------------------------------
import CategoryManage from '@/views/CategoryManage.vue'

// # contract manage Page ------------------------------------
import ContractManage from '@/views/ContractManage.vue'
/*---*/import addLand from '@/components/contractManage/addLand.vue';
/*---*/import addFarmer from '@/components/contractManage/addFarmer.vue';
/*---*/import addContract from '@/components/contractManage/addContract.vue';
/*---*/import delContract from '@/components/contractManage/delContract.vue';
/*---*/import modContract from '@/components/contractManage/modContract.vue';
/*---*/import trackContract from '@/components/contractManage/trackContract.vue';

// # info manage Page ------------------------------------
import InfoManage from '@/views/InfoManage.vue'
/*---*/import farmerManage from '@/components/infoManage/farmerManage.vue'
/*---*/import landManage from '@/components/infoManage/landManage.vue'

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
      component: InfoManage,
      children: [
        {
          path: 'farmerManage',
          component: farmerManage,
        },
        {
          path: 'landManage',
          component: landManage,
        },
      ],
    },
    { // 契約管理
      path: '/contractManage',
      name: 'ContractManage',
      component: ContractManage,
      children: [
        {
          path: 'addLand',
          component: addLand,
        },
        {
          path: 'addFarmer',
          component: addFarmer,
        },
        {
          path: 'addContract',
          component: addContract,
        },
        {
          path: 'delContract',
          component: delContract,
        },
        {
          path: 'modContract',
          component: modContract,
        },
        {
          path: 'trackContract',
          component: trackContract,
        },
      ],
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

// 默認導出值
export default router
