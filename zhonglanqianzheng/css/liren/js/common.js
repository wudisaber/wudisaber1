var oClickLi=document.getElementsByClassName('oli1');
console.log(oClickLi);
var oLis=document.getElementsByClassName('subnav');
console.log(oLis)
// 对导航栏进行遍历
for(var i=0;i<oClickLi.length;i++){
	// 自定义索引
	oClickLi[i].index=i;
	// 添加鼠标移入事件
	oClickLi[i].onmousemove=function(){
	// 对二级导航进行遍历
		for(var j=0;j<oLis.length;j++){
			oLis[j].style.display = 'none';
			oClickLi.className="";
		}
		oLis[this.index].style.display = 'block';
	}
}

var img1=[{
     id:1,
     imgsrc:"../images/navpic1001.jpg",
     lr:"利仁（Liven）LR-D3020A",
     xq:"查看详情"
},{
     id:2,
     imgsrc:"../images/navpic1002.jpg",
     lr:"利仁（Liven）LRT-326A",
     xq:"查看详情"
},{
     id:3,
     imgsrc:"../images/navpic1003.jpg",
     lr:"利仁（Liven）LR-S3000",
     xq:"查看详情"
},{
     id:4,
     imgsrc:"../images/navpic1004.jpg",
     lr:"利仁（Liven）LR-280A",
     xq:"查看详情"
},{
     id:5,
     imgsrc:"../images/navpic1005.jpg",
     lr:"利仁（Liven）LR-D4000",
     xq:"查看详情"
},{
     id:6,
     imgsrc:"../images/navpic2001.jpg",
     lr:"利仁（Liven）DHG-263A",
     xq:"查看详情"
},{
     id:7,
     imgsrc:"../images/navpic2002.jpg",
     lr:"利仁（Liven）DHG-283A",
     xq:"查看详情"
},{
     id:8,
     imgsrc:"../images/navpic2003.jpg",
     lr:"利仁（Liven）HG-B2600",
     xq:"查看详情"
},{
     id:9,
     imgsrc:"../images/navpic2004.jpg",
     lr:"利仁（Liven）HG-F422LA",
     xq:"查看详情"
},{
     id:10,
     imgsrc:"../images/navpic3001.jpg",
     lr:"利仁（Liven）DNG-5000C",
     xq:"查看详情"
},{
     id:11,
     imgsrc:"../images/navpic3002.jpg",
     lr:"利仁（Liven）DNG-5000D",
     xq:"查看详情"
},{
     id:12,
     imgsrc:"../images/navpic3003.jpg",
     lr:"利仁（Liven）DNG-50001",
     xq:"查看详情"
},{
     id:13,
     imgsrc:"../images/navpic3004.jpg",
     lr:"利仁（Liven）DNG-60001",
     xq:"查看详情"
},{
     id:14,
     imgsrc:"../images/navpic3005.jpg",
     lr:"利仁（Liven）DYG-50C",
     xq:"查看详情"
},{
     id:15,
     imgsrc:"../images/navpic3006.jpg",
     lr:"利仁（Liven）YG-D420",
     xq:"查看详情"
},{
     id:16,
     imgsrc:"../images/navpic4001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:17,
     imgsrc:"../images/navpic4002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:18,
     imgsrc:"../images/navpic4003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:19,
     imgsrc:"../images/navpic4004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:20,
     imgsrc:"../images/navpic4005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:21,
     imgsrc:"../images/navpic4006.jpg",
     lr:"利仁（Liven）SK-J3201",
     xq:"查看详情"
},{
     id:22,
     imgsrc:"../images/navpic5001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:23,
     imgsrc:"../images/navpic5002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:24,
     imgsrc:"../images/navpic5003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:25,
     imgsrc:"../images/navpic5004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:26,
     imgsrc:"../images/navpic5005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:27,
     imgsrc:"../images/navpic5006.jpg",
     lr:"利仁（Liven）SK-J3201",
     xq:"查看详情"
},{
     id:28,
     imgsrc:"../images/navpic6001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:29,
     imgsrc:"../images/navpic6002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:30,
     imgsrc:"../images/navpic6003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:31,
     imgsrc:"../images/navpic6004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:32,
     imgsrc:"../images/navpic6005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:33,
     imgsrc:"../images/navpic6006.jpg",
     lr:"利仁（Liven）SK-J3201",
     xq:"查看详情"
},{
     id:34,
     imgsrc:"../images/navpic7001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:35,
     imgsrc:"../images/navpic7002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:36,
     imgsrc:"../images/navpic7003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:37,
     imgsrc:"../images/navpic7004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:38,
     imgsrc:"../images/navpic7005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:39,
     imgsrc:"../images/navpic8001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:40,
     imgsrc:"../images/navpic8002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:41,
     imgsrc:"../images/navpic8003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:42,
     imgsrc:"../images/navpic8004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:43,
     imgsrc:"../images/navpic8005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:44,
     imgsrc:"../images/navpic8006.jpg",
     lr:"利仁（Liven）SK-J3201",
     xq:"查看详情"
},{
     id:45,
     imgsrc:"../images/navpic9001.jpg",
     lr:"利仁（Liven）KL-J441A",
     xq:"查看详情"
},{
     id:46,
     imgsrc:"../images/navpic9002.jpg",
     lr:"利仁（Liven）DHG-235SK",
     xq:"查看详情"
},{
     id:47,
     imgsrc:"../images/navpic9003.jpg",
     lr:"利仁（Liven）KL-J4300",
     xq:"查看详情"
},{
     id:48,
     imgsrc:"../images/navpic9004.jpg",
     lr:"利仁（Liven）KL-J4500",
     xq:"查看详情"
},{
     id:49,
     imgsrc:"../images/navpic9005.jpg",
     lr:"利仁（Liven）SK-J3200A",
     xq:"查看详情"
},{
     id:50,
     imgsrc:"../images/navpic9006.jpg",
     lr:"利仁（Liven）SK-J3201",
     xq:"查看详情"
}]
var oSubnavList=document.getElementsByClassName('subnav-list');
// 第一个
var subnavlist1=[];
var subnavlist2=[];
var subnavlist3=[];
var subnavlist4=[];
var subnavlist5=[];
var subnavlist6=[];
var subnavlist7=[];
var subnavlist8=[];
var subnavlist9=[];
var str1="";
var str2="";
var str3="";
var str4="";
var str5="";
var str6="";
var str7="";
var str8="";
var str9="";
var newList1=img1.splice(0,5);
console.log(img1)
subnavlist1=subnavlist1.concat(newList1);
for(var i=0;i<subnavlist1.length;i++){
     str1+='<li>'+'<img src='+subnavlist1[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist1[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist1[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[0].innerHTML=str1;

// 第二个
var newList2=img1.splice(0,4);
subnavlist2=subnavlist2.concat(newList2);
for(var i=0;i<subnavlist2.length;i++){
     str2+='<li>'+'<img src='+subnavlist2[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist2[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist2[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[1].innerHTML=str2;

// 第三个
var newList3=img1.splice(0,6);
subnavlist3=subnavlist3.concat(newList3);
for(var i=0;i<subnavlist3.length;i++){
     str3+='<li>'+'<img src='+subnavlist3[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist3[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist3[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[2].innerHTML=str3;

// 第四个
var newList4=img1.splice(0,6);
subnavlist4=subnavlist4.concat(newList4);
for(var i=0;i<subnavlist4.length;i++){
     str4+='<li>'+'<img src='+subnavlist4[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist4[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist4[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[3].innerHTML=str4;

// 第五个
var newList5=img1.splice(0,6);
subnavlist5=subnavlist5.concat(newList5);
for(var i=0;i<subnavlist5.length;i++){
     str5+='<li>'+'<img src='+subnavlist5[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist5[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist5[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[4].innerHTML=str5;

// 第六个
var newList6=img1.splice(0,6);
subnavlist6=subnavlist6.concat(newList6);
for(var i=0;i<subnavlist6.length;i++){
     str6+='<li>'+'<img src='+subnavlist6[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist6[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist6[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[5].innerHTML=str6;

// 第七个
var newList7=img1.splice(0,6);
subnavlist7=subnavlist7.concat(newList7);
for(var i=0;i<subnavlist7.length;i++){
     str7+='<li>'+'<img src='+subnavlist7[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist7[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist7[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[6].innerHTML=str7;

// 第八个
var newList8=img1.splice(0,5);
subnavlist8=subnavlist8.concat(newList8);
for(var i=0;i<subnavlist8.length;i++){
     str8+='<li>'+'<img src='+subnavlist8[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist8[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist8[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[7].innerHTML=str8;

// 第九个
var newList9=img1.splice(0,6);
subnavlist9=subnavlist9.concat(newList9);
for(var i=0;i<subnavlist9.length;i++){
     str9+='<li>'+'<img src='+subnavlist9[i].imgsrc+'>'+'<p>'+'<a href="#">'+subnavlist9[i].lr+'</a>'+'</p>'+'<p>'+'<a href="#"'+subnavlist9[i].xq+'</a>'+'</p>'+'</a>'+'</li>';
}
oSubnavList[8].innerHTML=str9;