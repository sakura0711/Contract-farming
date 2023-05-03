<script setup>
import router from '@/router/index.js';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div>
        this is InfoManage Page.
        <button @click="router.push('/categoryManage')">click</button>
        <router-link to="/categoryManage">1222222</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>
<style lang="scss"></style>