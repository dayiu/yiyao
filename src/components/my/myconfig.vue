<template>
	<div class="arch-t">
		<mt-header  title="医生档案">
  			<router-link to="/my" slot="left">
    			<mt-button icon="back">微信</mt-button>
  			</router-link>
  			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="archives">
			<mt-cell title="姓名" is-link style="color:#777777;">
  				<img class="a-img" src="../../img/rt.png"/>
			</mt-cell>
			<mt-cell title="姓名" is-link style="color:#777777;">
  				<span style="color: #777777">张大大</span>
			</mt-cell>
			<mt-cell title="昵称" is-link style="color:#777777;">
  				<span style="color: #777777">静雅居士</span>
			</mt-cell>
			
			
			<mt-cell title="性别" is-link style="color:#777777;" class="top">
  				<span style="color: #777777">男</span>
			</mt-cell>
			<mt-cell title="出生年月" is-link style="color:#777777;">
  				<span style="color: #777777">1989.12.12</span>
			</mt-cell>
			<mt-button size="large" class="yan">保存</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.top{
		margin-top: 1.5rem;
	}
	.arch-t{
		width: 100%;
		height: 100%;
		background-color: #f5f4f9;
	}
	.archives{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		margin-top: 2.0rem;
	}
	.er{
		background-color: #FFFFFF;
		margin-top: 2.0rem;
	}
	.a-img{
		width: 4.0rem;
		height: 4.0rem;
	}
	.yan{
		color: #FFFFFF;
		background-color: #f08c34;
		margin-top: 1.5rem;
		margin-bottom: 15.5rem;
		/*margin-left: 5%;*/
	}
</style>