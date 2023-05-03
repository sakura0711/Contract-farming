<template>
    <div class="container">
        <form>
            <h4>新增契作</h4>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <label for="farmer__select">選擇農民</label>
                    <select class="form-select" id="farmer__select">
                        <option selected>選擇農民</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="年度" class="form-control" id="Year" required>
                        <label>請輸入年度:</label>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="form-floating">
                        <input type="text" placeholder="期號" class="form-control" id="No" required>
                        <label>請輸入期號:</label>
                    </div>
                </div>
            </div>

            <br>

            <div class="row">

                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary" id="4014">送出</button>
                </div>

            </div>
        </form>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped></style>