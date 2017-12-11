<template>
<div>
  哈哈
 <!--  <el-form :model="allInfoForm"  label-width="60px" class="fullfill-box">
      <h2 class="login-title">完善用户信息</h2>
      <el-form-item label="用户名">
        <el-input v-model="allInfoForm.name"></el-input>
      </el-form-item>
      <el-form-item label="github账号">
        <el-input v-model="allInfoForm.github" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="微博">
        <el-input v-model="allInfoForm.weibo" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="juejin账号">
        <el-input v-model="allInfoForm.juejin" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="allInfoForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-button type="primary" @click="changeInfo">修改</el-button>
  </el-form>  -->
</div>
 
</template>
<script>
  export default {
    data () {
      return {
      //   allInfoForm: {
      //     name: '',
      //     github: '',
      //     email: '',
      //     juejin: '',
      //     weibo: '',
      //     img: ''
      //   },
      //   nameFlag: 0,
      //   passFlag: 0
      // }
    }
  }
</script>


<style>
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
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