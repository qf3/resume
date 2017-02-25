<template>
	<div class="page">
		<div class="title">
			<h1>{{title}}</h1>
		</div>
		<Page3Project></Page3Project>
	</div>
</template>

<script>
	import Page3 from '../../config/config'
	import Page3Project from './Page3_project.vue'
	export default{
		name:'Page3',
		data(){
			return{
				title:Page3.Page3.title,
			}
		},
		components: {Page3Project}
	}
</script>

<style>
	
</style>