<template>
	<div class="slider-container">
		<el-menu
            default-active="1"
            class="el-menu-vertical-demo"
 			>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">文章管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{path:'/home/show?flag=0', query:{flag: 0}}" tag="div">
                            <el-menu-item index="1-1">已发布</el-menu-item>
                        </router-link>
                        <router-link :to="{path:'/home/show?flag=1', query:{flag: 1}}" tag="div">
                            <el-menu-item index="1-2">草稿箱</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>
            </router-link>
            <router-link to="/home/edit" tag="div">
                <el-menu-item index="2">
                    <i class="el-icon-edit"></i>
                    <span slot="title">编辑文章</span>
                </el-menu-item>
            </router-link>
            <router-link to="/home/setting" tag="div">
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置中心</span>
                </el-menu-item>
            </router-link>
            <router-link to="/home/user" tag="div" v-show="flag">
                <el-menu-item index="4">
                    <i class="el-icon-bell"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
            </router-link>
        </el-menu>
	</div>
</template>
<script>
	export default {
        data () {
            return {
                flag: false,
                params: {},
                name: ''
            }
        },
        mounted () {
            Number(window.localStorage.getItem('userFlag')) === 0 ? this.flag = false : this.flag = true;
        }
	}
</script>
<style scoped>
	.slider-container {
        width: 230px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: 60px;
        border-right: solid 1px #e6e6e6;
        box-sizing: border-box;
    }
    .el-menu,.el-menu-vertical-demo {
        border-right: none;
    }
</style>