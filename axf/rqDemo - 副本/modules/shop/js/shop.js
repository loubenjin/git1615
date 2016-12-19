/*购物车*/
define(["text!../shop.html","css!../css/shop.css"], function(homePage){
	return{
		init : function(){
			$(".order").html(homePage).show().siblings("div").hide();
		}
	}
});