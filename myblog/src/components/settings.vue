<template>
<div class="setting-container">
  <h2>完善个人信息</h2>
  <!-- <p class="setting-item">文章标题：
      <el-input v-model="username" placeholder="请输入内容"></el-input>
  </p> -->
  <div class="upload-img"><span>头像上传</span>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        username: window.localStorage.getItem('username'),
        nameFlag: 0,
        passFlag: 0
      }
    }
  }
</script>


<style>
  .setting-container {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 40px;
  }
  .upload-img {
  }
  .avatar-uploader {
    display: inline-block;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
  .article-item {
    height: 40px;
    line-height: 40px;
    padding: 10px;
  }
</style>