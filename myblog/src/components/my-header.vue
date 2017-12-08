<template>
  <div class="m-header">
        <h1 class="welcome-title">欢迎进入<span>{{username}}</span></h1>
        <div class="avatar" @click="showback">
            <img :src="srcImg" alt="">
        </div>
        <div class="back-box" v-if="show">
            <router-link class="back-item" tag="span" :to="{path:'/index'}">退出</router-link>
        </div>
  </div>
</template>
<script>
export default {
    props: {
        'userInfo': {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            show: 0,
            srcImg: require('../assets/logo.png'),
            username: this.$route.query.name,
            userinfo: this.userInfo
        }
    },
    methods: {
        showback: function () {
            this.show = 1;
        }
    },
    mounted () {
        if (this.userinfo.img) {
            this.srcImg = res.data.info[0].img;
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
        position: relative;
    }
    .welcome-title {
        float: left;
        font-family: 'Microsoft YaHei';
        font-size: 20px;
        color: #2D2F33;
    }
    .avatar {
        float: right;
        width: 50px;
        position: relative;
    }
    .avatar img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .back-box {
        width: 100px;
        position: absolute;
        right: 30px;
        top: 72px;
        z-index: 999;
        background: #fff;
        outline: 0 none;
        cursor: default;
        border: 1px solid #c4c4c4;
        border-radius: 4px 4px 4px 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
        /*display: none;*/
    }
    .back-item {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
    }
    .back-item:hover {
        background-color: #409EFF;
        color: #fff;
    }
</style>

