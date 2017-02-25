import Vue from 'vue'
import VueRouter from 'vue-router'

import {router} from './router'
import SideBar from './components/SideBar'
import LoadCheck from './components/LoadCheck'

import 'normalize.css'


Vue.use(VueRouter)

// new Vue({
// 	router,
// 	template:'<SideBar/>',
// 	components:{SideBar}

// }).$mount('#app')

new Vue({
	router,
	template:"<LoadCheck :status=time :isMobile=mobi />",
	data(){
			return{
				time:0,
				mobi:false
			}
		},
		mounted:function(){
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
			{
				this.mobi=true;	
			}
			import('../public/css/global.scss')
			.then(()=>{
				import ('../public/icons/iconfont.css')
			})
			.then(()=>{
				setInterval(()=>{
					if (this.time<=5) {
						this.time += 1
					}
				},1000)

			})
		},
	components:{LoadCheck}
}).$mount('#app')

/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
{
	import ('./css/main-mobile.scss');
 	import('./js/motion-mobile.js')
}else{
	import( './css/main.scss');
 	import('./js/motion.js');
}*/