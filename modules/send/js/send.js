/*闪送超市*/
define(["text!../send.html","css!../css/send.css"], function(homePage){
	return {
		init : function(){
			$(".main-zhu").html(homePage);
			$.ajax({
			type:"get",
			url:"send.json",
			data:"name=tom&age=23",
			success:function(responseData){
				send=responseData.data;
				fun();
			}	
			});
			function fun(){
				var htmlstrl= baidu.template("fiveTmp",{send});
				$('.left-ul').html(htmlstrl);
				$(this).find("#fiveTmp").remove();
				var htmlstra= baidu.template("sixTmp",{send});
				$('.mian-ul').html(htmlstra);
				$(this).find("#sixTmp").remove();
				/*$(".mian-ul li").hide();
				$(".104749").show();*/
				$(".left-ul").on("click",function(e){
				console.log(e.target.id);
				var t=e.target.id;
				$(".mian-ul li").hide();
				$("."+e.target.id).show();
				var htmlstrb= baidu.template("sevTmp",send.products[t]);
				console.log(t);
				$('.mian-ul1').html(htmlstrb);
				$(this).find("#sevTmp").remove();
			})
			};
			
			
		}
	}	
});

	