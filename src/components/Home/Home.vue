<template>
<div id="home">
	<!-- 左侧 start -->
	<div class="vue_left">
		<div class="vue_home">FA</div>
		<div class="vue_ul">
			<ul>
				<li @click="selectNavBar(img,index)" v-for="(img,index) in navBarTab" :key="index">
					<img :src="qwerqwre==index?img.activeImg:img.cimg"  alt="img.alt">
					<!-- <img :src="img.cimg"  alt="img.alt"> -->
				</li>
			</ul>
		</div>
		<div class="vue_help">
			<img src="./image/help.png" height="16" width="16" alt="">
			<img src="./image/jianpan.png" height="16" width="16" alt="">
			<img src="./image/cbgs.png" height="30" width="33" alt="">
		</div>
	</div>
	<!-- 左侧 end -->
	<!-- 中间 start -->
	<div class="vue_content">
		<div class="vue_header">
			<h2>farm</h2>
			<i class="vue_more">
			<!-- ••• -->
			<img src="./image/gengduo.png" height="28" width="28" alt="">
			</i>
		</div>
		<div class="vue_tab">
			<!-- 会话 start -->
			<session v-show="qwerqwre==0"></session>
			<!-- 会话 end -->
			<!-- 通讯录 start -->
			<mail-list v-show="qwerqwre==1"></mail-list>
			<!-- 通讯录 end -->
			<!-- 文件 start -->
			<file v-show="qwerqwre==2"></file>
			<!-- 文件 end -->
			<!-- 收藏 start -->
			<collection v-show="qwerqwre==3"></collection>
			<!-- 收藏 end -->
			<!-- 提到我的消息 start -->
			<my-news v-show="qwerqwre==4"></my-news>
			<!-- 提到我的消息 end -->
			<!-- search start -->
			<search v-show="qwerqwre==5"></search>
			<!-- search end -->
		</div>
	</div>
	<!-- 中间 end -->
	<!-- 右侧 start -->
	<div class="vue_right">
		<!-- 头部 start -->
		<div class="vue_right_header">
			<div class="vue_right_left">
				<i><img src="./image/#.png" height="30" width="30" alt=""></i>
				<div class="vue_title">
					<p>所有人</p>
					<p><img src="./image/all.png" height="13" width="96" alt=""></p>
				</div>
				
			</div>
			<div class="vue_right_right">
				<img src="./image/xiaoxi.png" height="19" width="19" alt="">
				<img src="./image/seting.png" height="19" width="19" alt="">
			</div>
		</div>
		<!-- 头部 end -->
		<!-- 中间 start -->
		<div class="vue_right_content">
			<ul>
				<li>
					<img src="./image/contentC.png" height="28" width="28" alt="">
					<div class="contet_right">
						<p><i>nikeName</i><span>@nikeName</span></p>
						<div class="content">
							<div>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
							<span class="time">12-18</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 中间 end -->
		<!-- 底部 start -->
		<div class="vue_right_bottom">
			<!-- 表情 start -->
			<div class="vue_bottom_expression">
				<div class="join">
					<img src="./image/笑脸.png" height="18" width="18" alt="">
					<img src="./image/xiaolian.png" height="18" width="18" alt="">
					
				</div>
				
				<div class="vue_yun">
					<ul>
						<li><img src="./image/yun.png" height="18" width="18" alt=""></li>
						<li><img src="./image/time.png" height="18" width="18" alt=""></li>
						<li><img src="./image/s.png" height="18" width="18" alt=""></li>
						<li><img src="./image/shangchuan.png" height="18" width="18" alt=""></li>
					</ul>
				</div>
				
			</div>
			<!-- 文本框 -->
			<textarea name=""></textarea>
			<!-- 底部帮助 -->
			<p></p>
		</div>
		<!-- 底部 end -->
	</div>
	<!-- 右侧 end -->

 </div>
</template>

<script>
import Session from './Tab/Session'
import MailList from './Tab/MailList'
import File from './Tab/File'
import Collection from './Tab/Collection'
import MyNews from './Tab/MyNews'
import Search from './Tab/Search'

