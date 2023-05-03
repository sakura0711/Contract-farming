<script setup>

</script>

<template>
    <div class="container">
        <h4>刪除契約</h4>

        <!-- TODO :
        　  <p>刪除契作有下列兩種方法</p>
            <ul>
                <li>使用精準搜尋</li>
                <li>使用模糊搜尋</li>
            </ul>            
        -->

        <hr>
        <!-- 第一列 -->
        <div class="row">
            <div class="col-sm-5">
                <div class="form-floating">
                    <input type="text" placeholder="耕地所有權人" class="form-control" id="owner" required>
                    <label>請輸入耕地所有權人:</label>
                </div>
            </div>
            <div class="col-sm-7">
                <div class="form-floating">
                    <input type="text" placeholder="身份證字號" class="form-control" id="owner_id" required>
                    <label>請輸入身分證字號:</label>
                </div>
            </div>
        </div>
        <br>
        <!-- 第二列 -->
        <div class="row">
            <div class="col-sm-4">
                <div class="form-floating">
                    <input type="text" placeholder="坐落地段" class="form-control" id="LandCity" required>
                    <label>請輸入縣市:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <input type="text" placeholder="坐落地段" class="form-control" id="LandDistrict">
                    <label>請輸入地段(鄉鎮市區):</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <input type="text" placeholder="坐落地段" class="form-control" id="LandLot">
                    <label>請輸入地段(段):</label>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>