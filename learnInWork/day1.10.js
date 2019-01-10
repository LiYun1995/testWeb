setTimeout(function(){
    //创建地图
   map = new SuperMap.Map("allmap",{
       controls:[
            new SuperMap.Control.Navigation(),
            new SuperMap.Control.Zoom()
        ]
   });
   map.addControl(new SuperMap.Control.MousePosition());
   //创建分块动态REST图层，该图层显示iserver 8C 服务发布的地图,
   //其中"world"为图层名称，url图层的服务地址，{transparent: true}设置到url的可选参数
//	debugger;
   layer = new SuperMap.Layer.TiledDynamicRESTLayer("青岛机场1", url, 
   null, {maxResolution:"auto"});
   layer.events.on({"layerInitialized": addLayer});         
   var htmlString = 
       '<div id="222" class="alert alert-error fade in" style="position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;">' 
       + '<a href="javascript:markcheck()"><img src="../images/ditu/mapwxdt.png" alt=""/></a>'
       + '</div>';
   $('#map').append($(htmlString));
   //打点
   var markers=new SuperMap.Layer.Markers( "Markers" );
   var point = new SuperMap.Geometry.Point(gis_x,gis_y);
   var marker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y));
   markers.addMarker(marker);
   map.addLayer(markers);
},500);
 
function addLayer() {
    //将Layer图层加载到Map对象上
    map.addLayer(layer);
    //出图，map.setCenter函数显示地图
    map.setCenter(new SuperMap.LonLat(gis_x, gis_y), 5);
    var htmlString = 
        '<div id="222" class="alert alert-error fade in" style="position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;">' 
        + '<a href="javascript:markcheck()"><img src="../images/ditu/mapwxdt.png" alt=""/></a>'
        + '</div>';
    var html2="<div onclick='markcheck()' class='smControlZoomIn smButton' style='position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;'><img src='../images/ditu/bianhuan1.png' style='width: 34px; height: 30px;'></div>"
    $('#allmap').append($(html2));
}
//===============地图切换=====================
var check=false;
//var layer2;
function markcheck(){
    var url2;
    if(!check){
        check=true;
        //document.getElementById("button1").value="平面地图";
         var htmlString = 
            '<div id="222" class="alert alert-error fade in" style="position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;">' 
            + '<a href="javascript:markcheck()"><img src="../images/ditu/mapsldt.png" alt=""/></a>'
            + '</div>';
            var html2="<div onclick='markcheck()' class='smControlZoomIn smButton' style='position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;'><img src='../images/ditu/bianhuan1.png' style='width: 34px; height: 30px;'></div>"
        $('#map').append($(htmlString));
    
        url2 = "<%=imagepath%>";
    }else if(check){
        check=false;
        
        var htmlString = 
            '<div id="222" class="alert alert-error fade in" style="position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;">' 
                + '<a href="javascript:markcheck()"><img src="../images/ditu/mapwxdt.png" alt=""/></a>'
            + '</div>';
            var html2="<div onclick='markcheck()' class='smControlZoomIn smButton' style='position:absolute; top: 80px; left: 10px; z-index: 2000;text-align: right;'><img src='../images/ditu/bianhuan1.png' style='width: 34px; height: 30px;'></div>"

           $('#map').append($(html2));
    
        //document.getElementById("button1").value="卫星地图";
        url2 = "<%=vectorpath%>";
    }
    map.removeLayer(layer);
    layer = new SuperMap.Layer.TiledDynamicRESTLayer("World", url2,{transparent:true, cacheEnabled: true}, {maxResolution:"auto"}); 
    layer.events.on({"layerInitialized": addLayer3});  
}
//地图切换
function addLayer3() {
     // 向Map中添加图层
    map.addLayer(layer);
    map.setCenter(map.getCenter());
    map.addControl(new SuperMap.Control.ScaleLine());
} 	

//保存
function saveGD(){
    for(var i=0;i<gdesc.length;i++){
       var gjsons = JSON.parse(gdesc[i].SHEET_DESC);
       var mi = i+1;
       var contentArr=[];
       var checkArr=[];
       var counter=0;
       var classListA = document.getElementsByClassName("texinput"+mi);
       var classListB = document.getElementsByClassName("selectsingle"+mi);
       for(var j=0;j<classListA.length;j++){
           contentArr[j]=classListA[j].value;
       }
       gd_result.inputContent[i]=contentArr;
       for(var x=0;x<classListB.length;x++){
           checkArr[x]=classListB[x].checked;
           if(classListB[x].checked===true){
               counter+=1;
           }
       }
       gd_result.checkContent[i]=checkArr;
       if(document.getElementById("allche"+mi).checked===true){
           gd_result.allCheckContent[i]=true;
           gd_result.process[i] = "100%";
       }else{
           gd_result.allCheckContent[i]=false;
           gd_result.process[i]=Math.round(counter/classListB.length*100)+"%"
       }
       for(var z=0;z<gjsons.strContent.length;z++){
           var isInputs = gjsons.strContent[z].split("$"+"{input}");
           var resultObj={};
           if(isInput[0].indexOf("$"+"{nockeck}")!=-1){
               isInput[0] = isInput[0].replace("$"+"{nockeck}","");
           }
           
       }
       
    }
   localStorage.setItem("roledate",JSON.stringify(gd_result));
}

	//工单
    function showGD(){
        $('#taskGD').modal('show');
        var roledate = JSON.parse(localStorage.roledate);
        for(var i=0;i<roledate.allCheckContent.length;i++){
            var mi = i+1;
            document.getElementById("allche"+mi).checked=roledate.allCheckContent[i];
            var classListA = document.getElementsByClassName("texinput"+mi);
            var classListB = document.getElementsByClassName("selectsingle"+mi);
            console.log(classListA,classListB);
            for(var j=0;j<classListA.length;j++){
                classListA[j].value=roledate.inputContent[i][j];
            }
            for(var x=0;x<classListB.length;x++){
                classListB[x].checked=roledate.checkContent[i][x];
            }
        }
    }
    