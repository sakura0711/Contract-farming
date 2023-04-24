<template>
    <div class="container">
        <div>
            <h4>農地資料新增</h4>
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
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="坐落地段" class="form-control" id="LandLot_s">
                        <label>請輸入地段(小段):</label>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-floating">
                        <input type="text" placeholder="地目" class="form-control" id="land_use" required>
                        <label>請輸入地目:</label>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="form-floating">
                        <input type="text" placeholder="地號" class="form-control" id="land_number" required>
                        <label>請輸入地號:</label>
                    </div>
                </div>
            </div>
            <br>
            <!-- 第三列 -->
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="本筆面積" class="form-control" id="area1" required>
                        <label>請輸入本筆面積:</label>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="權利面積" class="form-control" id="area2" required>
                        <label>請輸入權利面積:</label>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="可耕面積" class="form-control" id="farm" required>
                        <label>請輸入可耕面積:</label>
                    </div>
                </div>
            </div>
            <br>
            <!-- 第四列 -->
            <div class="row">
                <div class="col-sm-6">
                    <label>地段分類</label>
                    <select class="form-select" id="land_address_select" required>
                        <option value="" selected>請選擇</option>
                        <option value="產銷履歷">產銷履歷</option>
                        <option value="新增地段">新增地段</option>
                        <option value="一般地段">一般地段</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label>是否契作中?</label>
                    <div class="col-sm-12">
                        <label>是</label>
                        <input type="radio" name="order" id="yes" value="是" required>
                        <label>否</label>
                        <input type="radio" name="order" id="no" value="否">
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary" id="4014">送出</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';



</script>
<script>
export default {

}
</script>
<style lang="scss" scoped></style>