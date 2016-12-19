define(["backbone"], function(Backbone){
	require(["modules/zhuye/js/main1.js"],function(zhuye){
				zhuye.init();
			});
	var Router = Backbone.Router.extend({
		routes:{
			zhuye: "zhuye",
			send: "send",
			shop: "shop",
			my: "my"
		},
		zhuye: function(){
			require(["modules/zhuye/js/main1.js"],function(zhuye){
				zhuye.init();
			});
		},
		send: function(){
			require(["modules/send/js/send.js"],function(send){
				send.init();
			});
		},
		shop: function(){
			require(["modules/shop/js/shop.js"],function(shop){
				shop.init();
			});
		},
		my: function(){
			require(["modules/my/js/my.js"],function(my){
				my.init();
			});
		},
	});
	return new Router();
});