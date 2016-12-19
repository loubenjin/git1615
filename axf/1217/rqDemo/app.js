require.config({
	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
	paths: {
		//参数可使用数据 加载优先级按小标从小到大顺序
		"jquery": ["js/jquery-1.11.2", "js/jquery-1.8.1.js"],
		"text": "js/text",
		"backbone": "js/backbone",
		"underscore": "js/underscore",
		"css": "js/css",
		"swiper":"js/swiper-3.3.1.min",
		"main1":"js/main1"
	},
	shim: {  
        "main1": ["jquery"]
    }
	//使用baseUrl设置默认路径
	// baseUrl : "js"
});

//使用backbone 路由
require(['jquery','backbone','router.js','swiper'],function($,Backbone){
    Backbone.history.start();
});
clearColor();
$(".ulid1 li").eq(0).on("click",function(e){
	console.log(0)
	clearColor();
	$(this).css({"background":"url(img/b1-1.png) no-repeat center 0.07rem",
	"background-size": "0.24rem"});
})
$(".ulid1 li").eq(1).on("click",function(e){
	console.log(1)
	clearColor();
	$(this).css({"background":"url(img/b2-1.png) no-repeat center 0.07rem",
	"background-size": "0.24rem"});
})
$(".ulid1 li").eq(2).on("click",function(e){
	console.log(this)
	clearColor();
	$(this).css({"background":"url(img/b3-1.png) no-repeat center 0.07rem",
	"background-size": "0.24rem"});
})
$(".ulid1 li").eq(3).on("click",function(e){
	console.log(3);
	clearColor();
	$(this).css({"background":"url(img/b4-1.png) no-repeat center 0.07rem",
	"background-size": "0.24rem"});
})
function clearColor(){	
			$(".ulid1 li:eq(0) ").css({"background":"url(img/b1.png)no-repeat center 0.07rem","background-size": "0.24rem"});
			$(".ulid1 li:eq(1) ").css({"background":"url(img/b2.png) no-repeat center 0.07rem",
			"background-size": "0.24rem"});
			$(".ulid1 li:eq(2) ").css({"background":"url(img/b3.png) no-repeat center 0.07rem",
			"background-size": "0.24rem"});
			$(".ulid1 li:eq(3) ").css({"background":"url(img/b4.png) no-repeat center 0.07rem",
			"background-size": "0.24rem"});
}
