<template>
	<div class="kuan" id='app'>
		<mt-header fixed title="进药申请">
		  <router-link to="/my" slot="left"> 
		    <mt-button icon="back">微信</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="buoo">
			<div class="apply">
				<div class="clearfix ">  
					<img class="left app-img" src="../../img/yiyao.png" />
					<div>
						<p class="by">白云山伤风感冒胶囊</p>
						<p class="gm">购买时间：2015-12-15<sapn class="right ll">两个疗程</sapn></p>
						<p class="yi">药品疗程：
							<input type="button" value="-"><input class="te" type="text" value="0" /><input type="button" value="+" />
						</p>
					</div>
				</div>
				<div class="zj clearfix">
					<span class="left">总价：<span class="yuan">￥800.45</span></span>
					<router-link to="/Gy">
						<input class="right bu" type="button" value="确认" />
					</router-link>
				</div>
			</div>
			<div class="apply clearfix">
				<div class="clearfix ">
					<img class="left app-img" src="../../img/yiyao.png" />
					<div>
						<p class="by">白云山伤风感冒胶囊</p>
						<p class="gm">购买时间：2015-12-15<sapn class="right ll">两个疗程</sapn></p>
						<p class="yi">药品疗程：
							<input type="button" value="-"><input class="te" type="text" value="2" /><input type="button" value="+" />
						</p>
					</div>
				</div>
				<div class="zj clearfix">
					<span class="left">总价：<span class="yuan">￥800.45</span></span>
					<input class="right bu" type="button" value="确认" />
				</div>
			</div>
			<div class="apply clearfix">
				<div class="clearfix ">
					<img class="left app-img" src="../../img/yiyao.png" />
					<div>
						<p class="by">白云山伤风感冒胶囊</p>
						<p class="gm">购买时间：2015-12-15<sapn class="right ll">两个疗程</sapn></p>
						<p class="yi">药品疗程：
							<input type="button" value="-"><input class="te" type="text" value="2" /><input type="button" value="+" />
						</p>
					</div>
				</div>
				<div class="zj clearfix sss">
					<span class="left">总价：<span class="yuan">￥800.45</span></span>
					<input class="right bu" type="button" value="确认" />
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
//	new Vue({
//		el:"#app",
//		data:{
//			img:0
//		}
//	})
</script>

<style scoped lang="less">
	.kuan{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		background-color: #f5f4f9;
	}
	.apply{
		background-color: #FFFFFF;
		margin-top: 2.0rem;
		padding-top: 1.0rem;
	}
	.app-img{
		width:8.0rem ;
		height: 6.0rem;
		margin-left: 5%;
		margin-right: 1.0rem;
	}
	.by{
		font-size:1.5rem ;
		color: #333333;
		line-height: 1.8rem;	
	}
	.gm{
		font-size: 0.5rem;
		color: #626368;
	}
	.ll{
		margin-right: 5%;
	}
	.yi{
		font-size:0.5rem ;
		color: #999999;
		padding-top: 1.0rem;
	}
	.te{
		width: 2.0rem;
		outline: none;
		border-left: none;
		border-right: none;
		/*border: none;*/
		text-indent: 0.5rem;
	}
	.zj{
		padding-left: 5%;
		border-top: 1px solid #e1e1e1;
		margin-top: 1.0rem;
		padding-top: 1.0rem;
		padding-bottom: 1.0rem;
	}
	.bu{
		/*padding: 0.5rem;*/
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin-right: 5%;
		border-radius: 15px;
		background-color: #ff6b3d;
		border: none;
		outline: none;
		color: #FFFFFF;
	}
	.yuan{
		color:#ff6b3d ;
		font-size: 1.0rem;
	}
	.buoo{
		margin-bottom: 100px;
		margin-top: 4.0rem;
	}
	.sss{
		/*margin-bottom: 6.0rem;*/
	}
</style>