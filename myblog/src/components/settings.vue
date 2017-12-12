<template>
  <div class="setting-container">
    <el-form :label-position="labelPosition" label-width="80px" :model="dynamicValidateForm">
      <h2 class="setting-title">完善个人信息</h2>
      <el-form-item label="用户名">
        <el-input v-model="dynamicValidateForm.name"></el-input>
      </el-form-item>
      <div class="upload-img"><span class="el-form-item__label" style="width: 80px">头像上传</span>
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
      <el-form-item label="github">
        <el-input v-model="dynamicValidateForm.github"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :rules="[{ required: false, message: '请输入邮箱地址', trigger: 'blur' }, { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitSetting">提交</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: '',
        labelPosition: 'left',
        dynamicValidateForm: {
          name: window.localStorage.username,
          github: '',
          email: ''
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl);
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
      },
      submitSetting () {
        this.$http.post('/api/saveUserInfo', {
          id: window.localStorage.getItem('userId'),
          img: this.imageUrl,
          github: this.dynamicValidateForm.github,
          email: this.dynamicValidateForm.email,
          name: this.dynamicValidateForm.name
        }).then(res => {
          console.log(res.data);
          if (res.data.status === 1) {
            window.localStorage.setItem('img', this.imageUrl);
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>
<style scope>
  .setting-container {
    width: 600px;
    text-align: center;
    padding: 20px 50px;
  }
  .setting-title {
    font-size: 26px;
    font-family: 'Microsoft YaHei';
    padding: 20px;
    font-weight: normal;
  }
  .setting-container .el-form {
  }
  .upload-img {
    height: 40px;
    margin-bottom: 22px;
    line-height: 40px;
  }
  .avatar-uploader {
    display: inline-block;
    float: left;
  }
  .avatar {
    width: 40px;
  }
  .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
     border-color: none;
  }
  .el-button--primary {
    float: right;
  }
</style>