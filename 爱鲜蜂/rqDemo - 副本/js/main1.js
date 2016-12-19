/*
爱鲜蜂
编写：娄本金
日期：2016-12-14
*/
/*初始化定位*/
var start=setTimeout(function(){
	$("#try1").css("display","none");
	$("#try").css("display","block");
},1000);
sessionStorage.list="";
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
});
