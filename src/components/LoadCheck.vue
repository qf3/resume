<template>	
	<div v-if='status<=5'>
		<div class="loadCheck">
			<div class="row">
				<div class="load">
					<h1>载入中</h1>
					<div class="dots">
						<div class="dot1"></div>
						<div class="dot2"></div>
						<div class="dot3"></div>
					</div>
				</div>
				<div class="progress">
					<div class="progressBar" :style="{width:status*20+'%'}"></div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<div v-if='isMobile===true'>
			<SideBarMobile></SideBarMobile>
		</div>
		<div v-else>
			<SideBar></SideBar>
		</div>
	</div>	
</template>


<script>
	import SideBar from './SideBar.vue'
	import SideBarMobile from './SideBarMobile'
	export default{
		name:'LoadCheck',
		props:['status','isMobile'],
		components: {SideBar,SideBarMobile}
	}

</script>


<style lang="sass">
	.loadCheck{
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		// justify-content: center;
		align-items: center;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		background-color: rgb(34,34,34);
		color: rgb(221,221,221);
		.row{
			// border:1px solid red;
			display: flex;
			flex-direction:column;
			justify-content: center;
			align-items: center;
			width: 100%;
			.load{
				display: flex;
				align-items:center;
				// border:1px solid red;
				h1{
					margin-top: 0;
				}
				.dots{
					display: flex;
					@mixin dot($index:0){
						// margin-top: 1em;
						margin-left: 0.3em;
						width: 0.7em;
						height: 0.7em;
						line-height: 1em;
						border-radius:50%;
						animation:sparkle#{$index+1} 3s 0.5*$index+s infinite;
					}
					@mixin dotAnimation{
						0%{background-color: rgb(34,34,34);}
						50%{background-color: rgb(221,221,221);}
						100%{background-color: rgb(34,34,34);}
					}
					@for $i from 0 through 2{
						.dot#{$i+1}{
							@include dot($i);
							/* margin-top: 1em;
							margin-left: 0.3em;
							width: 0.7em;
							height: 0.7em;
							line-height: 1em;
							border-radius:50%;
							animation:sparkle#{$i+1} 3s 0.5*$i+s infinite; */
						}
						@keyframes sparkle#{$i+1}{
							@include dotAnimation;
							// 100%{background-color: rgb(34,34,34);}
						}
					}
				}
			}
			.progress{
				margin-left: 0.8em;
				display: flex;
				border:1px solid rgb(221,221,221);
				height: 1.5em;
				border-radius:0.5em;
				width: 50%;
				// justify-content: space-around;
				align-items:flex-end;
				.progressBar{
					height: 1.5em;
					border-radius:0.3em;
					background-color: rgb(221,221,221);
					transition: width 1s linear;
				}
			}
		}
	}

</style>
