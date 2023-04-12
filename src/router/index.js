import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

// 切換到不同的 router 後觸發
router.afterEach((to) => {
  // 關閉漢堡選單
  const navbar = document.querySelector('.navbar-collapse')
  navbar.classList.remove('show')

  // // 更改首頁icon名稱
  // const title = to.meta.title || '首頁'
  // const navbarBrand = document.querySelector('.navbar-brand')
  // navbarBrand.innerHTML = title
})
export default router
