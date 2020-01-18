// 获取切换元素
var oProductImg=document.getElementsByClassName('product-img')[0];
var oImgs=oProductImg.getElementsByTagName('img');
//获取点击元素
var oList=document.getElementsByClassName('list')[0];
var oLis=oList.getElementsByTagName('li');
// 点击事件
for(var i=0;i<oLis.length;i++){
	oLis[i].index=i;
	oLis[i].onclick=function(){
		for(var j=0;j<oImgs.length;j++){
			oImgs[j].style.display = 'none';
		}
		oImgs[this.index].style.display = 'block';
	}
}