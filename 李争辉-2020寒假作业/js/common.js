//导航列表中圆点点击事件
var oSquare=document.getElementsByClassName("nav-square")
console.log(oSquare)
for(var i=0;i<oSquare.length;i++){
	oSquare[i].onclick=function(){
		oSquare[i].index=i
		for(var j=0;j<oSquare.length;j++){
			oSquare[j].className="nav-square";
		}
		this.className="nav-square active";
	}
}

//小鸟掌学下拉列表
$(".slide1").mouseenter(function(){
	$(this).addClass("nav-piece2")
	$("#nav_ul1").css("height","210px")
})
$(".slide1").mouseleave(function(){
	$(this).removeClass("nav-piece2")
	$("#nav_ul1").animate({
		"height": "0px"
	},200)
})

//企业文化
$(".slide2").mouseenter(function(){
	$(this).addClass("nav-piece4")
	$("#nav_ul2").css("height","105px")
})
$(".slide2").mouseleave(function(){
	$(this).removeClass("nav-piece4")
	$("#nav_ul2").animate({
		"height": "0px"
	},200)
})

//人力资源
$(".slide3").mouseenter(function(){
	$(this).addClass("nav-piece5")
	$("#nav_ul3").css("height","105px")
})
$(".slide3").mouseleave(function(){
	$(this).removeClass("nav-piece5")
	$("#nav_ul3").animate({
		"height": "0px"
	},300)
})



//返回顶部
//滚动条>200时显示,小于200时隐藏
$(window).scroll(function(){
	if($(window).scrollTop()>300){
		$(".backtop").fadeIn(600)
	}else {
		$(".backtop").fadeOut(600)
	}
})

//点击按钮回到最顶部
$(".scrolltop").click(function(){
	$("body,html").animate({
		"scrollTop":0
	},200)
})
