/*闪送超市*/
define(["text!../send.html","css!../css/send.css"], function(homePage){
	return {
		init : function(){
			$(".market").html(homePage).show().siblings("div").hide();
		}
	}
});