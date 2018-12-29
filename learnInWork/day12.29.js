function makeDom(index){
	this.inputDom="<input type=\"text\" class=\"texinput\" id=\"sheetInp"+index+"\">";
	this.sheetDescDomNoCheck="<span style=\"display:inline-block;width:90%\" id=\"sheetSpan"+index+"\"></span>";
	this.sheetDescDom ="<span style=\"display:inline-block;width:90%\" id=\"sheetSpan"+index+"\"></span><input type=\"checkbox\" style=\"float:left\" id=\"sheetChe"+i+"\">";
}
$.ajax( {
	type : "POST",
	url : '<%=path%>/gongdan/gongdanedit.action?SHEET_ID='+'<%=eventID%>',
	success : function(data) {
		document.getElementById("sheetName").innerHTML = data.sheet_NAME;
		document.getElementById("sglbName").innerHTML = data.sglb_NAME;
		document.getElementById("sheetLvl").innerHTML = data.sheet_LVLNAME;
		var arrDesc =JSON.parse(data.sheet_DESC);
		
		for(var i=0;i<arrDesc.strContent.length;i++){
			var makeNewDom = new makeDom(i);
	 		var sheetli = document.createElement("li");
             var sheetInput = document.createElement("span");
             //将变量${input}替换为文本框
             var isInput = arrDesc.strContent[i].split("$"+"{input}");
             
             //将变量${nockeck}替换为不使用复选框
	 		if(isInput[0].indexOf("$"+"{nockeck}")!=-1){
	 			isInput[0] = isInput[0].replace("$"+"{nockeck}","");
	 		}
	 		/* console.log(isInput); */
	 		var resultContent="" ;
	 		if(arrDesc.strContent[i].indexOf("$"+"{nockeck}")==-1){
	 			sheetli.innerHTML = makeNewDom.sheetDescDom;
				document.getElementById("sheetUL").appendChild(sheetli);
				if(isInput.length>1){
					for(var j=0;j<isInput.length-1;j++){
							resultContent+=isInput[j]+"<input oninput=\"addLength(this)\" type=\"text\" style=\"  max-width:430px; border-style: none;border-bottom: 1px solid black;display:inline-block;text-align: center; width:70px;margin-left:10px;\" size=\"50\" class=\"texinput\" id=\"sheetInp"+j+"\">";	
					}
					document.getElementById("sheetSpan"+i).innerHTML = resultContent;
				}else if(isInput.length==1){
					document.getElementById("sheetSpan"+i).innerHTML = arrDesc.strContent[i].replace("$"+"{nockeck}","");
				}
				
				
	 		}else{
	 			sheetli.innerHTML = makeNewDom.sheetDescDomNoCheck;
				document.getElementById("sheetUL").appendChild(sheetli);
				if(isInput.length>1){
					for(var j=0;j<isInput.length-1;j++){
							resultContent+=isInput[j]+"<input oninput=\"addLength(this)\" type=\"text\" style=\" max-width:430px; border-style: none;border-bottom: 1px solid black;display:inline-block;text-align: center; width:70px;margin-left:10px;\" size=\"50\" class=\"texinput\" id=\"sheetInp"+j+"\">";	
					}
					document.getElementById("sheetSpan"+i).innerHTML = resultContent;
				}else if(isInput.length==1){
					document.getElementById("sheetSpan"+i).innerHTML = arrDesc.strContent[i].replace("$"+"{nockeck}","");
				}
				
	 		}
				 
		}
		 document.getElementById("sheetAlert").innerHTML = arrDesc.strAlert; 
	},
	error : function(msg) {
		toastr.error('系统异常！');
	}
}); 

//输入框不够增加长度
function addLength(d){
	var inputLength = window.getComputedStyle(d).width.replace("px","");
	var wordLength = d.value.length;
	if(wordLength*13>parseInt(inputLength)){
		d.style.setProperty('width',wordLength*13+'px', 'important');
	}else{
		d.style.setProperty('width',wordLength*13+'px', 'important');
	}
} 

//保存文本框输入的内容
function saveInput(){
	var saveArr = document.getElementsByClassName("texinput");
	var inputContent = [];
	for(var i=0;i<saveArr.length;i++){
		inputContent[i]=saveArr[i].value;
	}
	console.log(inputContent);
}