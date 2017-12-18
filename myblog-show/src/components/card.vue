<template>
	<div class="card-box" @click="seeDetail">
		<h2 class="card-title">{{cardItem.title}}</h2>
		<div class="card-content">
			<span class="card-tag">{{cardItem.label}}</span>
			<span class="author-name">{{cardItem.name}}</span>
			<span><span>{{cardItem.readNum}}</span>次阅读</span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['cardItem'],
		data () {
			return {

			}
		},
		methods: {
			seeDetail: function () {
				
			}
		}
	}
</script>
<style scoped lang='less'>
	.card-box {
		height: 78px;
		padding: 10px 24px;
		border-bottom: 1px solid #f6f6f6;
		&:hover {
			background-color: #fbfbfb;
		}
		.card-title {
			font-size: 18px;
			color: #2e3135;
		}
		.card-content {
			margin-top: 5px;
			color: #909090;
			.card-tag {
				padding: 2px 8px;
				background-color: #abbb79;
				color: #fff;
				border-radius: 2px;
				margin-right: 10px;
			}
			.author-name {
				margin-right: 10px;
			}
		}
	}
</style>