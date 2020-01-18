var oClickUl1=document.getElementById('product-ul1');
var oClickLl1=oClickUl1.getElementsByTagName('li');
console.log(oClickLl1)
var oChange1=document.getElementsByClassName('product-complete');
console.log(oChange1)
var oList1=document.getElementById('product-list1')
console.log(oList1)
var oList2=document.getElementById('product-list2')
console.log(oList2)
var oList3=document.getElementById('product-list3')
console.log(oList3)

// 直径 caliber
var oProductUl3=document.getElementById('product-ul3');
var oProductUl3Lis=oProductUl3.getElementsByTagName('li');
console.log(oProductUl3Lis)
var oCaliber=document.getElementsByClassName('product-complete1');
// 选购热点
var oProductUl2=document.getElementById('product-ul2');
var oProductUl2Lis=oProductUl2.getElementsByTagName('li');
console.log(oProductUl2Lis)
var oHots=document.getElementsByClassName('product-complete2');
// 厨房电器
for(var i=0;i<oClickLl1.length;i++){
	oClickLl1[i].index=i;
	oClickLl1[i].onclick=function(){
		for(var j=0;j<oChange1.length;j++){
			oChange1[j].style.display = 'none';
			oClickLl1[j].className="";
		}
		this.className="red";
		oChange1[this.index].style.display = 'block';
		oChange1[this.index].style.display = 'flex';

		if(this.index==1){
			oList2.style.display="flex";
			oList1.style.display="none";
			oList3.style.display="none";
		}else if(this.index==2){
			oList1.style.display="flex";
			oList3.style.display="flex";
			oList2.style.display="none";
		}else {
			oList1.style.display="none";
			oList3.style.display="none";
		}
	}
}

// 直径
for(var i=0;i<oProductUl3Lis.length;i++){
	oProductUl3Lis[i].index=i;
	oProductUl3Lis[i].onclick=function(){
		for(var j=0;j<oCaliber.length;j++){
			oProductUl3Lis[j].className="";
			oCaliber[j].style.display = 'none';
			oChange1[j].style.display = 'none';
		}
		this.className="red";
		oCaliber[this.index].style.display = 'block'
		oCaliber[this.index].style.display = 'flex'
	}
}

// 选购热点

for(var i=0;i<oProductUl2Lis.length;i++){
	oProductUl2Lis[i].index=i;
	oProductUl2Lis[i].onclick=function(){
		for(var j=0;j<oHots.length;j++){
			oHots[j].style.display = 'none';
			oProductUl2Lis[j].className="";
			oChange1[j].style.display = 'none';
		}
		this.className="red";
		oHots[this.index].style.display = 'block'
		oHots[this.index].style.display = 'flex'
	}
}