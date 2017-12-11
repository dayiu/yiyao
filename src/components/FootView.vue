<template>
	<div id="foot">
		<mt-tabbar fixed v-model="selected">
  			<mt-tab-item id="首页">
  				<router-link to='/home'>
  					<i class="iconfont icon-shouye24 wod"></i>
    					首页
    			</router-link>
  			</mt-tab-item>
  			<mt-tab-item id="讲堂">
  				<router-link to="/lect">
  					<i class="iconfont icon-jiangwutangfill wod"></i>
    				讲堂
  				</router-link>
    			
  			</mt-tab-item>
  			<mt-tab-item id="我的">
  				<router-link to="/my">
  					<i class="iconfont icon-tianjia wod"></i>
    				<i>我的</i>
  				</router-link>
    			
  			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				selected:""
			}
		}
	}
</script>

<style scoped lang="less">
.iconfont{
	display: block;
	font-size: 2.9rem;
}
.wod{
	padding-bottom: 0.5rem;
}
a{
	text-decoration: none;
	color: #626368;
}
a:hover{
	color: #2ca7d8;
}
</style>