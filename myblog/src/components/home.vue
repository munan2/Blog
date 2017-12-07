<template>
	<div id="home-box">
		<my-slider :userInfo="getUserinfo"></my-slider>
		<div class="content-box">
			<my-header :userInfo = "getUserinfo"></my-header>
			<router-view></router-view>
	    </div>
	</div>
</template>
<script>
	import Slider from './slider'
	import MyHeader from './my-header'
	export default {
		components: {
			'my-slider': Slider,
			'my-header': MyHeader
		},
		data () {
			return {
				getUserinfo: ''
			}
		},
		mounted () {
	        let name = this.$route.query.name;
	        if (name) {
	            this.$http.post('/getUser', {
	                name: name
	            }).then(function (res) {
	                this.getUserinfo = res.data.info[0];
	            }).catch(function (err) {
	            	console.log(err);
	            })
	        }
	        console.log(this.getUserinfo);
	    }
	}
</script>
<style>
	#home-box {
		height: 100%;
	}
	.content-box {
		margin-left: 230px;
		height: 100%;
	}
</style>