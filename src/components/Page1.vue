<template>
	<div class='page'>
		<div class="title">
			<h1>{{title}}</h1>
		</div>
		<div class="content">
			<p v-for="value of content">{{value}}</p>
		</div>
	</div>
</template>


<script>
	import Page1 from '../../config/config'
	export default{
		name:'Page1',
		data(){
			return{
				title:Page1.Page1.title,
				content:Page1.Page1.content
			}
		}
	}

</script>


<style lang="sass">
	
</style>
