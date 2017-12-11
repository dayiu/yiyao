<template>
	<div class="d-k">
		<mt-header fixed title="扫码购药">
		  <router-link to="/my" slot="left"> 
		    <mt-button icon="back"></mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>
		<div class="kuan">
			<div class="clearfix boot">
				<img class="left g-img" src="../../img/ys.png" />
				<div class="left">
					<p class="ming">范佳盈<span class="fu">副主任医师</span></p>
					<p class="zg">中国人民解放军第四--医院</p>
				</div>
			</div>
			<div class="jieshao clearfix">
				<div class="jie left">
					<p class="x">姓名：<span class="y">陆远飞</span></p>
					<p class="x">年龄：<span class="y">35岁</span></p>
					<p class="xx">住院时间：2015-01-06 15:22:02</p>
					<p class="xx">检查服务号：4389012</p>
				</div>
				<div class="jie-r left">
					<P class="r">性别：<span class="y">男</span></P>
					<P class="r">主治医生：<span class="y">黄柳</span></P>
				</div>
			</div>
			<div class="lun">
				<mt-swipe :auto="0">
  					<mt-swipe-item class="ime"><img class="ime" src="../../img/gy.png"></mt-swipe-item>
  					<mt-swipe-item class="ime"><img class="ime" src="../../img/gy.png"></mt-swipe-item>
  					<mt-swipe-item class="ime"><img class="ime" src="../../img/gy.png"></mt-swipe-item>
				</mt-swipe> 
			</div>
			<div class="xq">
				<p class="yp">药品详情</p>
				<p class="zg-t">药品名称：风热感冒颗粒</p>
				<p class="zg-t">批准文号：国药准字H20044623</p>
				<p class="zg-t">生产企业：桓诚帮药集团有限公司</p>
				<p class="zg-t">规格：10g*8袋</p>
				<p class="zg-tt">性状：风热感冒颗粒，疏风清热，利咽解毒。
					用于风热感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
					风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
					发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
				</p>
			</div>
			<div class="dingw">
				<span class="iconfont icon-dingwei"></span>
				<span class="d">去附近药店购买</span>
			</div>
			<div class="dingw-t">
				<span class="iconfont icon-dianhua"></span>
				<span class="d">去附近药店购买</span>
				
				
				<router-link to="/Cg">
					<button class="btt">确认</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang='less'>
	.btt{
		width: 80%;
		background-color:#ffa94c ;
		padding-top: 1.0rem;
		padding-bottom: 1.0rem;
		outline: none;
		border: none;
		margin-top: 2.0rem;
		margin-left: 5%;
		color: #FFFFFF;
	}
	.dingw{
		margin-top: 1.0rem;
		padding-left: 5%;
		background-color: #FFFFFF;
		padding-top:1.0rem;
		padding-bottom: 1.0rem;
		border-bottom: 1px solid #F5F5F5;
		.icon-dingwei{
			color: #ffa94c;
		}
	}
	.dingw-t{
		/*margin-top: 1.0rem;*/
		padding-left: 5%;
		background-color: #FFFFFF;
		padding-top:1.0rem;
		padding-bottom: 1.0rem;
		.icon-dianhua{
			color: #6dba42;
		}
	}
	.d-k{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.kuan{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		margin-top: 2.0rem;
		padding-top: 1.0rem;
		/*padding-left: 5%;*/
	}
	.boot{
		background-color: #FFFFFF;
		padding-top: 1.0rem;
		border-bottom: 1px solid #F5F5F5;
	}
	.g-img{
		width: 5.0rem;
		height: 5.0rem;
		margin-left: 5%;
	}
	.ming{
		font-size: 1.6rem;
		padding-top: 1.0rem;
		padding-left: 1.0rem;
		color: #333333;
		.fu{
			font-size: 0.5rem;
			color: #626368;
			padding-left:0.3rem;
		}
	}
	.zg{
		font-size:0.5rem ;
		color: #626368;
		padding-left: 1.0rem;
		padding-top: 1.0rem;
	}
	.zg-t{
		font-size:0.5rem ;
		color: #626368;
		/*padding-left: 1.0rem;*/
		padding-top: 1.0rem;
	}
	.zg-tt{
		font-size:0.5rem ;
		color: #626368;
		/*padding-left: 1.0rem;*/
		padding-top: 1.0rem;
		line-height: 1.5rem;
		padding-right: 5%;
	}
	.boot{
		padding-bottom: 2.0rem;
		margin-bottom: 1.0rem;
	}
	.jieshao{
		background-color: #FFFFFF;
		padding-top: 1.0rem;
		border-top: 1px solid #f5f5f5;
		padding-bottom: 2.0rem;
	}
	.jie{
		width: 55%;
		padding-left: 5%;
		.x{
			font-size:1.5rem ;
			color: #333333;
			padding-top: 1.0rem;
		}
		.xx{
			font-size: 0.5rem;
			color: #626368;
			padding-top: 1.0rem;
		}
	}
	.y{
				color: #f08c34;
			}
	.jie-r{
		width: 40%;
		.r{
			font-size:1.5rem ;
			color: #333333;
			padding-top: 1.0rem;
		}
	}
	.lun{
		margin-top: 1.0rem;
	}
	.mint-swipe{
		height: 15.0rem;
	}
	.mint-swipe-items-wrap{
		height: 15.0rem;
	}
	.mint-swipe-item {
		height: 15.0rem;
	}
	.ime{
		width: 100%;
		height: 100%;
	}
	.xq{
		width: 95%;
		margin-top: 1.0rem;
		background-color: #FFFFFF;
		padding-left: 5%;
		.yp{
			font-size:1.5rem ;
			color: #333333;
			padding-top: 1.0rem;
			/*padding-left: 5%;*/
			border-bottom: 1px solid #F5F5F5;
			padding-bottom: 1.0rem;
		}
	}
</style>