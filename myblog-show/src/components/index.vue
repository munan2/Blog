<template>
	<div>
		<my-header></my-header>
		<div class="container">
			<div class="wrap">
				<div class="contanier-banner">
									<h2 class="banner-title">热门文章</h2>
					<div class="nav-list">
						<router-link tag='a' :to="{path:'/welcome/all'}">
							<span :class="{active: nowIndex === 0}" @click="changeTab(0)">all</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/node'}">
							<span :class="{active: nowIndex === 1}" @click="changeTab(1)">node</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/javascript'}">
							<span :class="{active: nowIndex === 2}" @click="changeTab(2)">javascript</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/vue'}">
							<span :class="{active: nowIndex === 3}" @click="changeTab(3)">vue</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/htmlcss'}">
							<span :class="{active: nowIndex === 4}" @click="changeTab(4)">html/css</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/database'}">
							<span :class="{active: nowIndex === 5}" @click="changeTab(5)">数据库</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/network'}">
							<span :class="{active: nowIndex === 6}"@click="changeTab(6)" >网络</span>
						</router-link>
					</div>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import MyHeader from './my-header'
	export default {
		components: {
			'my-header': MyHeader
		},
		data () {
			return {
				nowIndex: 0
			}
		},
		methods: {
			changeTab: function (index) {
				this.nowIndex = index;
			}
		}
	}
</script>
<style lang='less'>
	* {
		margin: 0;
		padding: 0;
	}
	ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	html, body {
		height: 100%;
		background-color: #f4f5f5;
	}
	.wrap {
		width: 960px;
		height: 100%;
		margin: 0 auto;
		background-color: #fff;
	}
	.container {
		margin-top: 80px;
	}
	.contanier-banner {
		height: 59px;
		border-bottom: 1px solid #f6f6f6;
		line-height: 59px;
		padding: 0 24px;
		.banner-title {
		    font-size: 16px;
		    font-weight: 500;
		    display: inline-block;

		}
		.nav-list {
			float: right;
			span {
				font-size: 14px;
    			color: #90979c;
    			display: inline-block;
				padding: 0 15px;
				&:hover {
					cursor: pointer;
				}
				&.active {
					color: #007fff;
				}
			}
		}
	}
</style>