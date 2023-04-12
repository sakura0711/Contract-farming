<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

</script>

<script>

// ? 刷新頁面 / 導向同頁面
export default {
  // 可以被子組件繼承 ，跟 inject 一起使用
  provide() {
    return { reload: this.reload }
  },

  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      console.log(`reload`);
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      })
    }
  },
}

</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar></NavBar>
    </div>
  </header>

  <!-- 頁面展示在這邊 -->
  <RouterView />
</template>

<style scoped></style>
