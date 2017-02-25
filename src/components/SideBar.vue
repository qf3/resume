<template>
	<div>
		<div class="sideBar" >
			<ul  @mouseover="stretch" @mouseout="common">
			<!-- <ul @mouseover="stretch($event)"> -->
<!-- 				<li v-for = "(value,index) of tags">
					<a class="router-link-active" :href="'#/'+ index" >
						<div class="common" @mouseover="stretch($event)" @mouseout="common($event)" >{{value}}</div>
					</a class="router-link-active">
				</li> -->
				<li ><router-link to="/">
					<div class="common" >
						<i class="iconfont icon-xingming1"></i>
						{{tags[0]}}
					</div>
				</router-link></li>
				<li><router-link to="/1">
					<div class="common" >
						<i class="iconfont icon-question"></i>
						{{tags[1]}}
					</div>
				</router-link></li>
				<li><router-link to="/2">
					<div class="common" >
						<i class="iconfont icon-jishunengli"></i>
						{{tags[2]}}
					</div>
				</router-link></li>
				<li><router-link to="/3">
					<div class="common" >
						<i class="iconfont icon-xiangmu1"></i>
						{{tags[3]}}
					</div>
				</router-link></li>
				<li><router-link to="/4">
					<div class="common" >
						<i class="iconfont icon-jiaoyu2"></i>
						{{tags[4]}}
					</div>
				</router-link></li>
				<li><router-link to="/5">
					<div class="common" >
						<i class="iconfont icon-gongzuojingli1"></i>
						{{tags[5]}}
					</div>
				</router-link></li>
				<li><a href="/src/projects/resumes/Resume.pdf" target="_blank">
					<div class="common" >
						<i class="iconfont icon-pdf4"></i>
						{{tags[6]}}
					</div></a>
				</li>
			</ul>
		</div>
			<transition :name="transitionName" mode="out-in">
        		<router-view class="child"></router-view>
      		</transition>	
	</div>
</template>

<script>
	import Tags from '../../config/config'
	export default{
		name:'SideBar',
		data () {
			return {

				tags:Tags.Tag,
				transitionName: 'slide-left'
			}
		},
  		watch: {
  			'$route' (to, from) {
  				const toDepth = parseInt(to.path.substring(1))
  				const fromDepth = parseInt(from.path.substring(1))
  				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  			}
  		},
  		methods: {
  			common(event){
  				/*event.preventDefault();
  				if (event.target.className==='stretch') {
  					event.target.className='common';
  				}*/
  				if(typeof(event.target.parentNode.className)==='string'&&typeof(event.target.className)==='string'){
  					if (event.target.parentNode.className.indexOf('stretch')!=-1) {
  						event.target.parentNode.className = 'common';
  					}
  					else if(event.target.className.indexOf('stretch')!=-1){
  						event.target.className = 'common';
  					}
  				}
  			},
  			stretch(event){
  				/*event.preventDefault();
  				if (event.target.className==='common') {
  					event.target.className='stretch';
  				}*/
  				if(typeof(event.target.parentNode.className)==='string'&&typeof(event.target.className)==='string'){
  					if (event.target.parentNode.className.indexOf('common')!=-1) {
  						event.target.parentNode.className = 'stretch';
  					}
  					else if(event.target.className.indexOf('common')!=-1){
  						event.target.className = 'stretch';
  					}
  				}
  			}
		}
	}
</script>


<style lang="sass" >

.child{
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(8%, 0);
} 
 .slide-right-enter, .slide-left-leave-active{
 opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-8%, 0);
} 
.sideBar{
	z-index:100;
	height: 100vh;
	position: fixed;
	right:0;
	display:flex;
	flex-direction:column;
	justify-content: center;
	ul{
		// border:1px solid red;
		display:flex;
		flex-direction:column;
		justify-content: space-around;
		height: 50vh;
		div{
			position:relative;
			height: 1.6em;
			width: 8em;
			// text-align: center;
			background-color: rgba(0,0,0,0.3);
			border-radius:0.3em;
			display: flex;
			align-items: center;
			// justify-content: center;
			transition: all .8s ease-out;
			i{
				margin-left: 0.6em;
			}
		}
		.common{
			
			right: -5.5em;
			// right: 0em;		
		}
		.stretch{
			transform: scale(1.3,1.3);
			right: 0em;
		}
	}
}

</style>