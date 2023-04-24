<template>
    <div class="container">
        <form>
            <h4>農民資料新增</h4>
            <hr>
            <!-- 第一列 -->
            <div class="row">
                <div class="col-sm-5">

                    <div class="form-floating">
                        <input type="text" placeholder="農民姓名" class="form-control" id="A_farmer_name" required>
                        <label>請輸入姓名:</label>
                    </div>

                </div>
                <div class="col-sm-7">

                    <div class="form-floating">
                        <input type="text" placeholder="身份證字號" class="form-control" id="A_farmer_ID" required>
                        <label>請輸入身分證字號:</label>
                    </div>
                </div>
            </div>
            <br>
            <!-- 第二列 -->
            <div class="row">
                <div class="col-sm-4">

                    <div class="form-floating">
                        <input type="text" placeholder="農民電話" class="form-control" id="A_farmer_phone" required>
                        <label>請輸入聯絡電話:</label>
                    </div>

                </div>
                <div class="col-sm-8">

                    <div class="form-floating">
                        <input type="text" placeholder="地址" class="form-control" id="A_farmer_Address" required>
                        <label>請輸入地址:</label>
                    </div>
                </div>
            </div>
            <br>
            <!-- 送出按鈕 -->
            <div class="row">

                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary" id="4014">送出</button>
                </div>

            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const content = ref('this is add FarmerPage.');

</script>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.input-group {
    margin: 0px 10px;

}
</style>