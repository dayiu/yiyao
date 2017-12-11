<template>
	<div class="ding">
		<mt-header title="设置账户">
  			<router-link to="/" slot="left" style="color: #FFFFFF;">
    			<mt-button icon="back"></mt-button>
  			</router-link>
		</mt-header>
		<div class="kuan">
			<router-link to="/myconfig">
				<div class="clearfix her" >
				<img class="left img-e" src="../../img/rt.png" />
				<div class="left">
					<p class="dian">13920484929</p>
					<p class="san">三聚药业</p>
				</div>
				<img class="right er" src="../../img/erw.png" />
			</div>
			</router-link>
			<div class="ger clearfix">
				<span class="iconfont icon-gerenxinxi left"></span>
				<span class="left xxi">个人信息</span>
				<span class="right jian">></span>
			</div>
			<router-link to="/Pay">
				<div class="ger2 clearfix">
					<span class="iconfont icon-wodeguanzhu2 left"></span>
					<span class="left xxi">我的关注</span>
					<span class="right jian">></span>
				</div>
			</router-link>
			<router-link to="/Recomm">
				<div class="ger2 clearfix"> 
					<span class="iconfont icon-ic_local_pharmacy_px left"></span>
					<span class="left xxi">推荐药店</span>
					<span class="right jian">></span>
			</div>
			</router-link>
			
			<router-link to="/Apply">
				<div class="ger clearfix" >
				<span class="iconfont icon-yaoshifuwu left"></span>
				<span class="left xxi">进药申请</span>
				<span class="right jian">></span>
			</div>
			</router-link >
			
			<div class="ger2 clearfix">
				<span class="iconfont icon-shezhi left"></span>
				<span class="left xxi">设置</span>
				<span class="right jian">></span>
			</div>
		</div>
		
		
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







	a{
		text-transform: none;
	}
	.ding{
		width: 100%;
		height: 100%;
		background-color: #f5f4f9;
	}
	.kuan{
		width: 100%;
		margin: 0 auto;
		margin-top: 2.0rem;
		/*background-color: #FFFFFF;*/
	}
	.img-e{
		width: 5.9rem;
		height: 5.9rem;
		padding-left: 1.0rem;
		padding-top: 0.5rem;
	}
	.er{
		width: 4.0rem;
		height: 4.0rem;
		padding-top: 1.5rem;
		padding-right: 1.5rem;
	}
	.dian{
		padding-top: 2.0rem;
		padding-left: 1.0rem;
		font-size: 1.4rem;
		color: #000000;
	}
	.san{
		font-size: ;
		color: #626368;
		padding-left: 1.0rem;
		padding-top: 1.0rem;
	}
	.her{
		background-color: #FFFFFF;
	}
	.ger{
		margin-top: 2.0rem;
		background-color: #FFFFFF;
		margin-bottom: 1px;
		padding-top: 1.0rem;
		padding-bottom: 1.0rem;
	}
	.ger2{
		/*margin-top: 2.0rem;*/
		background-color: #FFFFFF;
		margin-bottom: 1px;
		padding-top: 1.0rem;
		padding-bottom: 1.0rem;
	}
	.icon-gerenxinxi{
		font-size: 2.5rem;
		color:#fd7b7b ;
		margin-left: 3%;
		/*padding-top: 3.0rem;*/
	}
	.icon-shezhi{
		font-size: 2.5rem;
		color:#8fcff3 ;
		margin-left: 3%;
	}
	.icon-yaoshifuwu{
		font-size: 2.5rem;
		color:#abb1f3;
		margin-left: 3%;
	}
	.icon-ic_local_pharmacy_px{
		font-size: 2.5rem;
		color:#91d56d;
		margin-left: 3%;
	}
	.icon-wodeguanzhu2{
		font-size: 2.5rem;
		color:#ffb84e;
		margin-left: 3%;
	}
	.xxi{
		padding-top: 0.5rem;
		padding-left: 0.5rem;
		font-size: 1.5rems;
		color: #a8a8ab;
	}
	.jian{
		padding-right: 5%;
		padding-top: 0.7rem;
	}
</style>