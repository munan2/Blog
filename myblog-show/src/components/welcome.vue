<template>
	<div class="card-container" >
		<my-card v-for="(item, key) in cardList" :cardItem = "item"></my-card>
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
				cardList: []
			}
		},
		mounted () {
			this.updataCard();
		},
		methods: {
			updataCard: function () {
				if (this.getUrl() === 'all') {
					var params = {
						flag: 0
					}
				} else {
					var params = {
						flag: 0,
						label: this.getUrl()
					}
				}
				this.$http.post('/api/getArticleByLabel', params).then(res => {
		    		this.cardList = res.data.info;
		    	}).catch(err => {
		    		console.log(err);
		    	})
			},
			getUrl: function () {
				var length = this.$route.path.split('/').length;
				return this.$route.path.split('/')[length-1];
			}
		},
		watch: {
			'$route': 'updataCard'
		}
	}
</script>