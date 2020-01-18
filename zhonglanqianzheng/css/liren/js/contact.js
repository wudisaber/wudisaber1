var oContact=document.getElementsByClassName('contact-list')[0];
 	var oContactLi=oContact.getElementsByTagName('li');
 	console.log(oContactLi)
 	var oContactChange=document.getElementsByClassName('contact-change');
 	console.log(oContactChange)
 	var mask=document.getElementsByClassName('mask')[0];
		for(var i=0;i<oContactLi.length-1;i++){
		// 自定义索引
		oContactLi[i].index=i;
		// 添加点击事件
		oContactLi[i].addEventListener("click",function(){

			console.log(this.index);
			for(var j=0;j<oContactChange.length-1;j++){
				oContactChange[j].className="contact-change";
			}	
			oContactChange[this.index].className="contact-change contact-blo";
			//console.log(oContactChange[this.index]);
		},false)

	}

	// 蒙版点击事件
	oContactLi[2].onclick=function(){
		mask.style.display = 'block';
	}

	// 点击消失
	mask.onclick=function(e){
		e.stopPropagation();
		mask.style.display = 'none';
	}