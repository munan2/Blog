<template>
	<div>
		<my-header></my-header>
		<div class="container">
			<div class="wrap">
				<div class="contanier-banner">
					<h2 class="banner-title">热门文章</h2>
					<div class="nav-list">
						<router-link tag='a' :to="{path:'/welcome/all'}">
							<span :class="{active: nowIndex === 'all'}" @click="changeTab('all')">all</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/node'}">
							<span :class="{active: nowIndex === 'node'}" @click="changeTab('node')">node</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/javascript'}">
							<span :class="{active: nowIndex === 'javascript'}" @click="changeTab('javascript')">javascript</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/vue'}">
							<span :class="{active: nowIndex === 'vue'}" @click="changeTab('vue')">vue</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/htmlcss'}">
							<span :class="{active: nowIndex === 'htmlcss'}" @click="changeTab('htmlcss')">html/css</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/database'}">
							<span :class="{active: nowIndex === 'database'}" @click="changeTab('database')">database</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/network'}">
							<span :class="{active: nowIndex === 'network'}"@click="changeTab('network')" >network</span>
						</router-link>
						<router-link tag='a' :to="{path:'/welcome/webpack'}">
							<span :class="{active: nowIndex === 'webpack'}"@click="changeTab('webpack')" >webpack</span>
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
				nowIndex: this.getUrl()
			}
		},
		methods: {
			changeTab: function (index) {
				this.nowIndex = index;
			},
			getUrl: function () {
				var length = this.$route.path.split('/').length;
				return this.$route.path.split('/')[length-1];
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