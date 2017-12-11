<template>
	<div>
		<mt-header title="账户设置">
		  <router-link to="/my" slot="left"> 
		    <mt-button icon="back">微信</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="kuan">
			<img class="k-img" src="../../img/erwm.png" />
			<p>邀请码：2345</p>
			<p class="dizhi">
				<span class="iconfont icon-dingwei1"></span>
				推荐地址
			</p>
			<a class="aa" href="">http://123.56.102.141/hlc/webapp/index</a>
			<input class="inp" type="button" value="推荐" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.kuan{
		width: 100%;
		height: 100%;
		background-color:#f5f4f9 ;
		/*margin-top: 3.5rem;*/
		text-align: center;
		/*margin-bottom: 4.0rem;*/
	}
	.k-img{
		width:15rem ; 
		height: 15rem;
		margin-top: 3.0rem;
		margin-bottom: 1.0rem;
	}
	.dizhi{
		text-align: left;
		display:block;
		padding-left: 10%;
		padding-top: 2.0rem;
	}
	.aa{
		width: 80%;
		display: block;
		color: #118df0;
		padding-top: 1.0rem;
		padding-bottom: 1.0rem;
		/*padding-right: 2.0rem;*/
		border: 1px solid #dcdcdc;
		background-color: #eeeeee;
		margin-left: 10%;
		margin-top: 1.0rem;
	}
	.inp{
		width: 80%;
		padding-top:1.0rem;
		padding-bottom: 1.0rem;
		background-color: #f08c34;
		/*padding-right: 2.0rem;*/
		color: #FFFFFF;
		outline: none;
		border: none;
		margin-top: 2.0rem;
		margin-bottom: 10.8rem;
	}
</style>