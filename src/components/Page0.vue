<template>
	<div class='page'>
		<div class="title">
			<h1>{{greetings.substr(0,8)}}</h1>
			<h2>{{greetings.substring(8)}}</h2>
		</div>
		<div class="content0">
			<template v-for = '(item,index) of content'>
				<a v-if='index === 0' :href="'mailto:'+ item">
					<div class="address">
						<i class="iconfont icon-youjian1"></i>
						<p>{{item}}</p>
					</div>
				</a>
				<a v-if='index === 1' :href='item' target="_blank">
					<div class="address">
						<i class="iconfont icon-github"></i>
						<p>{{item}}</p>
					</div>
				</a>
			</template>	
		</div>
	</div>
</template>

<script>
	import Page0 from '../../config/config'
	export default{
		name:'Page0',
		data(){
			return{
				greetings:Page0.Page0.greetings,
				content:Page0.Page0.content
			}
		}
	}

</script>


<style lang="sass">
	.content0{
		margin-top: 1.5em;
		.address{
			display: flex;
			p{
				margin-top: 0.2em;
			}	
		}
	}	
</style>
