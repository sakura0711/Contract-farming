<template>
    <div>
        <!-- <router-link to="/addContract/addLand" v-slot="button"></router-link> -->

        <!-- TODO : 完成路由切換 (避免使用 router-view) -->
        <!-- 原本的 addContract 頁面元件 -->
        <div class="add_contract">
            <span>新增</span>

            <!-- 點擊切換至 addLand(新增農地) -->
            <button @click="$router.push('/addContract/addLand')">addLand</button>
            <!-- 點擊切換至 addFarmer(新增農民) -->
            <button @click="$router.push('/addContract/addFarmer')">addFarmer</button>
        </div>
    </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'

</script>
<script>
export default {

}
</script>
<style lang="scss" scoped></style>