<template>
	<div class="pay-k">
		<mt-header  title="我的关注">
			  <router-link to="/my" slot="left">
			    <mt-button icon="back">微信</mt-button>
			  </router-link>
  				<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="kuan">
			<div class="lrb clearfix">
				<img class="img-tt left" src="../../img/f-1.png" />
				<div class="right rit clearfix">
					<p class="lao">老吃太饱真会撑出十种甲方姜</p>
					<p class="l-j">老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...<span class="right">2015.05.01</span></p>
				</div>
			</div>
			<div class="lrb clearfix">
				<img class="img-tt left" src="../../img/f-2.png" />
				<div class="right rit clearfix">
					<p class="lao">老吃太饱真会撑出十种甲方姜</p>
					<p class="l-j">老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...<span class="right">2015.05.01</span></p>
				</div>
			</div>
			<div class="lrb clearfix">
				<img class="img-tt left" src="../../img/f-3.png" />
				<div class="right rit clearfix">
					<p class="lao">老吃太饱真会撑出十种甲方姜</p>
					<p class="l-j">老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...<span class="right">2015.05.01</span></p>
				</div>
			</div>
			<div class="lrb clearfix tttt">
				<img class="img-tt left" src="../../img/f-4.png" />
				<div class="right rit clearfix">
					<p class="lao">老吃太饱真会撑出十种甲方姜</p>
					<p class="l-j">老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...<span class="right">2015.05.01</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.pay-k{
		width: 100%;
		height: 100%;
		background-color: #f5f4f9;
	}
	.kuan{
		width: 100%;
		height: 100%;
		/*margin-bottom: 10rem;*/
	}
	.img-tt{
		width: 20%;
		height: 4.2rem;
	}
	.rit{
		width: 75%;
		padding-left: 1.0rem;
	}
	.lrb{
		padding-top: 1.0rem;
		padding-left: 1.0rem;
		padding-right: 1.0rem;
		padding-bottom: 1.0rem;
		background-color: #FFFFFF;
		margin-top: 1.5rem;
	}
	.lao{
		color: #333333;
		font-size: 1.3rem;
		line-height: 1.8rem;
	}
	.l-j{
		color:#626368 ;
		font-size: 0.8rem;
		line-height: 1.5rem;
	}
	.tttt{
		margin-bottom: 11.0rem;
	}
</style>