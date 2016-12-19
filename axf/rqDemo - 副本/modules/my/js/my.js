/*我的*/
define(["text!../my.html","css!../css/my.css"], function(minePage){
	return{
		init : function(){
			$(".mine").html(minePage).show().siblings("div").hide();
		}
	}	
});