<template>
	<div>
		<my-header></my-header>
		<div class="user-container">
			<div class="author-box">
				<a href="/author/12" class="author-pic">
					<img :src="articleInfo.img" alt="">
				</a>
				<h2>{{articleInfo.name}}</h2>
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
				articleInfo: {
					'name': 'zhangyan',
					'date': '2017-12-01',
					'htmlContent': '<h1>HEHE</h1><p>这是具体的信息</p>',
					'title': '这是标题1',
					'email': '123456@qq.com',
					'github': '112',
					'img': require('../assets/logo.png')
				},
				cardList: [
					{
						'id': '123232',
						'title': '文章1',
						'htmlContent': '<h1>哈哈</h1>',
						'data': '2017-11-12',
						'label': 'node',
						'name': 'zhangyan',
						'readNum': 10
					},
					{
						'id': '123232',
						'title': '文章2',
						'htmlContent': '<h1>哈哈</h1>',
						'data': '2017-11-12',
						'label': 'node',
						'name': 'zhangyan',
						'readNum': 17
					},
					{
						'id': '123232',
						'title': '文章3',
						'htmlContent': '<h1>哈哈</h1>',
						'data': '2017-11-12',
						'label': 'node',
						'name': 'zhangyan',
						'readNum': 12
					},
					{
						'id': '123232',
						'title': '文章4',
						'htmlContent': '<h1>哈哈</h1>',
						'data': '2017-11-12',
						'label': 'node',
						'name': 'zhangyan',
						'readNum': 14
					}
				]
			}
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