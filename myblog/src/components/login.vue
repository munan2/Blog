<template>
	<div>
   		<el-form :label-position="labelPosition" :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="60px" class="login-box">
   			<h2 class="login-title">登录</h2>
   			<el-form-item label="用户名" prop="name">
		    	<el-input v-model.name="loginForm.name"></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
		    	<el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<router-link :to="{path:'/index/regist'}" tag="div" class="regist-tag">没有账号，请注册</router-link>
		    <el-button type="primary" @click="loginInfo">登录</el-button>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
        	this.nameFlag = 0;
          return callback(new Error('用户名不能为空'));
        } else {
        	this.nameFlag = 1;
        }
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   }
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
        	this.passFlag = 0;
          	callback(new Error('请输入密码'));
        } else {
        	this.passFlag = 1;
        }
      };
      return {
      	labelPosition: 'left',
        loginForm: {
          pass: '',
          name: ''
        },
        nameFlag: 0,
        passFlag: 0,
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      loginInfo: function () {
      	if (this.nameFlag && this.passFlag) {
      		this.$http.post('/login', {
      			name: this.loginForm.name,
      			pass: this.loginForm.pass
      		}, {emulateJSON: true}).then(function (res) {
      			if (res.data.status === 0) {
      				this.$message('用户信息不正确，请重新输入');
      				this.$router.replace('/');
      			} else {
      				window.app = this
      				setTimeout(() => {
      					// this.$router.push({path: '/home/show',query:{name: res.data.info[0].name}});
      					window.location.href = '/home/show?name=zhangyan123012'
      				}, 300)
      			}
      		})
      	}
      }
    }
  }
</script>
<style>
	.login-box {
		position: absolute;
		width: 300px;
		height: 260px;
		background: rgba(255, 255, 255, 0.8);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
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
	.regist-tag {
		font-size: 12px;
		text-align: right;
	}
	.regist-tag:hover {
		cursor: pointer;
	}
</style>