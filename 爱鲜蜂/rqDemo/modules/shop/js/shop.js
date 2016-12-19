/*购物车*/
define(["text!../shop.html","css!../css/shop.css"], function(homePage){
	return{
		init : function(){
			$(".main-zhu").html(homePage);
		}
	}
});