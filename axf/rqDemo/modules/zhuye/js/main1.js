
/*爱鲜蜂
编写：娄本金
日期：2016-12-14
*/
$.ajax({
		type:"get",
		url:"zhuye.json",
		data:"name=tom&age=22",
		success:function(responseData){
			zhuye=responseData.data.act_info;
		/*	fun();*/
		}
});
/*初始化定位*/
define(["text!../zhuye.html","css!../css/main.css"], function(homePage){
	return {
		init : function(){
			$(".main-zhu").html(homePage);
			/*初始化定位功能界面*/
			var start=setTimeout(function(){
				$("#try1").css("display","none");
				$("#try").css("display","block");
			},1000);
			/* 购物车动画效果*/
/*			sessionStorage.list="";
			var n=1;
			$(".shi").on("click",function(e){
				var e=e||window.event;
				$(".span1").remove();
				$(e.target).after("<span></span>");
				var di=$(e.target).closest("li").find("div").eq(0).css("background");
				!sessionStorage.list?sessionStorage.list+=$(this).siblings().text():sessionStorage.list+="|"+$(this).siblings().text();
				$(e.target).siblings().first().clone().appendTo($(e.target).next());
				$(this).next().attr("class", "span1");
				$(".span1").css({"left":e.offsetLeft,"top":e.clientY,"background": di,"background-size": "1rem"});
				$(".here").css({"display":"inline-block"});
				$(".here").text(n++);
			});*/
			function funs(){
				var htmlstr= baidu.template("firstTmp",{zhuye});
				$('#swiper-wrapper').html(htmlstr);
				$(this).find("#firstTmp").remove();
				var htmlstr1= baidu.template("secondTmp",{zhuye});
				$('.four-ul').html(htmlstr1);
				$(this).find("#secondTmp").remove();
				var htmlstr2= baidu.template("thrTmp",{zhuye});
				$('.three').html(htmlstr2);
				$(this).find("#thrTmp").remove();
				var htmlstr3= baidu.template("fourTmp",{zhuye});
				$('.bigul').html(htmlstr3);
				$(this).find("#fourTmp").remove();
			}
						
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动(时间:毫秒)
				autoplayDisableOnInteraction : false,
				loop : true,//循环
				pagination : '.swiper-pagination',//分页器
				updateOnImagesReady : true,
		   });
		}
	}
});