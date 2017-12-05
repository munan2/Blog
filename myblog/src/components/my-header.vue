<template>
  <div class="m-header">
        <h1 class="welcome-title">欢迎进入</h1>
        <div class="avatar">
            <img src="../assets/logo.png" alt="">
        </div>
  </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .m-header {
        height: 50px;
        padding: 20px 40px;
        line-height: 60px;
        line-height: 50px;
    }
    .welcome-title {
        float: left;
        font-family: 'Microsoft YaHei';
        font-size: 20px;
        color: #2D2F33;
    }
    .avatar {
        float: right;
    }
    .avatar img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>

