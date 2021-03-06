<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wxf105a7fc4a3f1c9d", "65d7548f363ac286755edbcba9f029b0");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name = "viewport" content = "width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title>爱鲜蜂</title>
		<script type="text/javascript">
		/*页面适配天使啊*/
			(function (doc, win) {
			var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if(clientWidth>=768){
			docEl.style.fontSize = '240px';
			}else{
			docEl.style.fontSize = (clientWidth / 3.2) + 'px';
			}
			};
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
		</script>
		<!-- data-main 指定主程序入口 通常指定当前目录下的js文件 其他模块中的路径会参照主程序入口路径 -->		
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<link rel="stylesheet" type="text/css" href="modules/zhuye/css/main.css">
		<link rel="stylesheet" type="text/css" href="modules/zhuye/css/swiper.min.css">
		<script type="text/javascript" src="js/jquery-1.11.2.js"></script>
		<script type="text/javascript" src="js/baiduTemplate.js"></script>
		<script type="text/javascript" src="js/commen.js"></script>
		<style type="text/css">
		.main{
			width: 100%;
			margin-top: 0.55rem;
			overflow: hidden;
		}
		.slider{
			width: 3.2rem;
			height: 1.2rem;
			margin: 0 auto;
		}
		.swiper-container{
			width: 100%;
			height: 100%;
		}
		.swiper-wrapper .swiper-slide>img{
			width: 3.2rem;
			height: 1.2rem;
		}
		</style>
		<link rel="stylesheet" type="text/css" href="css/main.css">
	</head>
	<body>
		<div class="main-zhu">
		</div>
		<div class="footer">
			<ul class="ulid1">
				<a href="#zhuye"><li><div></div><span>首页</span></li></a>
				<a href="#send"><li><div></div><span>闪送超市</span></li></a>
				<a href="#shop"><li><div></div><span>购物车</span></li></a>
				<a href="#my"><li><div></div><span>我的</span></li></a>
			</ul>
		</div>
	</body>
	<script data-main = "app" type="text/javascript" src = "js/require.js"></script>
	<script>
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
  wx.ready(function () {
    // 在这里调用 API

    wx.getLocation({
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    },
    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
    }
});
});
</script>
</html>