<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	html, body {
		height: 100%;
		background-color: #f4f5f5;
	}
	.wrap {
		width: 960px;
		height: 100%;
		margin: 0 auto;
		background-color: #fff;
	}
	.container {
		margin-top: 80px;
	}
</style>
