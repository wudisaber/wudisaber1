//轮播图区域
var oPrev = document.getElementById("prev")
var oNext = document.getElementById("next")
var oMiddle = document.getElementsByClassName("middle")
var oChangeSpan = document.getElementsByClassName("change_span")
var oBannerImg = document.getElementsByClassName("banner-one")
console.log(oChangeSpan)
var oChangeImg = document.getElementsByClassName("banner_one_contents")
console.log(oChangeImg)
var count = 0;

function fn() {
	for(var j = 0; j < oChangeImg.length; j++) {
		oChangeImg[j].style.display = "none";
		oChangeSpan[j].className = "change_span";
		oBannerImg[j].style.display = "none";
	}
}
//圆点切换
for(var i = 0; i < oChangeSpan.length; i++) {
	oChangeSpan[i].index = i;
	oChangeSpan[i].onclick = function() {
		fn()
		oChangeImg[this.index].style.display = "block";
		oBannerImg[this.index].style.display = "block";
		this.className = "now change_span"

	}
}

function imgFn() {
	oChangeImg[count].style.display = "block";
	oBannerImg[count].style.display = "block";
	oChangeSpan[count].className = "now change_span"
}
//右箭头点击事件
oNext.onclick = function() {
	count++;
	if(count > oChangeImg.length - 1) {
		count = 0;
	}
	fn()
	imgFn()
}

//左箭头点击事件
oPrev.onclick = function() {
	count--;
	if(count < 0) {
		count = oChangeImg.length - 1;
	}
	fn()
	imgFn()
}

var oBanner01 = document.getElementById("banner-01")
var oBanner01 = document.getElementById("banner-02")
var oBanner01 = document.getElementById("banner-03")
console.log(oBanner01)

//偏移量:抖动所需
//这里得a代表第一个属性名,b第二个,c事第一个属性名得第一次偏移量,d第二个属性名得偏移量,e是第二个属性名得第二次偏移量,f是第三次偏移量
function Fn(a, b, c, d, e, f) {
	$(a).css("display", "block")
	$(b).css("display", "block")
	$(a).css("z-index", "99999")
	$(b).css("z-index", "99999")
	$(a).animate({
		"left": c
	}, 500)
	$(b).animate({
		"left": d
	}, 500)
	$(b).animate({
		"left": e
	}, 100)
	$(b).animate({
		"left": d
	}, 100)
	$(b).animate({
		"left": f
	}, 100)
	$(b).animate({
		"left": d
	}, 100)
}

function Fn1(a, b, c, d) {
	$(a).animate({
		"left": c
	}, 1)
	$(b).animate({
		"left": d
	}, 1)
	$(a).css("display", "none")
	$(b).css("display", "none")
}

window.onload = function() {
	if(oBanner01.style.display = "block") {
		Fn("#img01", "#img02", "343px", "375px", "305px", "375px")
	} else if(oBanner01.style.display = "none") {
		Fn1("#img01", "#img02", "-1000px", "1300px")
	}
}

//主要产品轮播图
var oClickI = document.getElementsByClassName("clickI")
console.log(oClickI)
var oContentOne = document.getElementsByClassName("content_one")
console.log(oContentOne)
var oPrevProduct = document.getElementById("prev_product")
console.log(oPrevProduct)
var oNextProduct = document.getElementById("next_product")
console.log(oNextProduct)
var num = 0;

//左侧圆点点击
for(var i = 0; i < oClickI.length; i++) {
	oClickI[i].index = i;
	oClickI[i].onclick = function() {
		for(var j = 0; j < oContentOne.length; j++) {
			oContentOne[j].style.display = "none";
			oClickI[j].className = "clickI";
		}
		oContentOne[this.index].style.display = "block";
		this.className = "clickI now";
		num = this.index
	}
}

//右箭头点击
oNextProduct.onclick = function() {
	num++
	if(num > oContentOne.length - 1) {
		num = 0
	}
	for(var j = 0; j < oContentOne.length; j++) {
		oContentOne[j].style.display = "none";
		oClickI[j].className = "clickI";
	}
	oContentOne[num].style.display = "block";
	oClickI[num].className = "clickI now";
}

//左箭头
oPrevProduct.onclick = function() {
	num--
	if(num < 0) {
		num = oContentOne.length - 1
	}
	for(var j = 0; j < oContentOne.length; j++) {
		oContentOne[j].style.display = "none";
		oClickI[j].className = "clickI";
	}
	oContentOne[num].style.display = "block";
	oClickI[num].className = "clickI now";
}

