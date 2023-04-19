<script setup>
import { RouterLink, RouterView } from 'vue-router';
import {onMounted } from 'vue';
import NavBar from '@/components/global/NavBar.vue';
import router from '@/router/index.js';

/**
 * 使用生命週期函數，重新掛載(mount)後執行。
 * 重新整理頁面 = 重新掛載
 * 
 * @event router-push-to-home(/)
*/
onMounted(() => {
  console.debug(`onMounted`);
  router.push('/');
});

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
