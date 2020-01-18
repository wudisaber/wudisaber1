//返回顶部滑块
$(window).scroll(function() {
	var oScreenTop = $(window).scrollTop();
	if(oScreenTop < 100) {
		$("#slider-goTop").fadeOut(600);
		$("#slider-ul").css({
			position: "fixed",
			bottom: "23%",
			right: ".1%"
		})

	} else {
		$("#slider-goTop").fadeIn(600)
		$("#slider-ul").css({
			position: "fixed",
			bottom: "30%",
			right: ".1%"
		})
	}
})

$("#slider-goTop").click(function() {
	$("body,html").animate({
		"scrollTop": 0
	}, 500)
})

//请您留言
//点击隐藏
$("#btn-none").click(function() {
	$("#none-block").css("display", "none")
	$("btn-none").css("display", "none")
	$("#btn-block").css("display", "block")
})

//点击显现
$("#btn-block").click(function() {
	$("#none-block").css("display", "block")
	$("#btn-block").css("display", "none")
	$("btn-none").css("display", "block")
})

$("#btn").click(function() {
	if($("#textarea1").val() == "" && $("#phone-input").val()=="") {
		$("#textarea-content").css("display", "block")
		$("#textarea1").focus()
		$("#textarea1").css("outline-color","red")
	} else if($("#textarea1").val() != "" && $("#phone-input").val()==""){
		$("#textarea-content").css("display", "none")
		$("#phone-content").css("display", "block")
		$("#phone-input").focus()
		$("#phone-input").css("outline-color","red")
	}else{
		$("#textarea-content").css("display", "none")
		$("#phone-content").css("display", "none")
	}
})



//服务右部分通用

$(window).scroll(function(){
	var oScrollTop=$(window).scrollTop()
	if(oScrollTop>85){
		$("#sidebar").animate({
			"position":"fixed",
			"top":"90px"
		},1)
	}else{
		$("#sidebar").animate({
			"position":"fixed",
			"top":"140px"
		},1)
	}
	if(oScrollTop>2522){
		$("#sidebar").css("z-index","-999")
	}
})



//资讯tab切换
var oList=document.getElementsByClassName("list1");
console.log(oList)
var oTabs=document.getElementsByClassName("tabs");
console.log(oTabs)
var oTabs1=document.getElementsByClassName("tabs1")[0];
var oTabs2=document.getElementsByClassName("tabs2")[0];

//数字切换
for(var i=0;i<oTabs.length;i++){
	oTabs[i].index=i;
	oTabs[i].onclick=function(){
		for(var j=0;j<oList.length;j++){
			oList[j].style.display="none";
			oTabs[j].className="tabs"
		}
		this.className="active tabs";
		oList[this.index].style.display="block";
	}
}


//左右箭头切换
//左箭头
var num=0
oTabs1.onclick=function(){
	num++
	if(num>oList.length-1){
		num=0;
	}
	for(var i=0;i<oList.length;i++){
		oList[i].style.display="none";
		oTabs[i].className="tabs"
	}
	oList[num].style.display="block";
	oTabs[num].className="active tabs"
}
//右箭头
oTabs2.onclick=function(){
	num--
	if(num<0){
		num=oList.length-1;
	}
	for(var i=0;i<oList.length;i++){
		oList[i].style.display="none";
		oTabs[i].className="tabs"
	}
	oList[num].style.display="block";
	oTabs[num].className="active tabs"
}