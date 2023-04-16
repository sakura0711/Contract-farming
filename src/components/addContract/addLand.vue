<template>
    <div>
        {{ content }}
    </div>
    <router-view></router-view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { routerView } from 'vue-router'
const content = ref('this is add LandPage.');

</script>
<script>
export default {

}
</script>
<style lang="scss" scoped></style>