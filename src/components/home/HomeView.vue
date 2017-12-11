<template>
	<div>
		<mt-header fixed title="销售记录">
  			<mt-button  slot="right" class="jia">+</mt-button>
		</mt-header>
		<div class="content">
			<mt-swipe :auto="0">
  				<mt-swipe-item class="ime"><img class="ime" src="../../img/lun.jpg"></mt-swipe-item>
  				<mt-swipe-item class="ime"><img class="ime" src="../../img/lun.jpg"></mt-swipe-item>
  				<mt-swipe-item class="ime"><img class="ime" src="../../img/lun.jpg"></mt-swipe-item>
			</mt-swipe>
			<div class="back">
				<mt-navbar v-model="selected" class="top-t">
  					<mt-tab-item id="1" v-show="true">本周</mt-tab-item>
  					<mt-tab-item id="2">历史</mt-tab-item>
				</mt-navbar>

<!-- tab-container -->
				<mt-tab-container v-model="selected" class="top">
	  				<mt-tab-container-item id="1" v-show="true">
	    				<div class="kuan">
	    					<ul class="cont">
	    						<li class="clearfix">
	    							<img class="oo left" src="../../img/yao.png"/>
	    							<div class="left ll">
	    								<p>
	    									<span class="zhou">
	    										周四
	    									</span>
	    									<span class="yue">
	    										2015.6.23
	    									</span>
	    								</p>
	    								<p class="jin"></p>
	    							</div>
	    					<div class="right">
	    						<span class="hezi">30盒 </span>
	    						<span class="jiant"> ></span>
	    					</div>
	    				</li>
	    				<li class="clearfix">
	    					<img class="oo left " src="../../img/yao2.png"/>
	    					<div class="left ll">
	    						<p>
	    							<span class="zhou">
	    								周三
	    							</span>
	    							<span class="yue">
	    								2015.6.22
	    							</span>
	    						</p>
	    						<p class="hiu"></p>
	    					</div>
	    					<div class="right">
	    						<span class="hezi-2">65盒  </span>
	    						<span class="jiant"> ></span>
	    					</div>
	    				</li>
	    				<li class="clearfix">
	    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周二
		    							</span>
		    							<span class="yue">
		    								2015.6.21
		    							</span>
		    						</p>
		    						<p class="hiu1"></p>
		    					</div>
	    					<div class="right">
	    						<span class="hezi-2">58盒 </span>
	    						<span class="jiant"> ></span>
	    					</div>
	    				</li>
	    				<li class="clearfix">
	    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周一
		    							</span>
		    							<span class="yue">
		    								2015.6.20
		    							</span>
		    						</p>
		    						<p class="hiu2"></p>
		    					</div>
	    					<div class="right">
	    						<span class="hezi-2">87盒 </span>
	    						<span class="jiant"> ></span>
	    					</div>
	    				</li>
	    			</ul>
	    			</div>
	  			</mt-tab-container-item>
	  			<mt-tab-container-item id="2" class="ttt">
	    			<!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
	    			<div class="kuan">
	    				<ul class="cont">
		    				<li class="clearfix">
		    					<img class="oo left " src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周日
		    							</span>
		    							<span class="yue">
		    								2015.6.22
		    							</span>
		    						</p>
		    						<p class="hiu"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">65盒  </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
		    				<li class="clearfix">
		    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周六
		    							</span>
		    							<span class="yue">
		    								2015.6.21
		    							</span>
		    						</p>
		    						<p class="hiu1"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">58盒 </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
		    				<li class="clearfix">
		    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周五
		    							</span>
		    							<span class="yue">
		    								2015.6.20
		    							</span>
		    						</p>
		    						<p class="hiu2"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">87盒 </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
		    				<li class="clearfix">
		    					<img class="oo left " src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周四
		    							</span>
		    							<span class="yue">
		    								2015.6.22
		    							</span>
		    						</p>
		    						<p class="hiu"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">65盒  </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
		    				<li class="clearfix">
		    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周三
		    							</span>
		    							<span class="yue">
		    								2015.6.21
		    							</span>
		    						</p>
		    						<p class="hiu1"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">58盒 </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
		    				<li class="clearfix dddd">
		    					<img class="oo left" src="../../img/yao2.png"/>
		    					<div class="left ll">
		    						<p>
		    							<span class="zhou">
		    								周二
		    							</span>
		    							<span class="yue">
		    								2015.6.20
		    							</span>
		    						</p>
		    						<p class="hiu2"></p>
		    					</div>
		    					<div class="right">
		    						<span class="hezi-2">87盒 </span>
		    						<span class="jiant"> ></span>
		    					</div>
		    				</li>
	    					</ul>
	    				</div>
	  				</mt-tab-container-item>
				</mt-tab-container>
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
//	export default {
//		data(){
//			return {
//				selected:""
//			}
//		}
//	}
//	import "../css/home.css"
export default {
	data(){
		return{
			selected:""
		}
	}
}

</script>
	
<style>
	.jia{
		font-weight: bold;
	}
	.mint-swipe-items-wrap{
		margin-top: 3.3rem;
		min-height:12rem;
	}
	.mint-swipe-items-wrap img{
		width: 100%;
		height: 100%;
	}
	.ime{
		height: 12rem;
	}
	.mint-tab-container-wrap{
		height: 300px;
	}
	/*mint-swipe-items-wrap*/
	.mint-tab-container-item{
		display: block;
	}
	/*.mint-swipe{
		overflow: auto;
	}
	.mint-swipe-items-wrap{
		overflow: auto;
	}*/
	.kuan{
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
	}
	.cont{
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
	}
	.cont li{
		list-style: none;
		border-bottom: 1px solid #F5F5F5;
	}
	.cont li{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.ll{
		padding-left: 1.0rem;
	}
	.oo{
		width: 3.0rem;
		height: 3.0rem;
	}
	.top-t{
		border-bottom: 1px solid #e1e1e1;
	}
	.back{
		background-color: #f5f5f5;
	}
	.jin{
		width: 5rem;
		height: 0.7rem;
		background-color: #ff6b3d;
		border-radius: 5px;
		margin-top: 1.0rem;
	}
	.zhou{
		font-size: 1.5rem;
		color: #333333;
	}
	.yue{
		font-size: 0.7rem;
		color: #666666;
		padding-left: 0.5rem;
	}
	.hiu{
		width: 10rem;
		height: 0.7rem;
		background-color: #cdcdcd;
		border-radius: 5px;
		margin-top: 1.0rem;
	}
	.hiu1{
		width: 8rem;
		height: 0.7rem;
		background-color: #cdcdcd;
		border-radius: 5px;
		margin-top: 1.0rem;
	}
	.hiu2{
		width: 12rem;
		height: 0.7rem;
		background-color: #cdcdcd;
		border-radius: 5px;
		margin-top: 1.0rem;
	}
	.hezi{
		display: inline-block;
		color: #f08c34;
		font-size: 1.2rem;
		padding-top: 1.0rem;
	}
	.jiantou{
		color: #cacaca;
	}
	.hezi-2{
		display: inline-block;
		color: #666666;
		font-size: 1.2rem;
		padding-top: 1.0rem;
	}
	.content{
		margin-bottom: 100px;
	}
	/*.ttt{
		margin-bottom: 300px;
	}*/
	
	
	
	
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