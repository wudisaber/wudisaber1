var oUlClick=document.getElementsByClassName('about-right')[0];
 	var oLiClick=oUlClick.getElementsByTagName('li')
 	console.log(oLiClick)
 	var oChange=document.getElementsByClassName('about-list');
 	console.log(oChange)
 	for(var i=0;i<oLiClick.length;i++){
 		oLiClick[i].index=i;
 		oLiClick[i].onclick=function(){
 			for(var j=0;j<oChange.length;j++){
 				oChange[j].style.display = 'none';
 				oLiClick[j].className="";
 			}
 			oChange[this.index].style.display = 'block';
 			this.className="red1";
 		}
 	}