//业务范围显示隐藏

//01
//显示
$(".shousuo_img01").click(function() {
	$(".yewucontent_none").css("display", "block")
	$(".yewucontent_none").animate({
		"height": "190px"
	}, 500)
	$(".shousuo_img01").animate({
		"top": "67px"
	}, 500)
	$(".shousuo_img02").animate({
		"top": "-67px"
	}, 500)
})

//隐藏
$(".shousuo_img02").click(function() {
	$(".yewucontent_none").animate({
		"height": "0px"
	}, 500)
	$(".shousuo_img01").animate({
		"top": "0px"
	}, 500)
	$(".shousuo_img02").animate({
		"top": "-134px"
	}, 500)
})

//02
//显示
$(".shousuo_img001").click(function() {
	$(".yewucontent_none02").css("display", "block")
	$(".yewucontent_none02").animate({
		"height": "190px"
	}, 500)
	$(".shousuo_img001").animate({
		"top": "67px"
	}, 500)
	$(".shousuo_img002").animate({
		"top": "-67px"
	}, 500)
})

//隐藏
$(".shousuo_img002").click(function() {
	$(".yewucontent_none02").animate({
		"height": "0px"
	}, 500)
	$(".shousuo_img001").animate({
		"top": "0px"
	}, 500)
	$(".shousuo_img002").animate({
		"top": "-134px"
	}, 500)
})

//03
//显示
$(".shousuo_img0001").click(function() {
	$(".yewucontent_none03").css("display", "block")
	$(".yewucontent_none03").animate({
		"height": "190px"
	}, 500)
	$(".shousuo_img0001").animate({
		"top": "67px"
	}, 500)
	$(".shousuo_img0002").animate({
		"top": "-67px"
	}, 500)
})

//隐藏
$(".shousuo_img0002").click(function() {
	$(".yewucontent_none03").animate({
		"height": "0px"
	}, 500)
	$(".shousuo_img0001").animate({
		"top": "0px"
	}, 500)
	$(".shousuo_img0002").animate({
		"top": "-134px"
	}, 500)
})

//团队介绍

//右边
$("#next_team").click(function() {
	$(".team_move").animate({
		"left": "100px"
	})
	$(".team_move").animate({
		"left": "-1130px"
	}, 500, function() {
		$(".team_move .twoteam_wrap").eq(0).appendTo(".team_move")
		$(".team_move").animate({
			"left": "0"
		}, 0)
	})
})

//左边
$("#prev_team").click(function() {
	$(".team_move .twoteam_wrap:last").prependTo(".team_move")
	$(".team_move").css("left", "-1130px")
	$(".team_move").animate({
		"left": "-1130px"
	}, 500)
	$(".team_move").animate({
		"left": "300px"
	}, 500)
	$(".team_move").animate({
		"left": "0px"
	}, 600)
})

//点击箭头指示点换颜色

var oPrevTeam = document.getElementById("prev_team")
var oNextTeam = document.getElementById("next_team")
var oTeamSpan = $(".change_span1")
console.log(oTeamSpan)

var num1 = 0

function teamspan() {
	for(var i = 0; i < oTeamSpan.length; i++) {
		oTeamSpan[i].className = "change_span1";
	}
	oTeamSpan[num1].className = "now change_span1"
}

oNextTeam.onclick = function() {
	num1++
	if(num1 > oTeamSpan.length - 1) {
		num1 = 0
	}
	teamspan()
}

oPrevTeam.onclick = function() {
	num1--;
	if(num1 < 0) {
		num1 = oTeamSpan.length - 1
	}
	teamspan()
}

var timer = setInterval(function() {
	$("#next_team").click()
	oNextTeam.onclick()
}, 3000)

$(".teammove_wrap").mouseenter(function() {
	clearInterval(timer)
})

$(".teammove_wrap").mouseleave(function() {
	timer = setInterval(function() {
		$("#next_team").click()
		oNextTeam.onclick()
	}, 5000)
})

//联系我们
$(".input_box").click(function() {
	$(this).addClass("input_border")
})

$(".input_box").focusout(function() {
	$(this).removeClass("input_border")
})

//地图
setInterval(function() {
	$("html,body").click(function() {
		$(".map_img").animate({
			"top": "47%"
		})
		$(".map_img").animate({
			"top": "44%"
		})
	})
},1)