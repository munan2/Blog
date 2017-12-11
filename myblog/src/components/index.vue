<template>
	<div class="login-container">
		<!-- <vue-particles
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
   		</vue-particles> -->
      <router-view></router-view>
	</div>
</template>
<script>
  export default {
    data() {
    }
  }
</script>
<style>
	.login-container {
		background: url('../assets/background.jpg') no-repeat;
		background-size: cover;
		height: 100vh;
		position: relative;
	}
</style>