//XMLHttpRequest 在绝大多数浏览器下都支持。而IE低版本下（ie6）不支持该构造函数，需要使用ActiveXObject 该构造函数需要使用对应的参数构造出通信对象["MSXML.XMLHttp.6.0","MSXML.XMLHttp.3.0","MSXML.XMLHttp"]

//封装一个通用的创建xhr对象的工厂函数
function createXhr(){
	//如果支持XMLHttpRequest 直接创建xhr对象
	if(typeof XMLHttpRequest !== "undefined"){
		return new XMLHttpRequest();
	// 如果不支持第一种场景，判断是否支持ActiveXObject方式创建通信对象
	}else if(typeof ActiveXObject !== "undefined"){
		var verStr = ["MSXML.XMLHttp.6.0","MSXML.XMLHttp.3.0","MSXML.XMLHttp"];

		for(var n in verStr){
			try{
				var xhr = new ActiveXObject(verStr[n]);
				return xhr;
			}catch(e){
				console.log(e);
			}
		}
	}else{
		//两种创建方式都不支持提示客户环境无法发送ajax请求
		console.log("对不起，您的浏览器不支持ajax通信！");
	}
}

//低版本可以在地址栏输入 javascript:alert(typeof ActiveXObject);

/*封装一个兼容复杂场景的请求发送函数
	type: get/post
	url: 资源路径、接口名称
	isAsyn： true 异步  false 同步
	param：{name: "tom"}对象类型参数
	callback：回调函数
*/
function postRequest(type, url, isAsyn, param, callback){
	//创建通信对象
	var xhr = createXhr();
	//绑定监听
	xhr.onreadystatechange = function(){
		if((xhr.status == 200 || xhr.status == 304) && xhr.readyState == 4){
			var data = JSON.parse(xhr.responseText);
			//执行回调函数
			callback && callback(data);
		}
	}
	//根据不同的请求方式，处理参数
	if(type.toLowerCase() == "get"){
		url += "?";
		for(var n in param){
			url += n+"="+param[n]+"&"
		}
		url = url.substr(0, url.length-1);
		param = null;
	}else{
		param = JSON.stringify(param);
	}
	//请求初始化
	xhr.open(type, url, isAsyn);
	xhr.send(param);
}