<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/global/NavBar.vue'

</script>

<script>
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
