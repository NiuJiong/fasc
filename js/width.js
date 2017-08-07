(function(glabal,undefind){
	
	var tools = {
		setFontSize:function(size){
			var oHtml = document.querySelector("html");
			var width = oHtml.getBoundingClientRect().width;
			oHtml.style.fontSize = width/size + 'px';
		}
		
	}
	
	glabal.to = tools;
	
})(window,undefined);
