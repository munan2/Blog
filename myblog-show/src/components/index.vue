<template>
	<div>
		<my-header></my-header>
	</div>
</template>
<script>
	import MyHeader from './my-header'
	export default {
		components: {
			'my-header': MyHeader
		}
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
	}
</style>