<template>
<div class="user">
    <div class="user-info">
        <div class="user-avatar">
            <img src="../assets/avatar.png" alt="">
        </div>
        <div class="user-name">Kayan Chan</div>
    </div>
    <div class="user-record">
        <div class="expect-view">

        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'User',
        data() {
            return {}
        }
    }
</script>
<style lang="less" scoped>
.user-info {
    padding: 80px 0px;
    background-color: #1abc9c;
}
.user-avatar {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-color: #000;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
    }
}
.user-name {
    margin-top: 30px;
    font-weight: bold;
}
</style>
