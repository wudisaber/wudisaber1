// 首页banner区域轮播图
	// 获取节点
	var oDivBanner=document.getElementsByClassName('banner')[0];
	var oUlImg=document.getElementsByClassName('banner-list')[0];
	var oLisImg=oUlImg.getElementsByTagName('li');
	var oUlDot=document.getElementById('banner-list1')
	var oLiDot=oUlDot.getElementsByTagName('li');
	var oLeft=document.getElementById('left');
	var oRight=document.getElementById('right');
	// oUlImg.innerHTML=oUlImg.innerHTML+1;
	var count=0;
	var timer=null;

	// 对右箭头添加点击事件
	oRight.onclick=function(){
		count++;
		if(count>oLisImg.length-1){
			count=0;
		}
		skip()
	}

	// 对左箭头添加点击事件
	oLeft.onclick=function(){
		count--;
		if(count<0){
			count=oLisImg.length-1;
		}
		skip()
	}
	function skip(){
		for(var i=0;i<oLisImg.length;i++){
			oLisImg[i].className="";
			oLiDot[i].className="";
		}
		oLisImg[count].className="banner-skip";
		oLiDot[count].className="gray";
	}

	// 对圆点添加点击事件
	for(var j=0;j<oLiDot.length;j++){
		oLiDot[j].index=j;
		oLiDot[j].onclick=function(){
			for(var i=0;i<oLisImg.length;i++){
			oLisImg[i].className="";
			oLiDot[i].className=""
		}
		oLisImg[this.index].className="banner-skip";
		this.className="gray";
		count=this.index;
		}
	}

	// 用定时器让轮播图自动轮播
	timer=setInterval(function(){
		oRight.onclick();
	},2000)

	// 鼠标放上轮播图停止
	oDivBanner.onmouseover=function(){
		clearInterval(timer);
	}

	// 鼠标移开开始轮播
	oDivBanner.onmouseout=function(){
		timer=setInterval(function(){
		oRight.onclick();
	},2000)
	}

// tab切换区域
var oTableChange=document.getElementById('tabchange')
var oDiv=document.getElementsByClassName('main-layout3');
console.log(oDiv)
var oDiv1=document.getElementsByClassName('main-layout4')[0];
var oDivArr=oDiv1.getElementsByTagName('div');
console.log(oDivArr)
var oChange=document.getElementById('change');
var num=0;

// // 遍历需要点击的节点
function change(){
		for(var i=0;i<oDivArr.length;i++){
		// 自定义索引
		oDivArr[i].index=i;
		// 添加点击事件
		oDivArr[i].onclick=function(){
			for(var j=0;j<oDiv.length;j++){
				oDiv[j].style.display="none";
			}	
			oDiv[this.index].style.display="block";
		}
	}
}
change()

// // 点击换一批换图片
oChange.onclick=function(){
	num++;
	if(num>oDiv.length-1){
		num=0;
	}
	for(var i=0;i<oDiv.length;i++){
		oDiv[i].style.display = 'none';
	}
	oDiv[num].style.display = 'block';
}


var arr=[[{
	id:1,
	src:"../images/love1001.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:2,
	src:"../images/love1002.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:3,
	src:"../images/love1003.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:4,
	src:"../images/love1004.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:5,
	src:"../images/love1005.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:6,
	src:"../images/love1006.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:7,
	src:"../images/love1007.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:8,
	src:"../images/love1008.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
}],[{
	id:9,
	src:"../images/love2001.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:10,
	src:"../images/love2002.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:11,
	src:"../images/love2003.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:12,
	src:"../images/love2004.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:13,
	src:"../images/love2005.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:14,
	src:"../images/love2006.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
}],[{
	id:15,
	src:"../images/love3001.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:16,
	src:"../images/love3002.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:17,
	src:"../images/love3003.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:18,
	src:"../images/love3004.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:19,
	src:"../images/love3005.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:20,
	src:"../images/love3006.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:21,
	src:"../images/love3007.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:22,
	src:"../images/love3008.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
}],[{
	id:23,
	src:"../images/love4001.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:24,
	src:"../images/love4002.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:25,
	src:"../images/love4003.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:26,
	src:"../images/love4004.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:27,
	src:"../images/love4005.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:28,
	src:"../images/love4006.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:29,
	src:"../images/love4007.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:30,
	src:"../images/love4008.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
}],[{
	id:31,
	src:"../images/love5001.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:32,
	src:"../images/love5002.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:33,
	src:"../images/love5003.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:34,
	src:"../images/love5004.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:35,
	src:"../images/love5005.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:36,
	src:"../images/love5006.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:37,
	src:"../images/love5007.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},{
	id:38,
	src:"../images/love5008.jpg",
	lr:"利人 (Liven) LRT-326A",
	xq:"查看详情"
},]]

var oClick=document.getElementsByClassName('main-layout4-1');
var page = 0
			var num = 0
			var arrList = arr[num].slice(page, page + 4)
			var oList = document.getElementById("main-layout3");

			function fn() {
				var listHtml = ""
				var arrList = arr[num].slice(page, page + 4)
				for(var i = 0; i < arrList.length; i++) {
					listHtml += '<div className="main-layout3-pic">' + '<img src='+ arrList[i].src+'>'+'<p>'+'<a href="#">'+arrList[i].lr+'</a>'+'</p>'+'<a href="#">'+'<span class="span-20">'+arrList[i].xq+'</span>'+'</a>' + '</div>'
				}
				oList.innerHTML = listHtml
			}
			fn()

			var oChange = document.getElementsByClassName("tab")
			for(var j = 0; j < oChange.length; j++) {
				oChange[j].index = j
				oChange[j].onclick = function() {
					console.log(this.index)
					page = 0
					var arrList = arr[this.index].slice(page, page + 4)
					num = this.index
					fn()
					//换一批
					var that = this
					oChange.onclick = function() {
						page += 4
						if(page > arr[that.index].length) {
							page = 0
						}
						var arrList = arr[that.index].slice(page, page + 4)
						fn()
					}
				}
			}

			//初始化点击换一批

			oChange.onclick = function() {
				page += 5
				if(page > arr[0].length) {
					page = 0
				}
				var arrList = arr[0].slice(page, page + 5)
				fn()
			}