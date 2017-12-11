<template>
	<div class="ddd">
		<mt-header fixed title="购买成功">
		  <router-link to="/my" slot="left"> 
		    <mt-button icon="back">微信</mt-button>
		    <!--<mt-button @click="handleClose">关闭</mt-button>-->
		  </router-link>
		  <!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>
		<div class="kuan">
			<p class="iconfont icon-goumaichenggong"></p>
			<P>购买成功</P>
			<button class="but">分享</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.kuan{
		width: 100%;
		height: 100%;
		margin-top: 3.5rem;
		text-align: center;
		padding-top: 4.0rem;
		.icon-goumaichenggong{
			font-size: 10.0rem;
			color: #5bca6c;
		}
		.but{
			width: 80%;
			background-color: #f08c34;
			color: #FFFFFF;
			border: none;
			outline: none;
			margin-top: 2.0rem;
			padding-top: 1.0rem;
			padding-bottom: 1.0rem;
			background-size: cover;
		}
	}
	.ddd{
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}
</style>