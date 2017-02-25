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
	import Page4 from '../../config/config'
	export default{
		name:'Page4',
		data(){
			return{
				title:Page4.Page4.title,
				time:Page4.Page4.content.first[0],
				others:Page4.Page4.content.first.slice(1)
			}
		}
	}

</script>


<style>

</style>