import socket from 'socket.io'

export default {
  name: 'home',
  data () {
    return {
    	isShowImg:false,
    	qwerqwre:0,
    	navBarTab:[
    	{
	    	"cimg":"/static/image/session.png",
	    	"activeImg":"/static/image/会话.png",
	    	"alt":"会话"
    	},
    	{
    		"cimg":"/static/image/通讯录.png",
    		"activeImg":"/static/image/tongxunbg.png",
    		"alt":"通讯录"
    	},
    	{
    		"cimg":"/static/image/文件.png",
    		"activeImg":"/static/image/filebg.png",
    		"alt":"文件"
    	},
    	{
    		"cimg":"/static/image/收藏.png",
    		"activeImg":"/static/image/shoucangbg.png",
    		"alt":"收藏"
    	},
    	{
    		"cimg":"/static/image/艾特svg.png",
    		"activeImg":"/static/image/aitebg.png",
    		"alt":"艾特"
    	},
    	{
    		"cimg":"/static/image/搜索.png",
    		"activeImg":"/static/image/searchbg.png",
    		"alt":"搜索"
    	}
    	],

    }
  },
  components:{
  	Session,
  	MailList,
  	File,
  	Collection,
  	MyNews,
  	Search,
    
  },
  created(){
  	const that = this
    this.socket = io.connect('http://localhost:3000')
    this.socket.on('message', function(obj) {
        that.$store.commit('addroomdetailinfos', obj)
        window.scrollTo(0, 900000)
    })
    this.socket.on('logout', function (obj) {
        that.$store.commit('setusers', obj)
    })

  },
  mounted(){
  },
  computed:{
  },
  methods:{
  	selectNavBar(img,index){
  		// console.log(img)
  		// console.log(index)
  		this.qwerqwre = index;

  	},
  	MailList(){
  		this.currentTab=MailList;
  	}

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';
img{
	vertical-align:middle;
}

#home{
	display:flex;
	width:100%;
	height:100%;
	.vue_left{
		width:60px;
		background-color:#4A4A4A;
		padding:18px 0 18px 0;
		.vue_home{
			width:40px;
			height:40px;
			line-height:40px;
			-webkit-border-radius:50%;   
			-moz-border-radius:50%;   
			-ms-border-radius:50%;         
			-o-border-radius:50%;          			
			-khtml-border-radius:50%;      
			border-radius:50%;  
			background-color:#fff;
			color:#404040;
			margin-left:10px;
			margin-bottom:38px;
			.tc();

		}
		.vue_ul{
			margin-left:20px;
			ul{
				li{
					margin-bottom:34px;
					img{
						width:16px;
						height:16px;
						display:block;
					}
				}
			}
		}
		.vue_help{
			margin-left:20px;
			img{
				display:block;
			}
			img:first-child{
				margin-top:250px;
				margin-bottom:30px;
			}
			img:last-child{
				margin-left:-5px;
				margin-top:60px;
			}

		}
	}
	.vue_content{
		width:264px;
		border-right:1px solid #EBEBEB;
		background-color:#F7F7F7;
		-webkit-box-sizing:border-box;
		-moz-box-sizing:border-box;
		-ms-box-sizing:border-box;
		-o-box-sizing:border-box;
		box-sizing:border-box;
		
		.vue_header{
			height:70px;
			line-height:70px;
			border-bottom:1px solid #EBEBEB;
			display:flex;
			justify-content: space-between;
			padding-left:10px;
			padding-right:10px;
			background-color:#fff;
			.vue_more{
				img{
			    	vertical-align: middle;
				}
			}


		}
		.vue_tab{
			position:relative;
		}
		// .vue_continue{
		// 	background-color:#fff;

		// 	.vue_conversation{
		// 		height:45px;
		// 		line-height:45px;
		// 		border-bottom:1px solid #EBEBEB;
		// 		display:flex;
		// 		justify-content: space-between;
		// 		padding-left:10px;
		// 		padding-right:10px;
		// 		h3{
		// 			font-size: 16px;
		// 			img{

		// 			}
		// 		}

		// 	}
		// 	.vue_continue_ul{
		// 		font-size:16px;
		// 		color:#404040;
				
		// 		li{
		// 			height:70px;
		// 			line-height:70px;
		// 			padding-left:10px;
		// 			padding-right:10px;
		// 			display:flex;
		// 			justify-content: space-between;
		// 			&:hover{
		// 				background-color:#EBEBEB;
		// 			}
		// 			&:first-child{
		// 				background-color:#EBEBEB;
		// 			}
		// 			.vue_li_left{
		// 				display:flex;
		// 				justify-content: space-between;
		// 				i{
		// 					margin-right:10px;
		// 				}
		// 				.vue_title{
		// 					line-height:20px;
		// 					display:block;
		// 					p:first-child{
		// 						width:200px;
		// 						margin-top:10px;
		// 						display:flex;
		// 						justify-content:space-between;
		// 						font-size:14px;

		// 						.time{
		// 							font-size:12px;
		// 							color:#7F7F7F;

		// 						}
		// 					}
		// 					p:last-child{
		// 						margin-top:8px;
		// 						font-size:12px;
		// 						color:#7F7F7F;
		// 					}
		// 				}

		// 			}
		// 		}
		// 	}
			

		// }

	}
	.vue_right{
		flex:auto;
		background-color:#F7F7F7;
		position:relative;

	}
	.vue_right{
		display:flex;
		flex-flow:column;
		    overflow: hidden;
		/* 头部css  start*/ 
		.vue_right_header{
			position:absolute;
			top:0;left:0;right:0;
			height:70px;
			line-height:70px;
			border-bottom:1px solid #EBEBEB;
			background-color:#fff;
			padding-left:20px;
			padding-right:20px;
			display:flex;
			justify-content: space-between;
			.vue_right_left{
				font-size:14px;
				display:flex;
				justify-content: space-between;

				i{
					margin-right:10px;
				}
				.vue_title{
					line-height:20px;
					display:block;
					p:first-child{
						margin-top:10px;
					}
					p:last-child{
						margin-top:8px;
					}
				}

			}
			.vue_right_right{
				img:first-child{
					margin-right:15px;
				}
			}


		}
		/*  中间内容 start  */ 
		.vue_right_content{
			flex:auto;
			// overflow:hidden;
			overflow: overlay;
			position:absolute;
			top:70px;left:0;right:0;
			bottom:150px;
			padding-left:22px;
			ul{
				li{
					display:flex;
					margin-top:20px;
					img{
						margin-right:10px;
					}
					.contet_right{
						width:1000;
						
						font-size:12px;
						margin-right:20px;
						overflow-x: hidden;

						span{
							margin-left:10px;
							color:#B2B2B2;
						}
						.content{
							display:flex;
							justify-content:space-between;
							margin-top:10px;
							div{
								flex:auto;
								min-width: 36px;
								min-height: 36px;
								background-color:#fff;
								line-height:24px;
								padding:6px 10px 6px 10px;
								word-wrap:break-word; 
								word-break:break-all; 
								
							}
							.time{
								width:150px;
								margin-left: 10px;
								align-self: flex-end;


							}

						}
					}
				}
			}


		}
		/* 底部 start  */ 
		.vue_right_bottom{
			border-top:1px solid #EBEBEB;
			position:absolute;
			left:0;right:0;
			bottom:0;
			height:150px;
			background-color:#fff;
			padding:10px 30px;
			-webkit-box-sizing:border-box;
			-moz-box-sizing:border-box;
			-ms-box-sizing:border-box;
			-o-box-sizing:border-box;
			box-sizing:border-box;
			
			.vue_bottom_expression{
				height:30px;
				line-height:30px;
				display:flex;
				justify-content:space-between;
				.join{
					img:first-child{
						margin-right:20px;
					}

				}
				.vue_yun{
					ul{
						display:flex;
						li{
							margin-left:20px;
						}
					}
				}
				

			}
			textarea{
				width:100%;
				// height:100%;
				height:90px;
				border:none;
				outline: none;
				resize:none;
				padding:0;
			}
			p{
				height:20px;
				line-height:20px;

			}
		}
	}

}

</style>
