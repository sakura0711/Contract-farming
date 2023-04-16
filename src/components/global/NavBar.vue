<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, computed, watch } from 'vue';
const title_list = ['首頁', '種類管理', '資料管理', '新增合約', '契作合約管理', '更多資訊'];
const index = ref(0);
const title = ref('首頁');

// 監視 index 變動
watch(index, (newIndex) => {
    console.log(`Now page is:${newIndex}`);
    title.value = title_list[newIndex];
});

</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="bootstrap-nav">
            <img class="icon" src="@/assets/icon.png" />
            <span id="organize" class="navbar-toggler">{{ title }}</span>

            <!-- 螢幕小於 1024 時觸發 -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- 下放選單 -->
            <div class="collapse navbar-collapse" id="navDropdown">
                <ul class="navbar-nav ">
                    <li class="nav-item" id="page1">
                        <RouterLink to="/" @click="index = 0">首頁</RouterLink>
                    </li>
                    <li class="nav-item" id="page2">
                        <RouterLink to="/categoryManage" @click="index = 1">種類管理</RouterLink>
                    </li>
                    <li class="nav-item" id="page3">
                        <RouterLink to="/infoManage" @click="index = 2">資料管理</RouterLink>
                    </li>
                    <li class="nav-item" id="page4">
                        <RouterLink to="/addContract" @click="index = 3">新增合約</RouterLink>
                    </li>
                    <li class="nav-item" id="page5">
                        <RouterLink to="/contractManage" @click="index = 4">契作合約管理</RouterLink>
                    </li>
                    <li class="nav-item" id="page6">
                        <RouterLink to="/aboutView" @click="index = 5">更多資訊</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style scoped lang="scss">
.icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.nav-item {
    margin: 0px 10px;
    padding: 5px 10px;
    font: 500 16px Sans-Serif;
}
</style>