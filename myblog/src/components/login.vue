<template>
	<div class="login-box">
		<vue-particles
		    color="#dedede"
		    :particleOpacity="0.7"
		    :particlesNumber="80"
		    shapeType="circle"
		    :particleSize="4"
		    linesColor="#dedede"
		    :linesWidth="1"
		    :lineLinked="true"
		    :lineOpacity="0.4"
		    :linesDistance="150"
		    :moveSpeed="3"
		    :hoverEffect="true"
		    hoverMode="grab"
		    :clickEffect="true"
		    clickMode="push"
		   >
   		</vue-particles>
	</div>
</template>
<script>
	export default {

	}
</script>
<style>
	.login-box {
		background: url('../assets/background.jpg') no-repeat;
		background-size: cover;
		height: 100vh;
	}
</style>