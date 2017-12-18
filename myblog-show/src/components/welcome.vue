<template>
	<div class="card-container" >
		<my-card v-for="item in cardList" :cardItem = "item"></my-card>
	</div>
</template>
<script>
	import MyCard from './card'
	export default {
		components: {
			'my-card': MyCard
		},
		data () {
			return {
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