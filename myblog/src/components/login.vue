<template>
	<div>
		<Form :model="formLeft" label-position="left" :label-width="100">
	        <FormItem label="Title">
	            <Input v-model="formLeft.input1"></Input>
	        </FormItem>
	        <FormItem label="Title name">
	            <Input v-model="formLeft.input2"></Input>
	        </FormItem>
	        <FormItem label="Aligned title">
	            <Input v-model="formLeft.input3"></Input>
	        </FormItem>
	    </Form>
	</div>
</template>
<script>
	export default {

	}
</script>
<style>
	
</style>