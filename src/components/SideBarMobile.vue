<template>
	<div>
		<div class="sideBarMobi" >
			<i class="iconfont icon-menu1" 
				@click="toggle"
				@touchstart="startDrag"
				@touchmove="moveDrag"
				@touchend="stopDrag"
				>
				<ul class="menu" 
				:class="{active:isActive}">
				<li ><router-link to="/">
					<div class="common" >
						<i class="iconfont icon-xingming1"></i>
						
					</div>
				</router-link></li>
				<li><router-link to="/1">
					<div class="common" >
						<i class="iconfont icon-question"></i>
						
					</div>
				</router-link></li>
				<li><router-link to="/2">
					<div class="common" >
						<i class="iconfont icon-jishunengli"></i>
					</div>
				</router-link></li>
				<li><router-link to="/3">
					<div class="common" >
						<i class="iconfont icon-xiangmu1"></i>
					</div>
				</router-link></li>
				<li><router-link to="/4">
					<div class="common" >
						<i class="iconfont icon-jiaoyu2"></i>
					</div>
				</router-link></li>
				<li><router-link to="/5">
					<div class="common" >
						<i class="iconfont icon-gongzuojingli1"></i>
					</div>
				</router-link></li>
				<li><a href="/src/projects/resumes/Resume.pdf" target="_blank">
					<div class="common" >
						<i class="iconfont icon-pdf4"></i>
					</div></a>
				</li>
				<li><a href="/src/projects/resumes/Resume.docx" target="_blank">
					<div class="common" >
						<i class="iconfont icon-iconfontword"></i>
						
					</div></a>
				</li>
			</ul>	
			</i>
		</div>
			<transition :name="transitionName" mode="out-in">
        		<router-view class="child"></router-view>
      		</transition>	
	</div>
</template>

<script>

	export default{
		name:'sideBarMobi',
		data () {
			return {

				isActive:false,
				dragging:false,
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
  			toggle(event){
  				event.stopPropagation();
  				if (event.target.className.indexOf('menu')!=-1) {
  					this.isActive = !this.isActive;
  				}
  				
  			},
			startDrag(event){
				event = event.changedTouches ? event.changedTouches[0] : event
				this.dragging = true
			 // console.log(event.pageX)
			 // console.log(event.touches)
			 // console.log(event.changedTouches)
			 // console.log(event.targetTouches)
			},
			moveDrag(event){
				event = event.changedTouches ? event.changedTouches[0] : event
				if (this.dragging) {
					event.target.style.left = event.pageX + 'px'
					event.target.style.top = event.pageY + 'px'
				}
				
			},
			stopDrag(event){
				if (this.dragging) {
					this.dragging = false
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
.sideBarMobi{
	
	i{
		font-size:2rem;
		margin:0;
	}
	.icon-menu1{
		z-index: 100;
		// border: 1px solid red;
		position:absolute;
		top: 50%;
		left: 50%;
	}
	ul{
		transition: all .8s ease-out;
		li{
			position:absolute;
			
			&:nth-child(1){
				top: -1.4em;
			}
			&:nth-child(2){
				top: -1.2em;
				left:1.2em;
			}
			&:nth-child(3){
				top: 0;
				left:1.4em;
			}
			&:nth-child(4){
				top: 1.2em;
				left:1.2em;
			}
			&:nth-child(5){
				top: 1.4em;
			}
			&:nth-child(6){
				top: 1.2em;
				left:-1.2em;
			}
			&:nth-child(7){
				top: 0;
				left:-1.4em;
			}
			&:nth-child(8){
				top: -1.2em;
				left:-1.2em;
			}
		}
		
	}
	.active{
		display: none;
		// visibility: hidden;
	}
	
}

</style>