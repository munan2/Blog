<template>
	<div id="home-box">
		<my-slider :userinfo="userinfo"></my-slider>
		<div class="content-box">
			<my-header :userInfo = "userinfo"></my-header>
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
				userinfo: ''
			}
		},
		mounted () {
	        let name = this.$route.query.name;
	        if (name) {
	            this.$http.post('/getUser', {
	                name: name
	            }).then(function (res) {
	                this.userinfo = res.data.info[0];
	            }).catch(function (err) {
	            	console.log(err);
	            })
	        }
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