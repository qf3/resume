<template>
	<div class="project">
		<div class="item" v-for='value of content'>
			<template v-for = '(item,index) of value'>
				<div class='projectDetail' v-if='index === 0' >
					<i class="iconfont icon-biaoqian1"></i><p>{{item}}</p>
				</div>
				<div class='projectDetail' v-if='index === 1' >
					<i class="iconfont icon-daima"></i><p>{{item}}</p>
				</div>
				<div class='projectDetail' v-if='index === 2' >
					<a :href=item target="_blank">
						<i class="iconfont icon-jinlingyingcaiwangtubiao38"></i>
						<p>{{item}}</p>
					</a>
				</div>
				<div class='projectDetail' v-if="index === 3&& item!=='none'">
					<a :href=item target="_blank" class="example">
						<i class="iconfont icon-biezhen"></i>
						<p>示例</p>
						<div class="dots">
							<i class="iconfont icon-dot-small dot1"></i>
							<i class="iconfont icon-dot-small dot2"></i>
							<i class="iconfont icon-dot-small dot3"></i>
						</div>
					</a>
				</div>
			</template>
		</div>
	</div>
</template>


<script>
	import Page3 from '../../config/config'
	export default{
		name:'Page3Project',
		data(){
			return{
				content:Page3.Page3.content
			}
		}

	}

</script>

<style lang="sass">
	.project{
		// border: 1px solid red;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		justify-content: space-around;
		align-items: center;
		width: 80vw;
		height: 60vh;
		.item{
			// border: 1px solid blue;
			flex:1 1 50%;
			// flex:0 0 45%;
			margin-bottom: 1em;
			.projectDetail{
				display: flex;
				a{
					display: flex;
					width: 100%;
				}
				p{

					margin-top: 0 ;
					margin-bottom: 0.4em;
				}
				.dots{
					position: relative;
					overflow: hidden;
					height: 1em;
					width: 2.4em;
					// animation:wait 1.5s infinite;
					.dot1{
						position: absolute;
						left: 0em;
					}
					.dot2{
						position: absolute;
						left: 0.5em;
					}
					.dot3{
						position: absolute;
						left: 1em;
					}
				}
				/* @keyframes wait{
				0% { width:0em; }
				50% { width:1.2em; }
				100% { width:2.4em; }
				} */
			}

		}
	}
	
</style>
