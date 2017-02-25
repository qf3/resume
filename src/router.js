import VueRouter from 'vue-router'

// import Page0 from './components/Page0'
// import Page1 from './components/Page1'
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'
// import Page4 from './components/Page4'
// import Page5 from './components/Page5'

/* AMD */
// const Page0 = resolve => require(['./components/Page0'], resolve)

/* Webpack2 */
const Page0 = () => import('./components/Page0');
const Page1 = () => import('./components/Page1');
const Page2 = () => import('./components/Page2');
const Page3 = () => import('./components/Page3');
const Page4 = () => import('./components/Page4');
const Page5 = () => import('./components/Page5');

/* Group components in the same nested route */
// const Bar = r => require.ensure([], () => r(require('./Bar.vue')), '/bar')
// const Baz = r => require.ensure([], () => r(require('./Baz.vue')), '/bar')

export const router = new VueRouter({
	// mode: 'history',//history.pushState API 
	routes:[

		{path:'/',component:Page0},
		{path:'/1',component:Page1},
		{path:'/2',component:Page2},
		{path:'/3',component:Page3},
		{path:'/4',component:Page4},
		{path:'/5',component:Page5}
	]
})