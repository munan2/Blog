<template>
	<div>
		<my-header></my-header>
		<div class="container">
			<div class="wrap">
				<div class="article-container">
					<div class="author-info">
						<a href="javascript:;" class="author-img" @click="enterAuthor">
							<img :src="userInfo.pic" alt="">
						</a>
						<div class="author-word">
							<p class="author-name">{{articleInfo.name}}</p>
							<p>{{articleInfo.date}}</p>
						</div>
					</div>
					<div class="article-detail-box">
						<div v-html="articleInfo.htmlContent"></div>
					</div>
					<!-- <div class="author-other-info">
						<a href="">
							<Icon type="email"></Icon>
						</a>
						<a href="javascript:;">
							<Icon type="social-github"></Icon>
						</a>
						<a href="">
							<Icon type="social-twitter"></Icon>
						</a>
					</div> -->
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
				articleInfo: {},
				userInfo: {}
			}
		},
		mounted () {
			this.getAritileInfo();
		},
		methods: {
			enterAuthor: function () {
				this.$router.push({path: '/author/'+ this.userInfo._id});
			},
			getUrl: function () {
				var length = this.$route.path.split('/').length;
				return this.$route.path.split('/')[length-1];
			},
			getAritileInfo: function () {
				this.$http.post('/api/getOneArticle', {
					id: this.getUrl()
				}).then(function (res) {
					this.articleInfo = res.data.info[0];
					this.$http.post('/api/getUser', {
						name: this.articleInfo.name
					}).then(function (res) {
						this.userInfo = res.data.info[0];
					}).catch(function (err) {
						console.log(err);
					})
				}).catch(function (err) {
					console.log(err);
				})
			}
		},
		watch: {
			'$route': 'getAritileInfo'
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
				font-size: 30px;
			}
			h2 {
				font-size: 26px;
			}
			h3 {
				font-size: 24px;
			}
			h4 {
				font-size: 20px;
			}
			h2, h3, h4, h5, h6 {
				margin: 10px 0;
			}
			p, ul, li {
				word-break: break-word;
			    font-weight: 400;
			    font-size: 16px;
			    font-family: -apple-system,PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica Neue,sans-serif;
			}
			li {
				list-style: disc;
			}
			ul, ol {
				margin-left: 20px;
			}
			pre {
				background-color: #f8f8f8;
				padding: 10px 0;
				overflow-x: scroll;
				code {
					font-family: Menlo,Monaco,Consolas,Courier New,monospace;
				    font-size: 14px;
				    padding: 10px 0;
				    word-break: break-word;
				    color: #4e5980;
				    border-radius: 2px;
				    overflow-x: auto;
				}
			}
			p {
				padding: 5px 0;
			}
			img {
				width: 100%;
			}
			table {
				width: 100%;
			    margin-bottom: 20px;
			    border: 1px solid #ddd;
			    border-collapse: collapse;
			    border-left: none;
			    word-break: normal;
			    tr {
			    	padding: 8px;
				    border: 1px solid #ddd;
				    line-height: 20px;
				    vertical-align: middle;
			    }
			    th {
			    	padding: 8px;
				    border: 1px solid #ddd;
				    line-height: 20px;
				    vertical-align: middle;
			    }
			    td {
			    	padding: 8px;
				    border: 1px solid #ddd;
				    line-height: 20px;
				    vertical-align: middle;
			    }
			    thead {
				    display: table-header-group;
				    vertical-align: middle;
				    border-color: inherit;
				}
			}

		}
		.author-other-info {
			position: absolute;
			left: -70px;
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