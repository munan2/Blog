<template>
	<div>
   		<el-form :label-position="labelPosition" :model="registForm" status-icon :rules="rules2" ref="registForm" label-width="70px" class="regist-box">
   			<h2 class="regist-title">注册</h2>
   			<el-form-item label="用户名" prop="name">
		    	<el-input v-model.name="registForm.name"></el-input>
          <span class="username-error" v-if="show">用户名已存在</span>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
		    	<el-input type="password" v-model="registForm.pass" auto-complete="off"></el-input>
		  	</el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <router-link :to="{path:'/index/login'}" tag="div" class="login-tag">已注册过，直接登录</router-link>
		    <el-button type="primary" @click="registInfo" :class="{'no-click':show}">注册</el-button>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
          // if (!Number.isInteger(value)) {
          //   callback(new Error('请输入数字值'));
          // }
        this.$http.post('/checkName', {
          name: value
        }, {emulateJSON: true})
        .then(function (res) {
          if (res.data.status === 0) {
            this.show = true;
          } else {
            this.show = false;
          }
        }).catch(function (err) {
          console.log(err);
        });
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registForm.checkPass !== '') {
            this.$refs.registForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
      	labelPosition: 'left',
        show: false,
        registForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'change, blur' }
          ]
        }
      };
    },
    methods: {
      registInfo: function () {
        this.$http.post('/regist', {
          name: this.registForm.name,
          pass: this.registForm.pass,
          flag: 0
        }, {emulateJSON: true}).then(function (res) {
            if (res.data.status === 0) {
              this.$message('您已经注册过，请不要重复注册');
            } else {
              window.location.href = '/home/show' + '?name=' + this.registForm.name + '&t=' + (new Date()).getTime().toString();
            }
        }).catch(function (err) {
          console.log(err);
        })
      }
    }
  }
</script>
<style>
	.regist-box {
		position: absolute;
		width: 340px;
		height: 320px;
		background: rgba(255, 255, 255, 0.8);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 20px 40px;
		text-align: center;
	}
	.login-title {
		text-align: center;
		padding: 20px;
		font-family: 'PingFang SC';
		font-size: 24px;
		font-weight: normal;
		color: #5a5e66;
	}
  .username-error {
    color: #fa5555;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
  }
  .no-click {
    color: #fff;
    background-color: #333;
    border-color: #333;
  }
  .no-click:hover {
    color: #fff;
    background-color: #333;
    border-color: #333;
  }
  .login-tag {
    font-size: 12px;
    text-align: right;
  }
  .login-tag:hover {
    cursor: pointer;
  }
  .regist-title {
    text-align: center;
    padding: 20px;
    font-family: 'PingFang SC';
    font-size: 24px;
    font-weight: normal;
    color: #5a5e66;
  }
</style>