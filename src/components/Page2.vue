<template>
	<div class='page'>
		<div class="title">
			<h1>{{title}}</h1>
		</div>
			<div id='tagCloud'>
			<a v-for="(value,index) of content" :key="index" :href="tech + value +'%20in%3Areadme'" target="_blank"><i class="iconfont icon-jishunengli"></i>{{value}}</a>
			</div>
	</div>
</template>


<script>
	import Page2 from '../../config/config'
	import TagCloud from '../tagCloud'
	export default{
		name:'Page2',
		data(){
			return{
				title:Page2.Page2.title,
				content:Page2.Page2.content,
				tech:'https://github.com/qf3?tab=repositories&q='
			}
		},
  		mounted: function(){
  			let h = window.screen.height;
  			let w = window.screen.width;
  			if (w>h) {
  				new TagCloud("tagCloud",{radius:h/3.5}).start();
  				
  			}else{
  				new TagCloud("tagCloud",{radius:w/3.5}).start();
  			}
			 
		}

  	}

</script>


<style lang="sass">

 	#tagCloud {
 		
 		/* border: 1px solid red; */ 
		position:relative; 
 		height:70%; 
 		width: 50%;
		a {
			position:absolute;
			top:0; 
			left:0;  
			cursor: pointer;
		}
	}
	 
</style>

