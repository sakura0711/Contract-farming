<!-- 契作管理頁面 
---- 包含 : 新增、修改、刪除、契作追蹤
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="router_content">
        <router-link to="/contractManage/addLand" class="btn btn-primary">新增農地</router-link>
        <router-link to="/contractManage/addFarmer" class="btn btn-primary">新增農民</router-link>
        <router-link to="/contractManage/addContract" class="btn btn-primary">新增契約</router-link>
        <router-link to="/contractManage/delContract" class="btn btn-warning">刪除契約</router-link>
        <router-link to="/contractManage/modContract" class="btn btn-warning">修改契約</router-link>
        <router-link to="/contractManage/trackContract" class="btn btn-info">契作追蹤</router-link>
    </div>
    <router-view class="router_view"></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.router_content {
    display: flex;
    justify-content: start;
    margin-bottom: 50px;

    .btn {
        margin: 0 10px;
    }
}

.router_view{
    padding: 10px;
}
</style>