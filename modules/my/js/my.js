/*我的*/
define(["text!../my.html","css!../css/my.css"], function(minePage){
	return{
		init : function(){
			$(".main-zhu").html(minePage);
		}
	}	
});