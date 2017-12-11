<template>
	<div class="ding">
		<mt-header fixed title="眼科医疗设备进口替代将">
  			<router-link to="/" slot="left" style="color: #FFFFFF;">
    			<mt-button icon="back">微信</mt-button>
  			</router-link>
  			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="kuan">
			<h1 class="yan">眼科医疗设备进口替代将提速,进口化替代步伐正在加快</h1>
			<p class="clearfix">
				<span class="left zi">发布日期：2015-12-21</span>
				<span class="right zi">阅读量：1000</span>
			</p>
			<P class="yiyao">医药网3月18日讯17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，
				其中涉及器材设备以及临床眼科等，为眼科医疗设备技术的发展起到重要作用。另外，随着电子产品的普及、
				老龄化加剧以及青少年近视等，导致相关眼疾患病率呈上升趋势，促使患者对眼科
				医疗服务的需求逐年增加。我国目前患有视力损害的大约为3亿人，其中有4500万例盲症，
				视力损害患者较多，约占68%。市场需求不断扩大将带动眼科医疗器械快速发展。
			</P>
			<p class="yiyao2">
				全球医疗器械市场规模正逐年扩大，眼科器械占比有望快速增长。据欧盟医疗器械委员会的统计
				显示，全球医疗器械市场销售总额已从2006 年的2900亿美元迅速上升至2014年的5591亿美元，
				年复合增速达8.82%。目前，美国、日本等国占据了超过80%的全球医疗器械市场。
				其中，美国是世界上最大的医疗器械生产国和消费国，其消费量占全球市场的40%左右。
			</p>
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






	.ding{
		width: 100%;
		height: 100%;
		background-color: #f5f4f9;
		.kuan{
			width: 90%;
			margin: 0 auto;
			margin-top: 3.3rem;
			background-color: #f5f4f9;
			padding-bottom:6rem;
			.yan{
				padding-top: 1.8rem;
				font-size:1.6rem ;
				color: #333333;
				padding-bottom: 1.0rem;
				line-height: 2.0rem;
				
			}
		}
	}
	.zi{
		color: #999999;
	}
	.yiyao{
		font-size:1.5rem ;
		color: #444444;
		line-height:2.0rem ;
		padding-top: 2.0rem;
		text-indent: 2.0rem;
	}
	.yiyao2{
		font-size:1.5rem ;
		color: #444444;
		line-height:2.0rem ;
		/*padding-top: 2.0rem;/*/
		text-indent: 2.0rem;
	}
</style>