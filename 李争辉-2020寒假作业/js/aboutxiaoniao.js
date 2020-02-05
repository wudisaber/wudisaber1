//右按钮
$("#rightbutton").click(function(){
	$(".gaishu_slider").animate({
		"left":"-1535px"
	},function(){
		$(".gaishu_slider .gaishu_block").eq(0).appendTo($(".gaishu_slider"))
		$(".gaishu_slider").css("left","0px")
	})
})


//左按钮
$("#leftbutton").click(function(){
	$(".gaishu_slider .gaishu_block:last").prependTo($(".gaishu_slider"))
	$(".gaishu_slider").css("left","-1535px")
	$(".gaishu_slider").animate({
		left:"0"
	})
})


//角显示隐藏
$(window).load(function(){
	$("html,body").mousemove(function(){
		$(".imgzuo1").fadeIn(600)
		$(".imgzuo1").fadeOut(600)
		$(".imgyou1").fadeIn(600)
		$(".imgyou1").fadeOut(600)
		$(".imagezuo1").fadeIn(600)
		$(".imagezuo1").fadeOut(600)
		$(".imageyou1").fadeIn(600)
		$(".imageyou1").fadeOut(600)
	})
})
setInterval(function(){
	$("html,body").mousemove(function(){
		$(".imgzuo1").fadeIn(600)
		$(".imgzuo1").fadeOut(600)
		$(".imgyou1").fadeIn(600)
		$(".imgyou1").fadeOut(600)
		$(".imagezuo1").fadeIn(600)
		$(".imagezuo1").fadeOut(600)
		$(".imageyou1").fadeIn(600)
		$(".imageyou1").fadeOut(600)
	})
},1000)


//小鸟掌学
$(".btn_right").click(function(){
	$(".yun_slider").animate({
		"left":"-910px"
	},function(){
		$(".yun_slider div").eq(0).appendTo($(".yun_slider"))
		$(".yun_slider").css("left","0px")
	})
	$(".btn_left span").removeClass("now")
	$(".btn_right span").addClass("now")
})
$(".btn_left").click(function(){
	$(".yun_slider div:last").prependTo($(".yun_slider"))
	$(".yun_slider").css("left","-910px")
	$(".yun_slider").animate({
		left:"0"
	})
	$(".btn_right span").removeClass("now")
	$(".btn_left span").addClass("now")
})

