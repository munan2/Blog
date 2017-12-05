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