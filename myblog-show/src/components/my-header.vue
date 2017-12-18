<template>
	<div class="header-container">
		<div class="wrap">
			<a href="#" class="header-logo">My Blog</a>
			<div class="search-box">
				<Input v-model="value4" icon="ios-search" placeholder="请输入搜索内容" style="width: 300px"></Input>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        }
    }
</script>
<style>
	.header-container {
		width: 100%;
		height: 60px;
		background-color: #fff;
		position: fixed;
		top: 0;
	}
	.header-logo {
		float: left;
		font-size: 30px;
		line-height: 60px;
	}
	.search-box {
		float: right;
		height: 30px;
		line-height: 30px;
		margin-top: 15px;
	}
</style>