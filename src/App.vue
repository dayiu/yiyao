<template>
  <div id="app">
   	<router-view></router-view>
  </div>
</template>

<script>
	
import { Swipe, SwipeItem ,Navbar, TabItem,Cell } from 'mint-ui'
//import FootView from './components/FootView';

export default {
  name: 'app',
  components:{
//	FootView
  }
}

</script>
<style>
	#app{
		width: 100%;
		height: 100%;
		/*overflow: hidden;*/
	}
</style>