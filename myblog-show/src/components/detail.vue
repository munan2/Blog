<template>
	<div>
		<my-header></my-header>
		<div class="container">
			<div class="wrap">
				<div class="article-container">
					<div class="author-info">
						<a href="/author/12" class="author-img">
							<img :src="articleInfo.img" alt="">
						</a>
						<div class="author-word">
							<p class="author-name">{{articleInfo.name}}</p>
							<p>{{articleInfo.date}}</p>
						</div>
					</div>
					<div class="article-detail-box">
						<div v-html="articleInfo.htmlContent"></div>
					</div>
					<div class="author-other-info">
						<a href="">
							<Icon type="email"></Icon>
						</a>
						<a href="">
							<Icon type="social-github"></Icon>
						</a>
						<a href="">
							<Icon type="social-twitter"></Icon>
						</a>
					</div>
				</div>
				
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
				articleInfo: {
					'name': 'zhangyan',
					'date': '2017-12-01',
					'htmlContent': '<h1>HEHE</h1><p>这是具体的信息</p>',
					'title': '这是标题1',
					'email': '123456@qq.com',
					'github': '112',
					'img': require('../assets/logo.png')
				}
			}
		},
		methods: {
			
		}
	}
</script>
<style lang='less'>
	.article-container {
		padding: 24px;
		min-height: 600px;
		position: relative;
		.author-info {
			.author-img {
				display: inline-block;
				width: 40px;
				height: 40px;
				border-radius: 40px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.author-word {
				display: inline-block;
				vertical-align: top;
				.author-name {
					font-size: 18px;
				    font-weight: 500;
				    color: #333;
				    line-height: 18px;
				}
			}
		}
		.article-detail-box {
			h1 {
				margin: 15px 0;
			}
			p {
				word-break: break-word;
			    line-height: 2.27rem;
			    font-weight: 400;
			    font-size: 16px;
			}
		}
		.author-other-info {
			position: fixed;
			left: 200px;
			top: 250px;
			width: 30px;
			height: 100px;
			a {
				display: inline-block;
				width: 40px;
				height: 40px;
				text-align: center;
				line-height: 40px;
				border-radius: 40px;
				margin-bottom: 20px;
				background-color: #fff;
				.ivu-icon {
					line-height: 2;
					&:before {
						font-size: 20px;
					}
				}
			}
		}
	}
</style>