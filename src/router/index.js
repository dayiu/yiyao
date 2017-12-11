import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/home/HomeView'
import Lect from '../components/Lecture/lect'
import My from '../components/my/my'
import Myconfig from '../components/my/myconfig'
import Pay from '../components/my/pay'
import Recomm from '../components/my/recommend'
import Apply from '../components/my/Apply'
import Gy from '../components/my/gy'
import Cg from '../components/my/cg'
import '../css/home.css'



Vue.use(Router)

export default new Router({
	routes: [
    	{
      		path: '/',
      		name: 'HomeView',
      		component: HomeView
    	},
    	{
      		path: '/home',
      		name: 'HomeView',
      		component: HomeView
    	},
    	{
      		path: '/lect',
      		name: 'Lect',
      		component: Lect
    	},
    	{
      		path: '/my',
      		name: 'My',
      		component: My
    	},
    	{
      		path: '/myconfig',
      		name: 'Myconfig',
      		component: Myconfig
    	},
    	{
    		path:'/Pay',
    		name:'Pay',
    		component:Pay
    	},
    	{
    		path:'/Recomm',
    		name:'Recomm',
    		component:Recomm
    	},
    	{
    		path:'/Apply',
    		name:'Apply',
    		component:Apply
    	},
    	{
    		path:'/Gy',
    		name:'Gy',
    		component:Gy
    	},
    	{
    		path:'/Cg',
    		name:'Cg',
    		component:Cg
    	}
	]
})
