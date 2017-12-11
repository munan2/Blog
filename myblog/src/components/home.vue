<template>
	<div id="home-box">
		<my-slider></my-slider>
		<div class="content-box">
			<my-header></my-header>
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
				getUserinfo: {}
			}
		},
		mounted () {
	   //      let name = this.$route.query.name;
	   //      if (name) {
	   //          this.$http.post('/getUser', {
	   //              name: name
	   //          }).then(function (res) {
	   //              this.getUserinfo = res.data.info[0];
	   //          }).catch(function (err) {
	   //          	console.log(err);
	   //          })
	   //      }
	   //      setTimeout(() => {
				// this.getUserinfo = {
		  //       	_id: "5a29f600700d2257035b0617",
		  //       	name: "zhaifu",
		  //       	pass: "12345",
		  //       	flag: 0, __v: 0
		  //       }
	   //      }, 100)
	    },
	    watch: {
	    	// 'getUserinfo': function (cul, old) {
	    	// 	this.getUserinfo = cul;
	    	// 	console.log(this.getUserinfo);
	    	// }
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