/**
 * 调用函数，传入url的参数名称，返回对应的参数值
 * @param {Object} key
 */
function getParam(key) {
	
	var url = location.href;

	var index = url.indexOf('?');
	
	url = url.substr(index + 1);
	
	var arr = url.split('&');
	
	for (var i = 0;i < arr.length;i ++) {
		
		var s = arr[i].split('=');
		
		if (s[0] == key)
			return s[1];
		
	}		
}	

function getProperty(jsonInfo, key){
	var allInfo = jsonInfo.substring(2, jsonInfo.length-2);
	//alert(allInfo);
	var property = allInfo.split(",");
	for(var i=0; i<property.length; i++){
		var propertyName = property[i].split(":")[0];
		/*alert(propertyName);
		alert("propertyName.substring(1,propertyName.length-1)="+
		propertyName.substring(1,propertyName.length-1));*/
		/*alert("key"+key);
		alert(propertyName.substring(1,propertyName.length-1)==key);*/
		if(propertyName.substring(1,propertyName.length-1)==key){
			//alert(property[i].split(":")[1]);
			return property[i].split(":")[1];
		}
	}
}

//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if(r != null) return unescape(getCharFromUtf8(r[2])); //增加UTF-8解码处理。
	return null; //返回参数值
}

//将URL中的UTF-8字符串转成中文字符串  
function getCharFromUtf8(str) {  
	var cstr = "";  
	var nOffset = 0;  
	if (str == "")  
	return "";  
	    str = str.toLowerCase();  
	    nOffset = str.indexOf("%e");  
	if (nOffset == -1)  
	return str;  
	while (nOffset != -1) {  
	        cstr += str.substr(0, nOffset);  
	        str = str.substr(nOffset, str.length - nOffset);  
	if (str == "" || str.length < 9)  
	return cstr;  
	        cstr += utf8ToChar(str.substr(0, 9));  
	        str = str.substr(9, str.length - 9);  
	        nOffset = str.indexOf("%e");  
	    }  
	return cstr + str;  
}

//将编码转换成字符  
function utf8ToChar(str) {  
	var iCode, iCode1, iCode2;  
	    iCode = parseInt("0x" + str.substr(1, 2));  
	iCode1 = parseInt("0x" + str.substr(4, 2));  
	iCode2 = parseInt("0x" + str.substr(7, 2));  
	return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));  
} 

/*能够进行查找，已弃用*/
function queryKeyWord(array, keyword){
	var newarray = [];
	
}
