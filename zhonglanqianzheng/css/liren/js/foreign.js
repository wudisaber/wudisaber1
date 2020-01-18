// 需要点击的节点
     	var oForeignUl=document.getElementsByClassName('foreign-list')[0];
     	var oForeignLis=oForeignUl.getElementsByTagName('li');
     	// 点击切换的节点
     	var oChangeState=document.getElementsByClassName('usa');

     	for(var i=0;i<oForeignLis.length;i++){
     		oForeignLis[i].index=i;
     		oForeignLis[i].onclick=function(){
     			for(var j=0;j<oChangeState.length;j++){
     				oChangeState[j].className="usa";
     				oForeignLis[j].className="";
     			}
     			oChangeState[this.index].className="usa usablock";
     			this.className="redforegin";
     		}
     	}