<template>
	<div class='page'>
		<div class="title">
			<h1>{{title}}</h1>
		</div>
		<div class="content56">
			<p>{{time}}</p>
			<div class="others" >
				<p v-for = 'value in others'>{{value}}</p>
			</div>
		</div>
	</div>
</template>


<script>
	import Page5 from '../../config/config'
	export default{
		name:'Page5',
		data(){
			return{
				title:Page5.Page5.title,
				time:Page5.Page5.content.first[0],
				others:Page5.Page5.content.first.slice(1)
			}
		}
	}

</script>


<style lang="sass">
	
</style>
