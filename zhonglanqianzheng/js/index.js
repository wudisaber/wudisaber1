//第一个数字
var timer = -17;
var oChange1 = document.getElementById("change1");
var time1 = setInterval(function() {
	timer += 99;
	oChange1.innerHTML = timer.toLocaleString();
	if(timer >= 18397) {
		timer = 18397;
		clearInterval(time1)
	}
}, 12)

//第二个数字
var timer2 = 0;
var oChange2 = document.getElementById("change2");
var timer2 = setInterval(function() {
	timer2 += 1.05;
	oChange2.innerHTML = timer2.toFixed(1) + "%";
	if(timer2 >= 98.8) {
		timer2 = 98.8;
		clearInterval(timer2)
	}
}, 24)

//第三个数字
var timer3 = 0;
var oChange3 = document.getElementById("change3");
var timer3 = setInterval(function() {
	timer3 += 10;
	oChange3.innerHTML = timer3.toLocaleString();
	if(timer3 >= 3263) {
		timer3 = 3263;
		clearInterval(timer3);
	}
}, 6)

//第四个数字
var timer4 = 0;
oChange4 = document.getElementById("change4");
var timer4 = setInterval(function() {
	timer4 += 4;
	oChange4.innerHTML = timer4 + "%";
	if(timer4 >= 100) {
		timer4 = 96;
		clearInterval(timer4)
	}
}, 80)

//我们的服务js
var oScale = document.getElementsByClassName("card-active");
console.log(oScale)
for(var i = 0; i < oScale.length; i++) {
	oScale[i].index = i;
	oScale[i].onmouseover = function() {
		for(var j = 0; j < oScale.length; j++) {
			oScale[j].className = "col-sm-3 card-active";
		}
		this.className = "col-sm-3 card-active card-scale";
	}
}