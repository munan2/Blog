<template>
	<div>
		<my-header></my-header>
		<div class="user-container">
			<div class="author-box">
				<a href="/author/12" class="author-pic">
					<img :src="userInfo.img" alt="">
				</a>
				<h2>{{userInfo.name}}</h2>
			</div>
			<div class="all-article-box">
				<div class="article-header">
					<span class="title">原创文章</span>
				</div>
				<div class="article-content">
					<my-card v-for="item in cardList" :cardItem = "item"></my-card>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MyHeader from './my-header'
	import MyCard from './card'
	export default {
		components: {
			'my-header': MyHeader,
			'my-card': MyCard
		},
		data () {
			return {
				userInfo: {},
				cardList: []
			}
		},
		mounted () {
			this.getInfoList();
		},
		methods: {
			getUrl: function () {
				var length = this.$route.path.split('/').length;
				return this.$route.path.split('/')[length-1];
			},
			getInfoList: function () {
				this.$http.post('/api/getUser', {
					id: this.getUrl()
				}).then(function (res) {
					this.userInfo = res.data.info[0];
					this.$http.post('/api/getArticle', {
						name: this.userInfo.name,
						flag: 0
					}).then(function (res) {
						this.cardList = res.data.info;
					}).catch(function (err) {
						console.log(err);
					});
				})
			},
		},
		watch: {
			'$route': 'getInfoList'
		}
	}
</script>
<style lang='less'>
	.user-container {
		margin: 60px 0;
		padding: 20px;
		.author-box {
			text-align: center;
			padding-top: 60px;
			.author-pic {
				display: inline-block;
				width: 86px;
				height: 86px;
				border-radius: 86px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
					background-color: #fff;
				}
			}
			h2 {
				font-size: 24px;
				font-weight: 800;
				margin: 20px 0;
			}
		}
		.all-article-box {
			background-color: #fff;
			margin: 0 400px;
			.article-header {
				height: 60px;
				line-height: 60px;
				border-bottom: 1px solid #f6f6f6;
				padding: 0 20px;
				box-sizing: border-box;
				.title {
					font-size: 16px;
					font-weight: 700;
				}
			}
		}
	}
</style>